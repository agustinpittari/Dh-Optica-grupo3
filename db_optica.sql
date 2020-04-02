CREATE DATABASE  IF NOT EXISTS `db_optica` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_optica`;
-- MySQL dump 10.13  Distrib 5.7.29, for Win64 (x86_64)
--
-- Host: localhost    Database: db_optica
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Recetados'),(2,'De contacto'),(3,'De Sol');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Masculino'),(2,'Femenino');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'RayBan');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `precio` decimal(8,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `marca_id` int(11) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `marca_id` (`marca_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Ray ban rb3157','Anteojos',3,1587.00,NULL,1,NULL),(2,'Ray Ban Top Bar Rb3183','Anteojos',2,5599.00,NULL,1,NULL),(3,'Anteojos','Anteojos',1,1598.00,NULL,1,NULL),(4,'Ray Ban Top Bar Rb3183','asd',2,1058.00,NULL,1,NULL),(5,'asdas','asd',3,1234.00,NULL,1,NULL),(19,'Ray Ban Top Bar Rb384','Descripcion basica de anteojos',1,1595.00,NULL,1,NULL),(20,'asdas','Anteojosasdasdsadasdasdasdadsa',1,0.00,NULL,1,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender_id` int(11) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `img_path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id` (`gender_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`gender_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'sebas','silva','sebastian.gaboto@hotmail.com',NULL,'$2b$10$7OjWEj0YuKmQBe4qnRttcu1foMAgHUVBDClNyBPRXxLBiVVbDKpQ.',NULL,NULL),(2,'sebastian','silva','sebastian.gaboto@hotmail.com',NULL,'$2b$10$rhRGuJ0Zk7N.oodrWPKt2ejl7eLwIhTJDzgZCbHfIw5KNUgaQVlVS',NULL,NULL),(3,'sebastian','silva','sebas@hotmail.com',NULL,'$2b$10$YljA7Jf9B.rry8Uwrbm0eu.aSIho/onjiLn6c9arxmQ88LtdpKBai',NULL,NULL),(4,'ale','ale','ale@ale.com',NULL,'$2b$10$OqgBG27F/kVrwrPVksmRP.LldrCvZai3L/e/AEOnyJLlG1FcHPNFe',NULL,NULL),(5,'Agustin','Pittari','agustinpittari4@hotmail.com',NULL,'$2b$10$lpvEJF7UTQYaDLxIw2aHWu6bnH9KIW/goT/UK.F3SNxGBuylskwwq','avatar-1585799231903.jpg','images\\avatar-1585799231903.jpg'),(6,'Agustin','Pittari','agustin@hotmail.com',NULL,'$2b$10$pOP591GBWEIdq59a/LLcP.pTdUkQXzTEC1K9SDnc8Q1j0rk.28M2m',NULL,NULL),(7,'Juan','Perez','juanperez@gmail.com',NULL,'$2b$10$O48w3xBBhzTaPqtxnp5zK.NVwy/eXQo0DFMnR21DSvGSjGRgvAw/.','avatar-1585798589849.jpg',NULL),(8,'Agustin','Pittari','pittariagustin@gmail.com',NULL,'$2b$10$IaKlZymlypqw9NehNX49C.4nQBjtzADvJXCm0CnuhFhBpeYBXIsy2',NULL,NULL),(9,'Jonathan','Pittari','jonathan@gmail.com',NULL,'$2b$10$wx9FTnO0TX2SLOdYfD7.0OuWlFDTVf2Glalg8B/ICq2kp3ImJv4N2',NULL,NULL),(10,'Franco','pittari','franco@gmail.com',NULL,'$2b$10$HZWfN6ME/l1w1QD7jMfpmOqWKbmraVQgryusVm9MfIJ.oJk5Dnilu','avatar-1585798748194.jpg',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-02  1:01:26
