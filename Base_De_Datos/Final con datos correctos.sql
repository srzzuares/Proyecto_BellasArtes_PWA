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
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
  `Descripcion_Blog` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `Imagen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
INSERT INTO `tbb_artistas` VALUES (1,'Artista con una visión única que utiliza colores intensos para expresar emociones en constante cambio.','https://images.ecestaticos.com/4p56t84xWYPuXzT3ZBiUlj54RAs=/70x0:2638x1809/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F317%2Fae0%2F456%2F317ae0456e63bd37ce7fa809d5955672.jpg',1,'2023-12-05 18:16:38',NULL),(2,'Artista que encuentra la tranquilidad en tonos azules suaves, especialmente al representar paisajes marinos.','https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp',1,'2023-12-05 18:16:38',NULL),(3,'Artista que evoca la nostalgia a través de pinceladas sutiles y tonos sepia, creando obras que capturan recuerdos atesorados.','data:image/jpeg;base64,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',1,'2023-12-05 18:16:38',NULL),(4,'Artista abstracto que juega con formas en constante movimiento, dando vida a composiciones abstractas.','https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg',1,'2023-12-05 18:16:38',NULL),(5,'Artista que representa la explosión de la primavera con una paleta de colores vibrantes y flores en plena floración.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cpljbdNye2OZot9TLK3k_rBQisgPqHpmWr6r_dD5J1AzkJtXDfWsCyTosrNVMtVM3iw&usqp=CAU',1,'2023-12-05 18:16:38',NULL),(6,'Artista que captura paisajes urbanos nocturnos, iluminados por la luz de la luna, creando escenas misteriosas.','https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(7,'Artista que pinta atardeceres con colores cálidos, creando una melancolía melódica en la representación del ocaso.','https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(8,'Artista que juega con formas geométricas para lograr composiciones visuales equilibradas y atractivas.','https://img.freepik.com/foto-gratis/guapo-hombre-presentacion-algo_1368-87.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(9,'Artista que utiliza tonos sepia para capturar momentos nostálgicos, creando obras que parecen fotografías antiguas.','https://img.freepik.com/foto-gratis/presentacion-rubia-dama-traje-deportivo-mujer-casa_1157-44950.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(10,'Artista que representa la naturaleza en constante cambio, utilizando colores cambiantes y detalles naturales.','https://img.freepik.com/foto-gratis/feliz-sonriente-guapo-contra-fondo-azul_93675-135164.jpg?w=900&t=st=1701865360~exp=1701865960~hmac=72a53654c8ba2479ebfa1b9d3162fdf81799fc2aa35f86626c7c17d479a88e74',1,'2023-12-05 18:16:38',NULL),(11,'Artista que destaca la diversidad y vitalidad de la vida urbana en retratos que capturan expresiones y rostros únicos.','https://img.freepik.com/foto-gratis/retrato-cuerpo-entero-mujer-complacida-ropa-casual-sentada-suelo-apuntando-dedo-indice-amplia-sonrisa-aislado-sobre-pared-blanca_171337-1204.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(12,'Artista que representa la montaña como una entidad imponente, desafiada por escaladores que desafían las alturas.','https://img.freepik.com/fotos-premium/retrato-hombre-negocios-guapo_151013-10793.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(13,'Artista que juega con sombras en movimiento, creando una danza visual en escenas urbanas al anochecer.','https://img.freepik.com/foto-gratis/imagen-modelo-morena-segura-si-misma-chica-ve-asertiva-lista-cruza-brazos-sobre-pecho-como-cara-presumida-profesional-sonriente-pie-sobre-fondo-blanco_176420-47089.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(14,'Artista que utiliza colores vibrantes para crear una sinfonía visual, fusionando colores de manera armoniosa.','https://img.freepik.com/foto-gratis/retrato-sonriente-feliz-guapo-casuals-aislado-pared-blanca_186202-8115.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(15,'Artista que pinta atardeceres en la playa con una paleta de colores cálidos que iluminan el cielo durante el ocaso.','https://img.freepik.com/foto-gratis/chica-rubia-descarada-muestra-signo-bien-guina-ojo-sonrie-asegurate-que-te-gustara-mejor-eleccion-jamas-hecha_176420-33331.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(16,'Artista abstracto que transmite un sentido de ritmo y movimiento a través de formas y colores vibrantes.','https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(17,'Artista que captura momentos nostálgicos en tonos sepia, evocando la sensación de fotografías antiguas.','https://img.freepik.com/foto-gratis/estilo-vida-belleza-moda-concepto-emociones-personas-gerente-oficina-mujer-asiatica-joven-ceo-expresion-complacida-pie-sobre-fondo-blanco-sonriendo-brazos-cruzados-sobre-pecho_1258-59329.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(18,'Artista que crea una sinfonía visual mediante una explosión de colores, entrelazando tonos de manera armoniosa.','https://img.freepik.com/foto-gratis/vista-frontal-joven-guapo-sombrero-paja-camiseta-amarilla_179666-22064.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(19,'Artista que representa paisajes nocturnos con el reflejo de la luna en aguas tranquilas, creando escenas serenas y misteriosas.','https://img.freepik.com/foto-gratis/chica-guapa-alegre-divertida-que-muestra-promocion-increible-apuntando-esquina-superior-izquierda-sosteniendo-mano-cadera-sonriendo-ampliamente-asombro-curiosidad-pie-fondo-blanco-entusiasta_176420-36843.jpg?size=626&ext=jpg&ga=GA1.1.2020232302.1685102930&semt=sph',1,'2023-12-05 18:16:38',NULL),(20,'Artista que invita a la calma y la contemplación mediante formas abstractas que fluyen suavemente en el lienzo.','https://img.freepik.com/foto-gratis/apuesto-joven-afroamericano-camiseta-polo-rosa_176420-32083.jpg?w=900&t=st=1701865643~exp=1701866243~hmac=d67167e78cc95dd9b579d770b0aaea918736a48e17cb43fcda87af694cfc509d',1,'2023-12-05 18:16:38',NULL);
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
  `Nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `P_Apellido` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `S_Apellido` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Nacimiento` date NOT NULL,
  `Genero` enum('M','F','N/A') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'N/A',
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
  `Nombre_Obra` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Imagen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `Descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `Artista_ID` int unsigned DEFAULT NULL,
  `Fecha_Creacion` date DEFAULT NULL,
  `Tecnica` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
