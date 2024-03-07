-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for electususers
CREATE DATABASE IF NOT EXISTS `electususers` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `electususers`;

-- Dumping structure for table electususers.auth_group
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_group: ~0 rows (approximately)
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;

-- Dumping structure for table electususers.auth_group_permissions
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_group_permissions: ~0 rows (approximately)
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;

-- Dumping structure for table electususers.auth_permission
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_permission: ~72 rows (approximately)
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
	(1, 'Can add log entry', 1, 'add_logentry'),
	(2, 'Can change log entry', 1, 'change_logentry'),
	(3, 'Can delete log entry', 1, 'delete_logentry'),
	(4, 'Can view log entry', 1, 'view_logentry'),
	(5, 'Can add permission', 2, 'add_permission'),
	(6, 'Can change permission', 2, 'change_permission'),
	(7, 'Can delete permission', 2, 'delete_permission'),
	(8, 'Can view permission', 2, 'view_permission'),
	(9, 'Can add group', 3, 'add_group'),
	(10, 'Can change group', 3, 'change_group'),
	(11, 'Can delete group', 3, 'delete_group'),
	(12, 'Can view group', 3, 'view_group'),
	(13, 'Can add user', 4, 'add_user'),
	(14, 'Can change user', 4, 'change_user'),
	(15, 'Can delete user', 4, 'delete_user'),
	(16, 'Can view user', 4, 'view_user'),
	(17, 'Can add content type', 5, 'add_contenttype'),
	(18, 'Can change content type', 5, 'change_contenttype'),
	(19, 'Can delete content type', 5, 'delete_contenttype'),
	(20, 'Can view content type', 5, 'view_contenttype'),
	(21, 'Can add session', 6, 'add_session'),
	(22, 'Can change session', 6, 'change_session'),
	(23, 'Can delete session', 6, 'delete_session'),
	(24, 'Can view session', 6, 'view_session'),
	(25, 'Can add fuk aktivnost', 7, 'add_fukaktivnost'),
	(26, 'Can change fuk aktivnost', 7, 'change_fukaktivnost'),
	(27, 'Can delete fuk aktivnost', 7, 'delete_fukaktivnost'),
	(28, 'Can view fuk aktivnost', 7, 'view_fukaktivnost'),
	(29, 'Can add fuk gfuk', 8, 'add_fukgfuk'),
	(30, 'Can change fuk gfuk', 8, 'change_fukgfuk'),
	(31, 'Can delete fuk gfuk', 8, 'delete_fukgfuk'),
	(32, 'Can view fuk gfuk', 8, 'view_fukgfuk'),
	(33, 'Can add fuk help', 9, 'add_fukhelp'),
	(34, 'Can change fuk help', 9, 'change_fukhelp'),
	(35, 'Can delete fuk help', 9, 'delete_fukhelp'),
	(36, 'Can view fuk help', 9, 'view_fukhelp'),
	(37, 'Can add fuk oblast', 10, 'add_fukoblast'),
	(38, 'Can change fuk oblast', 10, 'change_fukoblast'),
	(39, 'Can delete fuk oblast', 10, 'delete_fukoblast'),
	(40, 'Can view fuk oblast', 10, 'view_fukoblast'),
	(41, 'Can add fuk organizacija', 11, 'add_fukorganizacija'),
	(42, 'Can change fuk organizacija', 11, 'change_fukorganizacija'),
	(43, 'Can delete fuk organizacija', 11, 'delete_fukorganizacija'),
	(44, 'Can view fuk organizacija', 11, 'view_fukorganizacija'),
	(45, 'Can add fuk orgjed', 12, 'add_fukorgjed'),
	(46, 'Can change fuk orgjed', 12, 'change_fukorgjed'),
	(47, 'Can delete fuk orgjed', 12, 'delete_fukorgjed'),
	(48, 'Can view fuk orgjed', 12, 'view_fukorgjed'),
	(49, 'Can add fuk potpis', 13, 'add_fukpotpis'),
	(50, 'Can change fuk potpis', 13, 'change_fukpotpis'),
	(51, 'Can delete fuk potpis', 13, 'delete_fukpotpis'),
	(52, 'Can view fuk potpis', 13, 'view_fukpotpis'),
	(53, 'Can add fuk procedura', 14, 'add_fukprocedura'),
	(54, 'Can change fuk procedura', 14, 'change_fukprocedura'),
	(55, 'Can delete fuk procedura', 14, 'delete_fukprocedura'),
	(56, 'Can view fuk procedura', 14, 'view_fukprocedura'),
	(57, 'Can add fuk proces', 15, 'add_fukproces'),
	(58, 'Can change fuk proces', 15, 'change_fukproces'),
	(59, 'Can delete fuk proces', 15, 'delete_fukproces'),
	(60, 'Can view fuk proces', 15, 'view_fukproces'),
	(61, 'Can add fuk proces veza', 16, 'add_fukprocesveza'),
	(62, 'Can change fuk proces veza', 16, 'change_fukprocesveza'),
	(63, 'Can delete fuk proces veza', 16, 'delete_fukprocesveza'),
	(64, 'Can view fuk proces veza', 16, 'view_fukprocesveza'),
	(65, 'Can add fuk rizik', 17, 'add_fukrizik'),
	(66, 'Can change fuk rizik', 17, 'change_fukrizik'),
	(67, 'Can delete fuk rizik', 17, 'delete_fukrizik'),
	(68, 'Can view fuk rizik', 17, 'view_fukrizik'),
	(69, 'Can add fuk riziks', 18, 'add_fukriziks'),
	(70, 'Can change fuk riziks', 18, 'change_fukriziks'),
	(71, 'Can delete fuk riziks', 18, 'delete_fukriziks'),
	(72, 'Can view fuk riziks', 18, 'view_fukriziks');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;

