-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: ses_schema
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cámaras'),(2,'Vigilancia'),(3,'Acceso'),(4,'Conectividad'),(5,'Intrusión'),(6,'Portería'),(7,'Accesorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` varchar(60) NOT NULL,
  `categoryId` int unsigned DEFAULT NULL,
  `subcategoryId` int unsigned DEFAULT NULL,
  `productName` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `detail` varchar(150) NOT NULL,
  `image` varchar(250) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int NOT NULL,
  `stock` int NOT NULL,
  `status` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_fk0` (`categoryId`),
  KEY `products_fk1_idx` (`subcategoryId`),
  CONSTRAINT `products_fk0` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_fk1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'EEEH-8545',2,5,'Cámara infrarroja aérea','un cambio nuevo','estamos probando el cambio','producto-1619400659402.jpg',4122.00,0,10,1,NULL),(2,'60344-4001',5,1,'Camara Foscam C2','Subacute osteomyelitis, right humerus','Subacute osteomyelitis, right humerus','r2.jpg',7359.00,90,13,0,NULL),(3,'54868-2415',3,1,'Cámara web espía','Postprocedural fever','Postprocedural fever','r3.jpg',4384.00,46,17,0,NULL),(4,'62802-210',3,2,'Cámara de vigilancia HD','Drown due to falling or jumping from burning water-skis','Drowning and submersion due to falling or jumping from burning water-skis','r4.jpg',5423.00,0,12,1,NULL),(5,'52810-217',4,1,'Lector de tarjetas','Furuncle of foot','Furuncle of foot','r5.jpg',7321.00,9,8,0,NULL),(6,'0591-2789',4,1,'Cámara infrarroja terrestre','Displ seg fx shaft of unsp fibula, 7thM','Displaced segmental fracture of shaft of unspecified fibula, subsequent encounter for open fracture type I or II with nonunion','r6.jpg',1357.00,92,10,0,NULL),(7,'54162-010',4,4,'Combo de camaras más deco','Inj flexor musc/fasc/tend and unsp finger at wrs/hnd lv','Other injury of flexor muscle, fascia and tendon of other and unspecified finger at wrist and hand level','r7.jpg',6167.00,62,6,1,NULL),(8,'55154-6295',1,5,'Lector de huellas dactilares','Assault by sword or dagger','Assault by sword or dagger','r8.jpg',3569.00,26,1,0,NULL),(9,'58755-0001',3,4,'Lector de huellas dactilares','Puncture wound w/o foreign body of unsp part of neck, init','Puncture wound without foreign body of unspecified part of neck, initial encounter','r8.jpg',3241.00,61,8,0,NULL),(10,'0904-6084',4,2,'Lector de huellas dactilares','Long term (current) use of insulin','Long term (current) use of insulin','r8.jpg',2392.00,52,8,0,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Visión Nocturna'),(2,'Visión de Calor'),(3,'360°'),(4,'Timbres'),(5,'Routers');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `role` varchar(2) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan.altemir@gmail.com','Juan Martín','Altemir','anakin.jpg','1','admin123'),(2,'ramiroestevez04@hotmail.com','Ramiro','Estevez','kyloren.jpg','1','admin123'),(3,'pepegrillo@gmail.com','Pepe','Grillo','foto-1619389479083.jpg','1','$2a$10$U3iYQw7gSGj43vg9z97vVu0GrAN4uihd0Qz/vm7it70Kr0p9zN4pq'),(4,'jp@correo.com','jose','perez','foto-1619395250405.jpg','1','$2a$10$vCTV4PKNdFzyjQsGfCwULOphsimQPfcL8FCV8qj7BuM2xZ5suaSxu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ses_schema'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-26 16:33:05
