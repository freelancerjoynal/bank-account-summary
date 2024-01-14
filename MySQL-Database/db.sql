-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2024 at 02:00 PM
-- Server version: 10.6.14-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u939175683_bank_account`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_informations`
--

CREATE TABLE `account_informations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_holder` bigint(20) UNSIGNED NOT NULL,
  `credits` decimal(20,2) NOT NULL,
  `debits` decimal(20,2) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `txn_date` date DEFAULT NULL,
  `txn_time` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `account_informations`
--

INSERT INTO `account_informations` (`id`, `account_holder`, `credits`, `debits`, `description`, `category`, `txn_date`, `txn_time`, `created_at`, `updated_at`) VALUES
(25, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(27, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(28, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(29, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(30, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(31, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(32, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(33, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(34, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(35, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(36, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(37, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(38, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(39, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(40, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(41, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(42, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(43, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(44, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(45, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(46, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(47, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(48, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(49, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(50, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(51, 5, '2500.00', '0.00', 'After posted descripion', 'Posted', '2024-01-02', '1704153600', '2024-01-03 03:24:22', '2024-01-03 03:24:22'),
(52, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(53, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(54, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(55, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(56, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(57, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(58, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(59, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(60, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(61, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(62, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(63, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(64, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(65, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(66, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(67, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(68, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(69, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(70, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(71, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(72, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(73, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(74, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(75, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(76, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(77, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(78, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(79, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(80, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(81, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(82, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(83, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(84, 5, '343.00', '0.00', '3rd january credit', 'January', '2024-01-03', '1704240000', '2024-01-03 09:32:25', '2024-01-03 09:32:25'),
(85, 5, '5478.00', '0.00', 'Comming soon', 'Pending Amout', '2024-01-05', '1704412800', '2024-01-03 10:19:50', '2024-01-03 10:19:50'),
(86, 5, '454.00', '0.00', 'Pending test', 'Pending', '2024-01-10', '1704844800', '2024-01-07 12:16:11', '2024-01-07 12:16:11');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_12_24_090752_create_account_informations_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ac_no` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role_as` int(1) NOT NULL DEFAULT 1 COMMENT '0=Admin 1=User',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL DEFAULT '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `ac_no`, `name`, `email`, `role_as`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 0, 'Admin', 'mainadmin@gmail.com', 0, NULL, '$2y$12$PpP8c7Lpou82CbMk5v96Pul/lk.173Z1OIwSs7.Ogj4AHtEgYupVC', NULL, '2023-12-22 07:51:57', '2023-12-22 07:51:57'),
(5, 834834556345, 'Bank user', 'bankuser@gmail.com', 1, NULL, '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6', NULL, '2023-12-29 03:55:03', '2023-12-29 03:55:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_informations`
--
ALTER TABLE `account_informations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_informations_account_holder_foreign` (`account_holder`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_informations`
--
ALTER TABLE `account_informations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account_informations`
--
ALTER TABLE `account_informations`
  ADD CONSTRAINT `account_informations_account_holder_foreign` FOREIGN KEY (`account_holder`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
