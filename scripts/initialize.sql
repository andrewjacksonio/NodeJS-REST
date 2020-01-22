CREATE DATABASE IF NOT EXISTS mydb;
use mydb;

CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `class` varchar(200) NOT NULL,
  `nationality` varchar(200) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE `students` ADD PRIMARY KEY (`id`);
ALTER TABLE `students` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `students` (`id`, `firstName`, `lastName`,`class`,`nationality`) VALUES
(1, 'Andrew', 'Jackson', '6A', 'Australian'),
(2, 'Mike', 'Wong', '3A', 'Singaporean'),
(3, 'Cool', 'Guy', '2B', 'Malaysian');