INSERT INTO `tbb_pinturas` VALUES (1,'Caleidoscopio de Emociones','https://i.pinimg.com/550x/f9/57/cd/f957cd64850005545ed5deaacc9168b1.jpg','Una obra que fusiona colores intensos para expresar una gama variada de emociones en constante cambio.',1,'2022-11-06','Oleo',1,564.33,1,'2023-12-05 18:24:10',NULL),(2,'Tranquilidad en Azul','https://http2.mlstatic.com/D_NQ_NP_672414-MLM41154652806_032020-O.webp','Un paisaje marino que transmite serenidad a través de tonos azules suaves y reflejos en el agua.',2,'2022-11-06','Acrílico',1,678.65,1,'2023-12-05 18:27:01',NULL),(3,'Ecos del Pasado','https://img.freepik.com/fotos-premium/pintura-al-oleo-sobre-lienzo-puesta-sol-tarde-arte-pintar-pinturas-al-oleo-pinceles-pintura-interior-hogar_175677-2354.jpg?w=360','Una pintura que evoca la nostalgia a través de pinceladas sutiles y tonos sepia, como recuerdos atesorados.',3,'2022-11-06','Óleo',2,1000.32,1,'2023-12-05 18:27:01',NULL),(4,'Abstracto en Movimiento','https://i.etsystatic.com/17358183/r/il/e377e8/3285900141/il_570xN.3285900141_8qrv.jpg','Una composición abstracta que parece cobrar vida, con formas que dan la sensación de movimiento constante.',4,'2022-11-06','Acrílico',2,234.32,1,'2023-12-05 18:27:01',NULL),(5,'Renacimiento Floral','https://m.media-amazon.com/images/I/71qIt5YNv6L._AC_UF894,1000_QL80_.jpg','La explosión de la primavera capturada en un lienzo, con flores de todos los colores en plena floración.',5,'2022-11-06','Óleo',1,765.56,1,'2023-12-05 18:27:01',NULL),(6,'Silueta Nocturna','https://i.pinimg.com/736x/7b/65/87/7b65875fcc5e4ce350ce4f1771e260fe.jpg','Un paisaje urbano iluminado por la luz de la luna, creando siluetas misteriosas y atmósfera nocturna.',6,'2022-11-06','Acrílico',2,678.65,1,'2023-12-05 18:27:01',NULL),(7,'Melodía del Ocaso','https://2.bp.blogspot.com/-friiFbS8u7I/ULIa7ixFyPI/AAAAAAAADvs/YplDIqSPZcg/s1600/627_439468402773084_1718360207_n.jpg','Colores cálidos que pintan el cielo al atardecer, creando una melancolía melódica en la escena.',7,'2022-11-06','Óleo',1,545.76,1,'2023-12-05 18:27:01',NULL),(8,'Armonía Geométrica','https://i0.wp.com/artefeed.com/wp-content/uploads/2017/10/artefeed.com-Fant%C3%A1sticas-pinturas-al-%C3%B3leo-de-Agnieszka-Wencka.jpg?fit=997%2C802&ssl=1','Una obra que juega con formas geométricas para lograr una composición visualmente equilibrada y atractiva.',8,'2022-11-06','Acrílico',2,675.87,1,'2023-12-05 18:27:01',NULL),(9,'Bajo las Estrellas','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguu1uR7SQNwyX55CgYxunkplGvjpUWurqvBvyi8u4th7bNp-ANKCAaxwBhjCfhLNiHTU&usqp=CAU','Un cielo estrellado que ilumina la noche, creando un ambiente mágico y de contemplación.',9,'2022-11-06','Óleo',1,566.67,1,'2023-12-05 18:27:01',NULL),(10,'Reflejos en el Agua','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-htuvOU-Bv_1agY6xWiDmnD-sfIkmb0NHOX2lEyCd7nrcBHzVAwnYSRP9N9u1HcaoB9w&usqp=CAU','Un paisaje acuático que juega con los reflejos, capturando la luz del sol en la superficie del agua.',10,'2022-11-06','Acrílico',2,865.76,1,'2023-12-05 18:27:01',NULL),(11,'Escalada de Montaña','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxQdz2StPjIbZkCGsueXqPG4NgS3cgUZq5A&usqp=CAU','La representación artística de una montaña imponente, con un escalador desafiando las alturas.',11,'2022-11-06','Óleo',1,567.87,1,'2023-12-05 18:27:01',NULL),(12,'Danza de Sombras','data:image/jpeg;base64,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','Siluetas en movimiento que crean una danza de sombras en una escena urbana al anochecer.',12,'2022-11-06','Acrílico',2,544.55,1,'2023-12-05 18:27:01',NULL),(13,'Transición Estacional','https://migueldemontoro.files.wordpress.com/2011/10/june-roses_early-morning.jpg','Una obra que muestra la transición suave entre las estaciones, con colores cambiantes y detalles naturales.',13,'2022-11-06','Óleo',1,676.87,1,'2023-12-05 18:27:01',NULL),(14,'Expresiones Urbanas II','https://www.artmajeur.com/medias/standard/g/a/gabrielacrisso/artwork/12742661_20191105-022309.jpg?v=1572954181','Un retrato urbano que destaca la diversidad y vitalidad de la vida en la ciudad, con un enfoque en los rostros y expresiones.',14,'2022-11-06','Acrílico',2,976.45,1,'2023-12-05 18:27:01',NULL),(15,'Atardecer en la Playa','https://i.pinimg.com/736x/26/21/84/26218452db352d46cb85e57d087b7d86.jpg','La paleta de colores cálidos que pinta el cielo durante un romántico atardecer en la costa.',15,'2022-11-06','Óleo',1,856.76,1,'2023-12-05 18:27:01',NULL),(16,'Ritmo Abstracto','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqVLMvzyl-KPjMc8ZFkm6EsRBNT3JxQHWVw&usqp=CAU','Una composición abstracta que transmite un sentido de ritmo y movimiento a través de formas y colores vibrantes.',16,'2022-11-06','Acrílico',2,678.97,1,'2023-12-05 18:27:01',NULL),(17,'Recuerdos en Sepia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ97-YzSnDoWMgMyfcpgE8v6fl7YrLEX-uww&usqp=CAU','Una pintura que captura momentos nostálgicos en tonos sepia, como fotografías antiguas que cobran vida.',17,'2022-11-06','Óleo',1,965.45,1,'2023-12-05 18:27:01',NULL),(18,'Sinfonía de Colores II','https://i.pinimg.com/236x/29/4d/2f/294d2fb2e432c550fb086babd0e7b195.jpg','Una explosión de colores que se entrelazan de manera armoniosa, creando una sinfonía visual para el espectador.',18,'2022-11-06','Acrílico',2,457.86,1,'2023-12-05 18:27:01',NULL),(19,'Reflejo de la Luna','https://artquid.twic.pics/art/13/181/898308.186903237.1.o1750727266.jpg?twic=v1/cover=575/background=white','Un paisaje nocturno que destaca el reflejo de la luna en aguas tranquilas, creando una escena serena y misteriosa.',19,'2022-11-06','Óleo',1,757.65,1,'2023-12-05 18:27:01',NULL),(20,'Abstracción en Calma','https://i.pinimg.com/736x/0e/64/c6/0e64c663b225d8a485cf80dfd910f223.jpg','Una obra que invita a la calma y la contemplación, con formas abstractas que fluyen suavemente en el lienzo.',20,'2022-11-06','Acrílico',2,787.55,1,'2023-12-05 18:27:01',NULL);
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
  `Nombre_Usuario` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Correo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Contrasena` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `Nombre_Genero` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `Nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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

-- Dump completed on 2023-12-06  6:58:13