-- Dumping structure for table electususers.auth_user
CREATE TABLE IF NOT EXISTS `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_user: ~0 rows (approximately)
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
	(1, 'pbkdf2_sha256$260000$f11EUHJhawheuiknN6TM3u$t8dIR5LpDF8D6zLpJVFL5SockijDtEKum95j+jI/4NY=', '2022-06-07 16:08:02.150364', 1, 'vlada', '', '', 'kocovic.vladimir@gmail.com', 1, 1, '2022-06-07 16:06:58.588105'),
	(2, 'pbkdf2_sha256$260000$5KOpIhwAx8JFgIFBjErBTh$as3aKSWmWCT0zZybj6cZZSyRQYUWeKpVi4iH63kQROQ=', '2022-06-27 21:04:31.526349', 1, 'admin', '', '', 'admin@fuk.com', 1, 1, '2022-06-24 06:12:32.840582');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;

-- Dumping structure for table electususers.auth_user_groups
CREATE TABLE IF NOT EXISTS `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_user_groups: ~0 rows (approximately)
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;

-- Dumping structure for table electususers.auth_user_user_permissions
CREATE TABLE IF NOT EXISTS `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.auth_user_user_permissions: ~0 rows (approximately)
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;

-- Dumping structure for table electususers.django_admin_log
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.django_admin_log: ~0 rows (approximately)
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
	(1, '2022-06-07 16:26:42.315754', '1', 'FukAktivnost object (1)', 1, '[{"added": {}}]', 7, 1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;

-- Dumping structure for table electususers.django_content_type
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.django_content_type: ~18 rows (approximately)
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
	(1, 'admin', 'logentry'),
	(3, 'auth', 'group'),
	(2, 'auth', 'permission'),
	(4, 'auth', 'user'),
	(5, 'contenttypes', 'contenttype'),
	(7, 'fuk', 'fukaktivnost'),
	(8, 'fuk', 'fukgfuk'),
	(9, 'fuk', 'fukhelp'),
	(10, 'fuk', 'fukoblast'),
	(11, 'fuk', 'fukorganizacija'),
	(12, 'fuk', 'fukorgjed'),
	(13, 'fuk', 'fukpotpis'),
	(14, 'fuk', 'fukprocedura'),
	(15, 'fuk', 'fukproces'),
	(16, 'fuk', 'fukprocesveza'),
	(17, 'fuk', 'fukrizik'),
	(18, 'fuk', 'fukriziks'),
	(6, 'sessions', 'session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;

-- Dumping structure for table electususers.django_migrations
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.django_migrations: ~23 rows (approximately)
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
	(1, 'contenttypes', '0001_initial', '2022-06-07 12:46:34.491132'),
	(2, 'auth', '0001_initial', '2022-06-07 12:46:34.872514'),
	(3, 'admin', '0001_initial', '2022-06-07 12:46:34.962030'),
	(4, 'admin', '0002_logentry_remove_auto_add', '2022-06-07 12:46:34.973376'),
	(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-06-07 12:46:34.986499'),
	(6, 'contenttypes', '0002_remove_content_type_name', '2022-06-07 12:46:35.047585'),
	(7, 'auth', '0002_alter_permission_name_max_length', '2022-06-07 12:46:35.087318'),
	(8, 'auth', '0003_alter_user_email_max_length', '2022-06-07 12:46:35.113557'),
	(9, 'auth', '0004_alter_user_username_opts', '2022-06-07 12:46:35.122788'),
	(10, 'auth', '0005_alter_user_last_login_null', '2022-06-07 12:46:35.162466'),
	(11, 'auth', '0006_require_contenttypes_0002', '2022-06-07 12:46:35.166719'),
	(12, 'auth', '0007_alter_validators_add_error_messages', '2022-06-07 12:46:35.176671'),
	(13, 'auth', '0008_alter_user_username_max_length', '2022-06-07 12:46:35.203388'),
	(14, 'auth', '0009_alter_user_last_name_max_length', '2022-06-07 12:46:35.229092'),
	(15, 'auth', '0010_alter_group_name_max_length', '2022-06-07 12:46:35.253102'),
	(16, 'auth', '0011_update_proxy_permissions', '2022-06-07 12:46:35.264074'),
	(17, 'auth', '0012_alter_user_first_name_max_length', '2022-06-07 12:46:35.288806'),
	(18, 'fuk', '0001_initial', '2022-06-07 12:46:35.313295'),
	(19, 'sessions', '0001_initial', '2022-06-07 12:46:35.351980'),
	(20, 'fuk', '0002_fukaktivnost', '2022-06-07 17:15:48.704338'),
	(21, 'fuk', '0003_alter_fukaktivnost_options', '2022-06-07 17:15:48.709390'),
	(22, 'fuk', '0004_alter_fukaktivnost_table', '2022-06-07 17:15:48.714384'),
	(23, 'fuk', '0005_fukgfuk_fukhelp_fukoblast_fukorganizacija_fukorgjed_fukpotpis_fukprocedura_fukproces_fukprocesveza_f', '2022-06-07 17:15:48.742280');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;

-- Dumping structure for table electususers.django_session
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table electususers.django_session: ~5 rows (approximately)
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
	('bm9ebodrk27zdsg8i7too5q9i0oyf3yd', '.eJxVjMsOwiAQRf-FtSEwA0zr0r3fQIaHUjWQlHZl_HdD0oVu7znnvoXnfSt-73n1SxJnAeL0uwWOz1wHSA-u9yZjq9u6BDkUedAury3l1-Vw_w4K9zJqhKiRkSEESgTBYgbL5GieorqhpezU5JSeCS1oMhyyTayJHRpgIz5fzyo3AA:1o5DNe:9IaODiNzQTanEmEC-hDPRz5dNK_sdT04Wx_zhgisa0Y', '2022-06-26 07:31:50.245036'),
	('lwcs5z5vqpeob9vlfrb1p5rr44v4hkpn', '.eJxVjMsOwiAQRf-FtSEwA0zr0r3fQIaHUjWQlHZl_HdD0oVu7znnvoXnfSt-73n1SxJnAeL0uwWOz1wHSA-u9yZjq9u6BDkUedAury3l1-Vw_w4K9zJqhKiRkSEESgTBYgbL5GieorqhpezU5JSeCS1oMhyyTayJHRpgIz5fzyo3AA:1o5NUt:KQH6akfPYiDWUGwLpYBxPAmui_wYhSO2Ur9L-DhTXW0', '2022-06-26 18:19:59.035243'),
	('nti2rmqau9n1c7b0giur4gyf3we7dpng', '.eJxVjMsOwiAQRf-FtSEwA0zr0r3fQIaHUjWQlHZl_HdD0oVu7znnvoXnfSt-73n1SxJnAeL0uwWOz1wHSA-u9yZjq9u6BDkUedAury3l1-Vw_w4K9zJqhKiRkSEESgTBYgbL5GieorqhpezU5JSeCS1oMhyyTayJHRpgIz5fzyo3AA:1o5vuJ:pXhAZz2EWrAThS950AEJP0TUW5n7tV95myTcLK8msSo', '2022-06-28 07:04:31.529341'),
	('p4e2001cijx7grdt41nerndf6bjxuzlo', '.eJxVjMsOwiAQRf-FtSEwA0zr0r3fQIaHUjWQlHZl_HdD0oVu7znnvoXnfSt-73n1SxJnAeL0uwWOz1wHSA-u9yZjq9u6BDkUedAury3l1-Vw_w4K9zJqhKiRkSEESgTBYgbL5GieorqhpezU5JSeCS1oMhyyTayJHRpgIz5fzyo3AA:1o4cYY:cyHDjdetOqClW0T9QHWO5AAuCMKupLo3SqExhczgcTM', '2022-07-08 06:12:38.616024'),
	('yekcium7mvqedr1c8bigqwg5ifzfwdvg', '.eJxVjMsOwiAQRf-FtSHM8KxL934DAQakaiAp7cr479qkC93ec859MR-2tfpt5MXPxM4M2Ol3iyE9ctsB3UO7dZ56W5c58l3hBx382ik_L4f7d1DDqN-6GCgyoCmAyWlBSgBMVAhJ5qKd1VYJjKhROIs2KmtciZMgCVkaqRR7fwDIgDaw:1nybkQ:EIj6UHKH3WHDSmY-a3d7WqJ_TbCL0sWsLxqL8H9n1Kc', '2022-06-21 16:08:02.153381');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
