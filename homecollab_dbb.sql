-- MySQL Script generated by MySQL Workbench
-- Wed May 12 04:36:54 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema homecollab
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema homecollab
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `homecollab` DEFAULT CHARACTER SET utf8 ;
USE `homecollab` ;

-- -----------------------------------------------------
-- Table `homecollab`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NULL,
  `lastname` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(85) NULL,
  `profile_img` MEDIUMBLOB NULL,
  `cover_img` MEDIUMBLOB NULL,
  `password` VARCHAR(85) NULL,
  `recent_connexion` TIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`user_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`user_has_user` (
  `sender_id` INT NOT NULL,
  `receiver_id` INT NOT NULL,
  PRIMARY KEY (`sender_id`, `receiver_id`),
  INDEX `fk_user_has_user_user1_idx` (`receiver_id` ASC),
  INDEX `fk_user_has_user_user_idx` (`sender_id` ASC),
  CONSTRAINT `fk_user_has_user_user`
    FOREIGN KEY (`sender_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_user_user1`
    FOREIGN KEY (`receiver_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NULL,
  `user_has_user_sender_id` INT NOT NULL,
  `user_has_user_receiver_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_has_user_sender_id`, `user_has_user_receiver_id`),
  INDEX `fk_messages_user_has_user1_idx` (`user_has_user_sender_id` ASC, `user_has_user_receiver_id` ASC),
  CONSTRAINT `fk_messages_user_has_user1`
    FOREIGN KEY (`user_has_user_sender_id` , `user_has_user_receiver_id`)
    REFERENCES `homecollab`.`user_has_user` (`sender_id` , `receiver_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `startDate` DATE NOT NULL,
  `endDate` TIME NOT NULL,
  `user_id` INT NOT NULL,
  `finished` TINYINT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_tasks_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_tasks_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`form`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_form_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_form_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`answers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `more_description` VARCHAR(255) NULL,
  `form_id` INT NOT NULL,
  `form_user_id` INT NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`, `form_id`, `form_user_id`),
  INDEX `fk_questions_form1_idx` (`form_id` ASC, `form_user_id` ASC),
  CONSTRAINT `fk_questions_form1`
    FOREIGN KEY (`form_id` , `form_user_id`)
    REFERENCES `homecollab`.`form` (`id` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`channels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`channels` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`videoroom`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`videoroom` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `limit` INT NULL,
  `channels_id` INT NOT NULL,
  PRIMARY KEY (`id`, `channels_id`),
  INDEX `fk_videoroom_channels1_idx` (`channels_id` ASC),
  CONSTRAINT `fk_videoroom_channels1`
    FOREIGN KEY (`channels_id`)
    REFERENCES `homecollab`.`channels` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`videoroom_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`videoroom_has_user` (
  `videoroom_id` INT NOT NULL,
  `videoroom_channels_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`videoroom_id`, `videoroom_channels_id`, `user_id`),
  INDEX `fk_videoroom_has_user_user1_idx` (`user_id` ASC),
  INDEX `fk_videoroom_has_user_videoroom1_idx` (`videoroom_id` ASC, `videoroom_channels_id` ASC),
  CONSTRAINT `fk_videoroom_has_user_videoroom1`
    FOREIGN KEY (`videoroom_id` , `videoroom_channels_id`)
    REFERENCES `homecollab`.`videoroom` (`id` , `channels_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_videoroom_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`videoroomMessages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`videoroomMessages` (
  `id` INT NOT NULL,
  `message` VARCHAR(45) NULL,
  `user_has_user_sender_id` INT NOT NULL,
  `user_has_user_receiver_id` INT NOT NULL,
  `videoroom_id` INT NOT NULL,
  `videoroom_channels_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_has_user_sender_id`, `user_has_user_receiver_id`, `videoroom_id`, `videoroom_channels_id`),
  INDEX `fk_videoroomMessages_user_has_user1_idx` (`user_has_user_sender_id` ASC, `user_has_user_receiver_id` ASC),
  INDEX `fk_videoroomMessages_videoroom1_idx` (`videoroom_id` ASC, `videoroom_channels_id` ASC),
  CONSTRAINT `fk_videoroomMessages_user_has_user1`
    FOREIGN KEY (`user_has_user_sender_id` , `user_has_user_receiver_id`)
    REFERENCES `homecollab`.`user_has_user` (`sender_id` , `receiver_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_videoroomMessages_videoroom1`
    FOREIGN KEY (`videoroom_id` , `videoroom_channels_id`)
    REFERENCES `homecollab`.`videoroom` (`id` , `channels_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`playlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_playlist_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_playlist_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `homecollab`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `homecollab`.`playlist_has_songs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `homecollab`.`playlist_has_songs` (
  `playlist_id` INT NOT NULL,
  `songs_id` INT NOT NULL,
  PRIMARY KEY (`playlist_id`, `songs_id`),
  INDEX `fk_playlist_has_songs_songs1_idx` (`songs_id` ASC),
  INDEX `fk_playlist_has_songs_playlist1_idx` (`playlist_id` ASC),
  CONSTRAINT `fk_playlist_has_songs_playlist1`
    FOREIGN KEY (`playlist_id`)
    REFERENCES `homecollab`.`playlist` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_playlist_has_songs_songs1`
    FOREIGN KEY (`songs_id`)
    REFERENCES `homecollab`.`songs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
