CREATE TABLE `portfolio`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NULL,
  `link` VARCHAR(500) NULL,
  `duration` VARCHAR(45) NULL,
  `presentation` VARCHAR(45) NULL,
  `client_id` INT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `portfolio`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `company` VARCHAR(45) NULL,
  `website` VARCHAR(500) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `portfolio`.`techno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `portfolio`.`project_techno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_techno` INT NULL,
  `id_project` INT NULL,
  PRIMARY KEY (`id`));
