-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2018 at 04:25 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `examsubmission`
--
CREATE DATABASE IF NOT EXISTS `examsubmission` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `examsubmission`;

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `userid` int(11) NOT NULL,
  `deadline` varchar(70) NOT NULL,
  `pix` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`id`, `title`, `userid`, `deadline`, `pix`, `status`) VALUES
(8, 'Assignment 1', 3, '2018-02-10T20:11', '3103761.png', 0),
(9, 'assignment 2', 3, '2018-02-17T12:00', '4715094.png', 0),
(10, 'Assignment 3', 3, '2018-02-24T12:00', '7241145.png', 0),
(11, 'Assignment 4', 3, '2018-02-23T18:55', '3237886.png', 0),
(12, 'assignment', 3, '2018-02-12T12:00', '1017570.png', 0),
(13, 'more assignment', 3, '2018-02-21T06:59', '1838916.png', 0);

-- --------------------------------------------------------

--
-- Table structure for table `submissionlist`
--

CREATE TABLE `submissionlist` (
  `id` int(11) NOT NULL,
  `assid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `subtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ref` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submissionlist`
--

INSERT INTO `submissionlist` (`id`, `assid`, `userid`, `subtime`, `ref`, `status`) VALUES
(3, 9, 3, '2018-02-26 09:31:05', '1519633821965', 0),
(4, 11, 3, '2018-02-26 09:34:09', '1519634036979', 0),
(5, 12, 3, '2018-02-26 13:22:54', '1519647740073', 0),
(6, 12, 3, '2018-02-26 13:23:01', '1519647740073', 0),
(7, 11, 5, '2018-02-27 05:43:13', '1519706489049', 0),
(8, 12, 5, '2018-02-27 05:49:14', '1519706936163', 0),
(12, 10, 5, '2018-02-27 06:00:02', '1519707592020', 0),
(13, 12, 5, '2018-02-27 06:03:36', '1519707806273', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userid` varchar(40) NOT NULL,
  `mobileno` varchar(40) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `role` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userid`, `mobileno`, `name`, `password`, `role`, `status`) VALUES
(1, 'Com111', '09099868676', 'Oginni', '*5B2C63CB8D493D623885EAA1B72FF79DD6FD67F1', 2, 0),
(2, 'F/HD/15/3210093', '09099868676', 'Adenuga', '*8AF8137F50D28C3C741759FF900077D5352DBAB3', 1, 0),
(3, 'Com321', '09099868676', 'Dr. Adigun', '*5B2C63CB8D493D623885EAA1B72FF79DD6FD67F1', 2, 0),
(4, 'F/HD/15/3210787', '07066890928', 'Adeojo', '*8AF8137F50D28C3C741759FF900077D5352DBAB3', 1, 0),
(5, 'F/HD/15/321097', '0906565365', 'tola', '*5B2C63CB8D493D623885EAA1B72FF79DD6FD67F1', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submissionlist`
--
ALTER TABLE `submissionlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `submissionlist`
--
ALTER TABLE `submissionlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
