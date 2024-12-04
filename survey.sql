-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2024 at 11:31 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `response`
--

CREATE TABLE `response` (
  `id` bigint(20) NOT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `response` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `response_1`
--

CREATE TABLE `response_1` (
  `id` bigint(20) NOT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `class` varchar(100) DEFAULT NULL,
  `roll_no` varchar(100) DEFAULT NULL,
  `date_of_birth` datetime NOT NULL,
  `unique_classID` varchar(100) DEFAULT NULL,
  `unique_studentID` varchar(100) DEFAULT NULL,
  `school` varchar(100) NOT NULL,
  `role` varchar(20) DEFAULT NULL,
  `response` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `response_1`
--

INSERT INTO `response_1` (`id`, `question_id`, `name`, `class`, `roll_no`, `date_of_birth`, `unique_classID`, `unique_studentID`, `school`, `role`, `response`, `createdAt`, `updatedAt`) VALUES
(238, 1, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'No', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(239, 2, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'A medium amount', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(240, 3, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'A little', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(241, 4, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'A medium amount', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(242, 5, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'A medium amount', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(243, 6, 'Anup Pandey', '10A', '30', '2023-09-20 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'L.R.I School', 'school', 'Yes - severe difficulties', '2023-09-28 10:21:25', '2023-09-28 10:21:25'),
(244, 1, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'No', '2023-09-29 05:27:09', '2023-09-29 05:27:09'),
(245, 2, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'A medium amount', '2023-09-29 05:27:09', '2023-09-29 05:27:09'),
(246, 3, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'A medium amount', '2023-09-29 05:27:09', '2023-09-29 05:27:09'),
(247, 4, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'A little', '2023-09-29 05:27:09', '2023-09-29 05:27:09'),
(248, 5, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'A little', '2023-09-29 05:27:09', '2023-09-29 05:27:09'),
(249, 6, 'Shweta Thapa', '10B', '30', '2023-09-14 00:00:00', 'RatoBangla10B', 'RatoBangla10BST30', 'Rato Bangla School', 'school', 'Yes - minor difficulties', '2023-09-29 05:27:09', '2023-09-29 05:27:09');

-- --------------------------------------------------------

--
-- Table structure for table `response_2`
--

CREATE TABLE `response_2` (
  `id` bigint(20) NOT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `class` varchar(100) NOT NULL,
  `roll_no` varchar(100) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `unique_classID` varchar(100) NOT NULL,
  `unique_studentID` varchar(100) NOT NULL,
  `role` varchar(20) DEFAULT NULL,
  `response` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `response_2`
--

INSERT INTO `response_2` (`id`, `question_id`, `name`, `class`, `roll_no`, `date_of_birth`, `unique_classID`, `unique_studentID`, `role`, `response`, `createdAt`, `updatedAt`) VALUES
(459, 1, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(460, 2, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(461, 3, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(462, 4, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(463, 5, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(464, 6, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(465, 7, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(466, 8, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(467, 9, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(468, 10, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(469, 11, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(470, 12, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(471, 13, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(472, 14, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(473, 15, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(474, 16, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(475, 17, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(476, 18, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(477, 19, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(478, 20, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(479, 21, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(480, 22, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Certainly True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(481, 23, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Not True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(482, 24, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43'),
(483, 25, 'Anup Pandey', '10A', '30', '2023-09-07 00:00:00', 'L.R.ISchool10A', 'L.R.ISchool10AAP30', 'school', 'Somewhat True', '2023-09-28 10:22:43', '2023-09-28 10:22:43');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230724064451-create_users_table.js'),
('20230813092115-create-survey-questions-1.js'),
('20230813092345-create-response-1.js'),
('20230815084945-survey_questions_2.js'),
('20230816064346-create-response-2.js');

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions`
--

CREATE TABLE `survey_questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions`
--

INSERT INTO `survey_questions` (`id`, `question`, `createdAt`, `updatedAt`) VALUES
(1, 'I try to be nice to other people. I care about their feelings', '2023-08-07 06:49:38', '2023-08-07 06:49:38'),
(2, 'I get a lot of headaches, stomach-aches, or sickness', '2023-08-07 08:32:56', '2023-08-07 08:32:56'),
(3, 'I usually share with others, for example CDs, games, food', '2023-08-07 08:33:13', '2023-08-07 08:33:13'),
(4, 'I get very angry and often lose my temper', '2023-08-07 08:33:27', '2023-08-07 08:33:27'),
(5, 'I would rather be alone than with people of my age', '2023-08-07 08:33:40', '2023-08-07 08:33:40');

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions_1`
--

CREATE TABLE `survey_questions_1` (
  `id` bigint(20) NOT NULL,
  `question` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions_1`
--

INSERT INTO `survey_questions_1` (`id`, `question`, `createdAt`, `updatedAt`) VALUES
(1, 'Overall, do you think that you have difficulties in any of the following areas: emotions, concentration, behavior or being able to get along with other people?', '2023-08-14 03:52:27', '2023-08-14 03:52:27'),
(2, 'Do the difficulties interfere with your everyday life in the following areas?', '2023-08-14 03:53:13', '2023-08-14 03:53:13'),
(3, 'FRIENDSHIPS', '2023-08-14 03:55:33', '2023-08-14 03:55:33'),
(4, 'CLASSROOM LEARNING', '2023-08-14 03:56:01', '2023-08-14 03:56:01'),
(5, ' LEISURE or FREE TIME ACTIVITIES', '2023-08-14 03:56:31', '2023-08-14 03:56:31'),
(6, 'Do the difficulties upset or distress you?', '2023-08-14 03:56:50', '2023-08-14 03:56:50');

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions_2`
--

CREATE TABLE `survey_questions_2` (
  `id` bigint(20) NOT NULL,
  `question` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions_2`
--

INSERT INTO `survey_questions_2` (`id`, `question`, `createdAt`, `updatedAt`) VALUES
(1, 'I try to be nice to other people. I care about their feelings', '2023-08-15 09:00:03', '2023-08-15 09:00:03'),
(2, 'I am restless, I cannot stay still for long', '2023-08-15 09:01:38', '2023-08-15 09:01:38'),
(3, 'I get a lot of headaches, stomach-aches, or sickness', '2023-08-15 09:02:12', '2023-08-15 09:02:12'),
(4, 'I usually share with others, for example CDs, games, food', '2023-08-15 09:02:39', '2023-08-15 09:02:39'),
(5, 'I get very angry and often lose my temper', '2023-08-15 09:02:55', '2023-08-15 09:02:55'),
(6, 'I would rather be alone than with people of my age', '2023-08-15 09:03:18', '2023-08-15 09:03:18'),
(7, 'I usually do as I am told', '2023-08-15 09:03:33', '2023-08-15 09:03:33'),
(8, 'I worry a lot', '2023-08-15 09:03:49', '2023-08-15 09:03:49'),
(9, 'I am helpful if someone is hurt, upset or feeling ill', '2023-08-15 09:04:04', '2023-08-15 09:04:04'),
(10, 'I am constantly fidgeting or squirming(Squirming means :wriggle or twist the body from side to side, especially as a result of nervousness or discomfort)', '2023-08-15 09:05:04', '2023-08-15 09:05:04'),
(11, 'I have one good friend or more', '2023-08-15 09:06:27', '2023-08-15 09:06:27'),
(12, 'I fight a lot. I can make other people do what I want', '2023-08-15 09:06:43', '2023-08-15 09:06:43'),
(13, 'I am often unhappy, depressed or tearful', '2023-08-15 09:07:01', '2023-08-15 09:07:01'),
(14, 'Other people my age generally like me', '2023-08-15 09:07:15', '2023-08-15 09:07:15'),
(15, 'I am easily distracted, I find it difficult to concentrate', '2023-08-15 09:07:32', '2023-08-15 09:07:32'),
(16, 'I am nervous in new situations. I easily lose confidence', '2023-08-15 09:07:46', '2023-08-15 09:07:46'),
(17, 'I am kind to younger children', '2023-08-15 09:08:06', '2023-08-15 09:08:06'),
(18, 'I am often accused of lying or cheating', '2023-08-15 09:08:28', '2023-08-15 09:08:28'),
(19, 'Other children or young people pick on me or bully me', '2023-08-15 09:09:05', '2023-08-15 09:09:05'),
(20, 'I often volunteer to help others (parents, teachers, children)', '2023-08-15 09:09:20', '2023-08-15 09:09:20'),
(21, 'I think before I do things', '2023-08-15 09:10:56', '2023-08-15 09:10:56'),
(22, 'I take things that are not mine from home, school or elsewhere', '2023-08-15 09:11:17', '2023-08-15 09:11:17'),
(23, 'I get along better with adults than with people my own age', '2023-08-15 09:11:38', '2023-08-15 09:11:38'),
(24, 'I have many fears, I am easily scared', '2023-08-15 09:12:23', '2023-08-15 09:12:23'),
(25, 'I finish the work I‟m doing. My attention is good', '2023-08-15 09:12:48', '2023-08-15 09:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` enum('admin','teachers','school') NOT NULL,
  `status` enum('active','inactive') DEFAULT 'inactive',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'test@gmail.com', 'sha1$5d7a2e66$1$182e8d293dd9699afe314154a73d6066469080c5', 'admin', 'active', '2023-07-24 11:38:50', '2023-07-24 11:38:50'),
(29, 'Rato Bangla School', 'rbs@gmail.com', 'sha1$7be5face$1$44ad9c62259d755b397b938e7e4141af59e1d324', 'school', 'inactive', '2023-08-23 10:15:09', '2023-08-23 10:15:09'),
(30, 'Little Angels School', 'littleangels@gmail.com', 'sha1$0cd7cf2c$1$82c359fe21dc216e285d8580149870ad790a872f', 'school', 'inactive', '2023-08-23 10:15:43', '2023-08-23 10:15:43'),
(31, 'L.R.I School', 'lri@gmail.com', 'sha1$74cdc1ec$1$d80e78c9ade2bccaae967e8092600498f9de7082', 'school', 'inactive', '2023-08-23 10:16:12', '2023-08-23 10:16:12'),
(33, 'TeacherRatoBangla', 'rbsteacher@gmail.com', 'sha1$a021d58c$1$46e969dac23b9d2228a37a251e190533dd7049df', 'teachers', 'inactive', '2023-09-29 09:10:20', '2023-09-29 09:10:20'),
(35, 'St Xavier\'s school', 'xavier@gmail.com', 'sha1$7ac2905b$1$4d58aee29b387bb7513f3909af445c28ee7717ec', 'school', 'inactive', '2023-09-29 09:26:21', '2023-09-29 09:26:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `response`
--
ALTER TABLE `response`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `response_1`
--
ALTER TABLE `response_1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `response_2`
--
ALTER TABLE `response_2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `survey_questions`
--
ALTER TABLE `survey_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_questions_1`
--
ALTER TABLE `survey_questions_1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey_questions_2`
--
ALTER TABLE `survey_questions_2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `response`
--
ALTER TABLE `response`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `response_1`
--
ALTER TABLE `response_1`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `response_2`
--
ALTER TABLE `response_2`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=484;

--
-- AUTO_INCREMENT for table `survey_questions`
--
ALTER TABLE `survey_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `survey_questions_1`
--
ALTER TABLE `survey_questions_1`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `survey_questions_2`
--
ALTER TABLE `survey_questions_2`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `response`
--
ALTER TABLE `response`
  ADD CONSTRAINT `response_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `surveyquestion` (`id`);

--
-- Constraints for table `response_1`
--
ALTER TABLE `response_1`
  ADD CONSTRAINT `response_1_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `survey_questions_1` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `response_2`
--
ALTER TABLE `response_2`
  ADD CONSTRAINT `response_2_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `survey_questions_2` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
