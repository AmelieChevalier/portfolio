-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  `presentation` varchar(300) DEFAULT NULL,
  `client_name` varchar(45) DEFAULT NULL,
  `logo` varchar(500) DEFAULT NULL,
  `content` longtext,
  `client_website` varchar(100) DEFAULT NULL,
  `client_company` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (3,'Healthy Mood','https://imgur.com/Br92rin.png','https://lyon-js-2003-pj3-healthymood-front-office.jsrover.wilders.dev/','10 semaines','Healthy Mood est un site répertoriant des recettes saine. Le projet consistait à créer une application mobile permettant une recherche avancée sur l\'ensemble du site.','Jennifer Baudet','https://imgur.com/QGIakpC.png','Heamthy Mood recense des recettes saines et des articles de blog. Le site existe sous WordPress et son affluence a fortement augmenté pendant le confinement. L\'objectif de ce projet était de refaire le site sous forme d\'application mobile, que l\'utilisateur peut installer sur son téléphone. Il était necessaire de développer un composant de recherche avancée selon certains critères précis.','https://www.healthymood.fr/','JBK Corporation'),(5,'Movie Match','https://imgur.com/GWwKvlJ.png','https://wildmoviematch.netlify.app/','6 semaines','Movie Match est une application mobile proposant des films à regarder à deux utilisateurs, et qui permet de visualiser les match entre les deux utilisateurs en fin de session.','Pierre Genthon','https://imgur.com/Ke7RU1R.png','Movie Match a été designé pour répondre à une problématique bien répandue : aider à se mettre d\'accord à deux sur un film à regarder ensemble. Dans un premier temps, les utilisateurs choisissent une liste de film qui les interesse et l\'application se charge de proposer un à un 20 films de la liste choisie, avec possiblité de valider ou refuser le film. Chaque utilisateur parcours la liste de film à la suite, et les match s\'affichent à la fin de la session.','https://www.wildcodeschool.com/fr-FR','Wild Code School'),(14,'Escalagones','https://imgur.com/o5m2XBe.png','https://github.com/WildCodeSchool/lyon-0320-escalagones','1 semaine','Escalagones est un site web référençant les spots d\'escalade à Lyon et ses alentours.','Wild','https://imgur.com/rW2pZch.png','Escalgones est un site web réalisé en HTML/CSS permettant de réunir toutes les informations à propos de l\'escalade à Lyon : les salles pour grimper, les lieux en extérieur, les événements liés à l\'escalade et sa pratique, mais aussi le matériel indispensable. Vous pouvez aussi proposer un nouvel événement ou trouver un partenaire de grimpe, occasionnel ou régulier !','https://www.wildcodeschool.com/fr-FR','Wild Code School'),(16,'Movie Match test','https://imgur.com/GWwKvlJ.png','https://wildmoviematch.netlify.app/','6 semaines','Movie Match est une application mobile proposant des films à regarder à deux utilisateurs, et qui permet de visualiser les match entre les deux utilisateurs en fin de session.','Pierre Genthon','https://imgur.com/Ke7RU1R.png','Well, to be honest, I\'m kind of grossed out with the sexual nature of how everything unfolded. I didn\'t know how sexual dragons were. I kind of just wanted to do some D&D stuff, y\'know? I\'m your worst nightmare, bitch! Are you kidding? I\'m hoping I can get to both of them, Rick! There is no god, Summer; gotta rip that band-aid off now you\'ll thank me later.I just wanna die! Flip the pickle over. Quote mode. Then let me GET to know you!I am not putting my father in a home! He just came back into my life, and you want to, grab him and, stuff him under a mattress like last month\'s Victoria\'s Secret?! Thanks Noob Noob, this guy gets it. I\'m Scary Terry!! You can run but you can\'t hide, bitch! Morty! The principal and I have discussed it, a-a-and we\'re both insecure enough to agree to a three-way!There\'s pros and cons to every alternate timeline. Fun facts about this one – It\'s got giant, telepathic spiders, 11 9/11s, and the best ice cream in the multiverse! That just sounds like slavery with extra steps. Morty, please. Step back. That vat is full of acid. It will melt you completely, leaving only your bones. Existence is pain to a meeseeks Jerry, and we will do anything to alleviate that pain.Well, to be honest, I\'m kind of grossed out with the sexual nature of how everything unfolded. I didn\'t know how sexual dragons were. I kind of just wanted to do some D&D stuff, y\'know? I\'m your worst nightmare, bitch! Are you kidding? I\'m hoping I can get to both of them, Rick! There is no god, Summer; gotta rip that band-aid off now you\'ll thank me later','https://www.wildcodeschool.com/fr-FR','Wild Code School');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-23 17:24:08
