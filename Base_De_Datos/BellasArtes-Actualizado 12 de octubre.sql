CREATE DATABASE  IF NOT EXISTS `bd_bellasartes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_bellasartes`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_bellasartes
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbb_artistas`
--

DROP TABLE IF EXISTS `tbb_artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_artistas` (
  `Persona_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Descripcion_Blog` text,
  `Imagen` blob,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`Persona_ID`),
  CONSTRAINT `tbb_artistas_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_artistas`
--

LOCK TABLES `tbb_artistas` WRITE;
/*!40000 ALTER TABLE `tbb_artistas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbb_artistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbb_compra`
--

DROP TABLE IF EXISTS `tbb_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_compra` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Usuario_ID` int unsigned DEFAULT NULL,
  `Pintura_ID` int unsigned DEFAULT NULL,
  `Costo_Final` float DEFAULT NULL,
  `Descuento` float DEFAULT NULL,
  `Fecha_Venta` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Pintura_ID` (`Pintura_ID`),
  KEY `Usuario_ID` (`Usuario_ID`),
  CONSTRAINT `tbb_compra_ibfk_1` FOREIGN KEY (`Pintura_ID`) REFERENCES `tbb_pinturas` (`ID`),
  CONSTRAINT `tbb_compra_ibfk_2` FOREIGN KEY (`Usuario_ID`) REFERENCES `tbb_usuarios` (`Persona_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_compra`
--

LOCK TABLES `tbb_compra` WRITE;
/*!40000 ALTER TABLE `tbb_compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbb_compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbb_personas`
--

DROP TABLE IF EXISTS `tbb_personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_personas` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `P_Apellido` varchar(30) NOT NULL,
  `S_Apellido` varchar(30) NOT NULL,
  `Nacimiento` date NOT NULL,
  `Genero` enum('M','F','N/A') DEFAULT 'N/A',
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_personas`
--

LOCK TABLES `tbb_personas` WRITE;
/*!40000 ALTER TABLE `tbb_personas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbb_personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbb_pinturas`
--

DROP TABLE IF EXISTS `tbb_pinturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_pinturas` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_Obra` varchar(50) DEFAULT NULL,
  `Imagen` blob,
  `Descripcion` text,
  `Artista_ID` int unsigned DEFAULT NULL,
  `Fecha_Creacion` date DEFAULT NULL,
  `Tecnica` varchar(20) DEFAULT NULL,
  `Genero_ID` int unsigned DEFAULT NULL,
  `Costo` float DEFAULT NULL,
  `Estatus` tinyint(1) NOT NULL DEFAULT '1',
  `Fecha_Registro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Artista_ID` (`Artista_ID`),
  KEY `Genero_ID` (`Genero_ID`),
  CONSTRAINT `tbb_pinturas_ibfk_1` FOREIGN KEY (`Artista_ID`) REFERENCES `tbb_artistas` (`Persona_ID`),
  CONSTRAINT `tbb_pinturas_ibfk_2` FOREIGN KEY (`Genero_ID`) REFERENCES `tbc_genero` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_pinturas`
--

LOCK TABLES `tbb_pinturas` WRITE;
/*!40000 ALTER TABLE `tbb_pinturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbb_pinturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbb_usuarios`
--

DROP TABLE IF EXISTS `tbb_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_usuarios` (
  `Persona_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_Usuario` varchar(30) DEFAULT NULL,
  `Correo` varchar(100) DEFAULT NULL,
  `Contrasena` varchar(100) DEFAULT NULL,
  `Rol_ID` int unsigned DEFAULT '1',
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`Persona_ID`),
  KEY `Rol_ID` (`Rol_ID`),
  CONSTRAINT `tbb_usuarios_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas` (`ID`),
  CONSTRAINT `tbb_usuarios_ibfk_2` FOREIGN KEY (`Rol_ID`) REFERENCES `tbc_roles` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_usuarios`
--

LOCK TABLES `tbb_usuarios` WRITE;
/*!40000 ALTER TABLE `tbb_usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbb_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbc_genero`
--

DROP TABLE IF EXISTS `tbc_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbc_genero` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre_Genero` varchar(30) DEFAULT NULL,
  `Genero_Padre` int unsigned DEFAULT NULL,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Genero_Padre` (`Genero_Padre`),
  CONSTRAINT `tbc_genero_ibfk_1` FOREIGN KEY (`Genero_Padre`) REFERENCES `tbc_genero` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbc_genero`
--

LOCK TABLES `tbc_genero` WRITE;
/*!40000 ALTER TABLE `tbc_genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbc_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbc_roles`
--

DROP TABLE IF EXISTS `tbc_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbc_roles` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) DEFAULT NULL,
  `Descripcion` text,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbc_roles`
--

LOCK TABLES `tbc_roles` WRITE;
/*!40000 ALTER TABLE `tbc_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbc_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-12 10:05:17
