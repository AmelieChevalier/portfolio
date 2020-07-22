CREATE DATABASE `portfolio`;

USE `portoflio`;

CREATE TABLE `project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NULL,
  `link` VARCHAR(500) NULL,
  `duration` VARCHAR(45) NULL,
  `presentation` VARCHAR(45) NULL,
  `client_id` INT NULL,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `techno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `project_techno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_techno` INT NULL,
  `id_project` INT NULL,
  PRIMARY KEY (`id`))
  ENGINE=InnoDB DEFAULT CHARSET=utf8;
  
ALTER TABLE `project` 
CHANGE COLUMN `presentation` `presentation` LONGTEXT NULL DEFAULT NULL ;

ALTER TABLE `project` 
ADD COLUMN `logo` VARCHAR(500) NULL AFTER `client_id`;

ALTER TABLE `project` 
ADD COLUMN `content` VARCHAR(45) NULL AFTER `logo`;

ALTER TABLE `project` 
CHANGE COLUMN `content` `content` VARCHAR(1000) NULL DEFAULT NULL ;

ALTER TABLE `project` 
ADD COLUMN `client_website` VARCHAR(100) NULL AFTER `content`,
ADD COLUMN `client_company` VARCHAR(45) NULL AFTER `client_website`,
CHANGE COLUMN `client_id` `client_name` VARCHAR(45) NULL DEFAULT NULL ;
