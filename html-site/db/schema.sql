-- Taxsi blog veritabanı şeması (MySQL 5.7+ / MariaDB 10.2+)
-- Kurulum:  npm run db:setup
--
-- Tasarım notu: içerik çok dilli olduğu için başlık/açıklama/gövde ayrı bir
-- çeviri tablosunda tutulur. Böylece yeni bir dil eklemek şema değişikliği
-- değil, sadece yeni satır demektir.

SET NAMES utf8mb4;

/* ---------- Yazılar ---------- */
CREATE TABLE IF NOT EXISTS posts (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug          VARCHAR(191) NOT NULL,
  published_on  DATE         NOT NULL,           -- yazının tarihi (posts.mjs'teki `date`)
  updated_on    DATE         NULL,               -- düzenlendiyse; schema.org dateModified
  status        ENUM('draft','published') NOT NULL DEFAULT 'published',
  created_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  changed_at    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_posts_slug (slug),
  KEY ix_posts_published (status, published_on)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* ---------- Çeviriler ---------- */
CREATE TABLE IF NOT EXISTS post_translations (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  post_id     INT UNSIGNED NOT NULL,
  lang        CHAR(2)      NOT NULL,             -- en | tr | ru
  title       VARCHAR(255) NOT NULL,
  description VARCHAR(500) NOT NULL,             -- meta description
  body        MEDIUMTEXT   NOT NULL,             -- HTML gövde
  changed_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_translation (post_id, lang),
  CONSTRAINT fk_tr_post FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* ---------- Etiketler ---------- */
CREATE TABLE IF NOT EXISTS tags (
  id   INT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug VARCHAR(64)  NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_tags_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS post_tags (
  post_id INT UNSIGNED NOT NULL,
  tag_id  INT UNSIGNED NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  CONSTRAINT fk_pt_post FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
  CONSTRAINT fk_pt_tag  FOREIGN KEY (tag_id)  REFERENCES tags  (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* ---------- Reklamlar ---------- */
-- Reklam metni tek yerde durur; hangi yazıda nerede görüneceği post_ads'te.
CREATE TABLE IF NOT EXISTS ads (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ad_key     VARCHAR(64)  NOT NULL,              -- ör. 'bellapais-hotel'
  advertiser VARCHAR(191) NULL,
  starts_on  DATE         NULL,                  -- kampanya başlangıcı (boşsa hemen)
  ends_on    DATE         NULL,                  -- bitişi (boşsa süresiz)
  active     TINYINT(1)   NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE KEY uq_ads_key (ad_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ad_translations (
  id      INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ad_id   INT UNSIGNED NOT NULL,
  lang    CHAR(2)      NOT NULL,
  html    TEXT         NOT NULL,                 -- reklam kutusunun içeriği
  PRIMARY KEY (id),
  UNIQUE KEY uq_ad_translation (ad_id, lang),
  CONSTRAINT fk_adtr_ad FOREIGN KEY (ad_id) REFERENCES ads (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Yerleşim: hangi reklam, hangi yazıda, kaçıncı paragraftan sonra.
-- post_id NULL = tüm yazılarda göster.
CREATE TABLE IF NOT EXISTS post_ads (
  id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ad_id         INT UNSIGNED NOT NULL,
  post_id       INT UNSIGNED NULL,
  after_heading INT UNSIGNED NULL DEFAULT 3,     -- kaçıncı <p>'den sonra
  PRIMARY KEY (id),
  KEY ix_post_ads_post (post_id),
  CONSTRAINT fk_pa_ad   FOREIGN KEY (ad_id)   REFERENCES ads   (id) ON DELETE CASCADE,
  CONSTRAINT fk_pa_post FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
