CREATE DATABASE  IF NOT EXISTS `bd_bellasartes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_bellasartes`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_bellasartes
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('f9197b24-5001-4cb0-894f-1daf39b8d2b3','e4dc3c00055542ae8d273003d54c4098c9976796a924f62fedacb3f7f2f01196','2023-12-05 23:57:35.702','20231205235039_',NULL,NULL,'2023-12-05 23:57:35.234',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbb_artistas`
--

DROP TABLE IF EXISTS `tbb_artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbb_artistas` (
  `Persona_ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Descripcion_Blog` text COLLATE utf8mb4_unicode_ci,
  `Imagen` text COLLATE utf8mb4_unicode_ci,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`Persona_ID`),
  CONSTRAINT `tbb_artistas_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_artistas`
--

LOCK TABLES `tbb_artistas` WRITE;
/*!40000 ALTER TABLE `tbb_artistas` DISABLE KEYS */;
INSERT INTO `tbb_artistas` VALUES (1,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(2,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(3,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(4,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(5,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(6,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(7,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(8,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(9,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(10,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(11,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(12,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(13,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(14,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(15,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(16,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(17,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(18,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(19,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL),(20,'Hola soy Artista','url',1,'2023-12-05 18:16:38',NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `Nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `P_Apellido` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `S_Apellido` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nacimiento` date NOT NULL,
  `Genero` enum('M','F','N/A') COLLATE utf8mb4_unicode_ci DEFAULT 'N/A',
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_personas`
--

LOCK TABLES `tbb_personas` WRITE;
/*!40000 ALTER TABLE `tbb_personas` DISABLE KEYS */;
INSERT INTO `tbb_personas` VALUES (1,'Ana','García','López','1980-12-05','F',1,'2023-12-05 18:13:25',NULL),(2,'Juan','Martínez','Pérez','1995-08-18','M',1,'2023-12-05 18:13:25',NULL),(3,'María','Rodríguez','Fernández','1989-03-22','F',1,'2023-12-05 18:13:25',NULL),(4,'Carlos','López','Gómez','1978-06-14','M',1,'2023-12-05 18:13:25',NULL),(5,'Laura','Gutiérrez','Hernández','1992-09-30','F',1,'2023-12-05 18:13:25',NULL),(6,'Roberto','Díaz','Ramírez','1985-11-12','M',1,'2023-12-05 18:13:25',NULL),(7,'Sofía','Hernández','Sánchez','1990-04-08','F',1,'2023-12-05 18:13:25',NULL),(8,'Miguel','Torres','Jiménez','1975-07-03','M',1,'2023-12-05 18:13:25',NULL),(9,'Isabel','Romero','Molina','1983-01-17','F',1,'2023-12-05 18:13:25',NULL),(10,'David','Cruz','Ortega','1998-05-25','M',1,'2023-12-05 18:13:25',NULL),(11,'Paula','Serrano','Rojas','1987-12-20','F',1,'2023-12-05 18:13:25',NULL),(12,'Javier','Ortiz','Cabrera','1973-09-11','M',1,'2023-12-05 18:13:25',NULL),(13,'Elena','Flores','Navarro','1994-06-02','F',1,'2023-12-05 18:13:25',NULL),(14,'Francisco','Gómez','Vega','1982-10-16','M',1,'2023-12-05 18:13:25',NULL),(15,'Beatriz','Pérez','Ruiz','1997-08-09','F',1,'2023-12-05 18:13:25',NULL),(16,'Alejandro','Molina','Dominguez','1979-03-27','M',1,'2023-12-05 18:13:25',NULL),(17,'Natalia','González','Castro','1991-01-14','F',1,'2023-12-05 18:13:25',NULL),(18,'Raúl','Vargas','Ramos','1986-05-07','M',1,'2023-12-05 18:13:25',NULL),(19,'Carmen','Jiménez','Moreno','1996-06-23','F',1,'2023-12-05 18:13:25',NULL),(20,'Diego','Sánchez','López','1984-04-19','M',1,'2023-12-05 18:13:25',NULL);
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
  `Nombre_Obra` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Imagen` text COLLATE utf8mb4_unicode_ci,
  `Descripcion` text COLLATE utf8mb4_unicode_ci,
  `Artista_ID` int unsigned DEFAULT NULL,
  `Fecha_Creacion` date DEFAULT NULL,
  `Tecnica` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbb_pinturas`
--

LOCK TABLES `tbb_pinturas` WRITE;
/*!40000 ALTER TABLE `tbb_pinturas` DISABLE KEYS */;
INSERT INTO `tbb_pinturas` VALUES (1,'Caleidoscopio de Emociones','url','Una obra que fusiona colores intensos para expresar una gama variada de emociones en constante cambio.',1,NULL,'Oleo',1,NULL,1,'2023-12-05 18:24:10',NULL),(2,'Tranquilidad en Azul','url','Un paisaje marino que transmite serenidad a través de tonos azules suaves y reflejos en el agua.',2,NULL,'Acrílico',1,NULL,1,'2023-12-05 18:27:01',NULL),(3,'Ecos del Pasado','url','Una pintura que evoca la nostalgia a través de pinceladas sutiles y tonos sepia, como recuerdos atesorados.',3,NULL,'Óleo',2,NULL,1,'2023-12-05 18:27:01',NULL),(4,'Abstracto en Movimiento','url','Una composición abstracta que parece cobrar vida, con formas que dan la sensación de movimiento constante.',4,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(5,'Renacimiento Floral','url','La explosión de la primavera capturada en un lienzo, con flores de todos los colores en plena floración.',5,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(6,'Silueta Nocturna','url','Un paisaje urbano iluminado por la luz de la luna, creando siluetas misteriosas y atmósfera nocturna.',6,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(7,'Melodía del Ocaso','url','Colores cálidos que pintan el cielo al atardecer, creando una melancolía melódica en la escena.',7,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(8,'Armonía Geométrica','url','Una obra que juega con formas geométricas para lograr una composición visualmente equilibrada y atractiva.',8,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(9,'Bajo las Estrellas','url','Un cielo estrellado que ilumina la noche, creando un ambiente mágico y de contemplación.',9,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(10,'Reflejos en el Agua','url','Un paisaje acuático que juega con los reflejos, capturando la luz del sol en la superficie del agua.',10,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(11,'Escalada de Montaña','url','La representación artística de una montaña imponente, con un escalador desafiando las alturas.',11,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(12,'Danza de Sombras','url','Siluetas en movimiento que crean una danza de sombras en una escena urbana al anochecer.',12,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(13,'Transición Estacional','url','Una obra que muestra la transición suave entre las estaciones, con colores cambiantes y detalles naturales.',13,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(14,'Expresiones Urbanas II','url','Un retrato urbano que destaca la diversidad y vitalidad de la vida en la ciudad, con un enfoque en los rostros y expresiones.',14,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(15,'Atardecer en la Playa','url','La paleta de colores cálidos que pinta el cielo durante un romántico atardecer en la costa.',15,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(16,'Ritmo Abstracto','url','Una composición abstracta que transmite un sentido de ritmo y movimiento a través de formas y colores vibrantes.',16,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(17,'Recuerdos en Sepia','url','Una pintura que captura momentos nostálgicos en tonos sepia, como fotografías antiguas que cobran vida.',17,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(18,'Sinfonía de Colores II','url','Una explosión de colores que se entrelazan de manera armoniosa, creando una sinfonía visual para el espectador.',18,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL),(19,'Reflejo de la Luna','url','Un paisaje nocturno que destaca el reflejo de la luna en aguas tranquilas, creando una escena serena y misteriosa.',19,NULL,'Óleo',1,NULL,1,'2023-12-05 18:27:01',NULL),(20,'Abstracción en Calma','url','Una obra que invita a la calma y la contemplación, con formas abstractas que fluyen suavemente en el lienzo.',20,NULL,'Acrílico',2,NULL,1,'2023-12-05 18:27:01',NULL);
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
  `Nombre_Usuario` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Correo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Contrasena` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Rol_ID` int unsigned DEFAULT '1',
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`Persona_ID`),
  KEY `Rol_ID` (`Rol_ID`),
  CONSTRAINT `tbb_usuarios_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas` (`ID`),
  CONSTRAINT `tbb_usuarios_ibfk_2` FOREIGN KEY (`Rol_ID`) REFERENCES `tbc_roles` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `Nombre_Genero` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Genero_Padre` int unsigned DEFAULT NULL,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Genero_Padre` (`Genero_Padre`),
  CONSTRAINT `tbc_genero_ibfk_1` FOREIGN KEY (`Genero_Padre`) REFERENCES `tbc_genero` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbc_genero`
--

LOCK TABLES `tbc_genero` WRITE;
/*!40000 ALTER TABLE `tbc_genero` DISABLE KEYS */;
INSERT INTO `tbc_genero` VALUES (1,'Realista',NULL,1,'2023-12-05 18:18:02',NULL),(2,'Cubista',NULL,1,'2023-12-05 18:26:50',NULL);
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
  `Nombre` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Descripcion` text COLLATE utf8mb4_unicode_ci,
  `Estatus` tinyint(1) DEFAULT '1',
  `Fecha_Registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `Fecha_Actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbc_roles`
--

LOCK TABLES `tbc_roles` WRITE;
/*!40000 ALTER TABLE `tbc_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbc_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bd_bellasartes'
--

--
-- Dumping routines for database 'bd_bellasartes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05 18:29:10
