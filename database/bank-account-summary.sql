-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2024 at 03:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bank-account-summary`
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
(91, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(94, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(95, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(96, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(97, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(98, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(99, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(100, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(101, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(102, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(103, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(104, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(105, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(106, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(107, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(108, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(109, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(110, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(111, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(112, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(113, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(114, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(115, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(116, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(117, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(118, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(119, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(120, 7, 999.00, 0.00, 'Test', 'Test', '2024-01-14', '505190400', '2024-01-15 01:18:11', '2024-01-15 01:18:11'),
(121, 7, 8.00, 0.00, 'Test', 'Test', NULL, '0', '2024-01-18 09:59:26', '2024-01-18 09:59:26'),
(122, 8, 500.00, 0.00, 'Test', 'Test', '2024-01-21', '1705795200', '2024-01-19 00:35:03', '2024-01-19 00:35:03');

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
(5, '2023_12_24_090752_create_account_informations_table', 2),
(6, '2024_01_18_130755_create_statements_table', 3);

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
-- Table structure for table `statements`
--

CREATE TABLE `statements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `statements`
--

INSERT INTO `statements` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'First statement', NULL, NULL),
(3, 'Second Statement', NULL, NULL);

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
(7, 749837498263, 'Bank User One', 'bankuserone@gmail.com', 1, NULL, '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6', NULL, '2024-01-15 01:14:30', '2024-01-15 01:14:30'),
(8, 5004325345, 'Second', 'yeakubali01923636502@gmail.com', 1, NULL, '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6', NULL, '2024-01-18 09:57:30', '2024-01-18 09:57:30'),
(10, 4543544334, 'New', 'new@gmail.com', 1, NULL, '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6', NULL, '2024-01-18 09:58:12', '2024-01-18 09:58:12'),
(12, 749837498263, 'Bank User two', 'bankuserones@gmail.com', 1, NULL, '$2y$12$hQt6BXtUwzVEmazmnw5XpecWmfB17U0G/XWXkY9zqT6.h156SYSO6', NULL, '2024-01-15 01:14:30', '2024-01-15 01:14:30');

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
-- Indexes for table `statements`
--
ALTER TABLE `statements`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `statements`
--
ALTER TABLE `statements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
