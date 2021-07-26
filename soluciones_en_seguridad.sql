-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: soluciones_en_seguridad
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.18-MariaDB

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cámaras',NULL,NULL,NULL),(2,'Vigilancia',NULL,NULL,NULL),(3,'Acceso',NULL,NULL,NULL),(4,'Conectividad',NULL,NULL,NULL),(5,'Intrusión',NULL,NULL,NULL),(6,'Portería',NULL,NULL,NULL),(7,'Accesorios',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `paymentId` int(11) NOT NULL,
  `shippingId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_fk0` (`userId`),
  KEY `orders_fk1` (`paymentId`),
  KEY `orders_fk2` (`shippingId`),
  CONSTRAINT `orders_fk0` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_fk1` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`),
  CONSTRAINT `orders_fk2` FOREIGN KEY (`shippingId`) REFERENCES `shipping_orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `payMethod` int(11) NOT NULL,
  `payInfo` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payments_fk1` (`userId`),
  KEY `payments_fk2` (`orderId`),
  CONSTRAINT `payments_fk0` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `payments_fk1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `payments_fk2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(60) NOT NULL,
  `categoryId` int(10) unsigned DEFAULT NULL,
  `subcategoryId` int(10) unsigned DEFAULT NULL,
  `productName` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `detail` varchar(150) NOT NULL,
  `image` varchar(250) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_fk0` (`categoryId`),
  KEY `products_fk1_idx` (`subcategoryId`),
  CONSTRAINT `products_fk0` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_fk1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'60344-4001',1,1,'Cámara Foscam C2','Cámara tipo domo para ambientes externos','Cámara IP de exterior con calidad 1920x1080 (Full HD)\r\nProtección antivandálica. Visión 130°. Ranura para tarjeta microSD.\r\nCompatible Android/iOS','1camfoscam.png',8500.00,10,15,15,'2021-05-22 22:58:29','2021-05-25 10:22:20',NULL),(3,'54868-2415',1,1,'Cámara web C450','Cámara Pro Streaming con Trípode','Cámara Pro para Streaming. Calidad Full HD 1080 a 30 fps o superrápido HD 720p a 60fps.\r\nCampo visual de 78°.','2webcamfoscam.png',2200.00,5,18,1,'2021-05-21 22:58:29','2021-05-25 10:24:53',NULL),(4,'62802-210',1,1,'Cámara de vigilancia HD F199','Cámara de vigilancia para exterior','Cámara de vigilancia para exterior con autonomía de grabación y conexión inalámbrica WiFi. Calidad de video de 2 megapíxeles.','3camvigil.png',5500.00,10,12,12,'2021-05-20 22:58:29','2021-05-25 10:27:30',NULL),(5,'52810-217',2,5,'DVR/NVR COOPER 4+1 CH 720P 1080N AUDIO BNC DAHUA','Grabador DVR/NVR COOPER','Compresión de video H.264 Admite entradas de video HDCVI / AHD / TVI / CVBS / IP Máx. 5/10 canales de entradas de cámara IP, cada canal hasta 2MP / 5M','2vig.png',7321.00,4,8,1,'2021-05-19 22:58:29',NULL,NULL),(6,'0591-2789',1,1,'Cámaras de seguridad – Versint V5640PTZ','Cámara en plataforma PTZ','Cámara modelo v5640PTZ de fácil instalación en cualquier entorno o condición de montaje. Monitoreo de estado automatizado, visualización remota de vid','5cam.png',4000.00,10,10,0,'2021-05-18 22:58:29',NULL,NULL),(7,'54162-010',1,1,'Cámara con reconocimiento de patentes vehiculares LPR','Cámara de reconocimiento de matrículas vehículares de ZKTeco','Basado en años de experiencia en la industria, en plataformas de hardware de cámaras LPR y software de gestión de estacionamient, puede identificar co','6cam.png',15000.00,5,6,1,'2021-05-17 22:58:29',NULL,NULL),(8,'55154-6295',3,4,'Lector de tarjetas','Lector de tarjetas digital','Lector de tarjetas automatizado, ideal para ambientes laborales.','1acc.png',3569.00,10,8,0,'2021-05-16 22:58:29',NULL,NULL),(9,'58755-0001',3,4,'Lector de huellas dactilares','Lector de huellas dactilares ','Lector de huellas dactilares, ideal para restringir el acceso a sectores vulnerables.','2acc.png',3800.00,5,8,0,'2021-05-15 22:58:29',NULL,NULL),(10,'0904-6084',3,4,'Lector de tarjetas de proximidad AC5000','Terminal de tarjeta de proximidad ','Terminal de tarjeta de proximidad. Pantalla táctil de 10 cm. Cámara fija VGA con flash.','3acc.png',8000.00,5,8,0,'2021-05-14 22:58:29',NULL,NULL),(11,'57968-4873',1,2,'Cámara infrarroja terrestre','Cámara tipo Domo IP WiFi','Cámara tipo domo Móvil IP WiFi con calidad de resolución 1080p. Para ambientes internos, con visión nocturna y ángulo de visión de 72°','4cam.png',6000.00,10,12,1,NULL,NULL,NULL),(12,'0904-6085',3,4,'Terminal Biométrico Virdi AC7000','Terminal Biométrico de doble cámara','Lector robusto y elegante ideal para uso nm sistema de autenticación por rostro, huellas digitales, RFID y/o contraseña. De interfaz simple y amigable','4acc.png',10000.00,10,12,1,NULL,NULL,NULL),(13,'0904-6087',3,4,'Cerradura Para Hotel 8118 RF ','Cerradura Electrónica Para Hotel. Tarjeta Inteligente RF','Cerradura Electrónica Para Hotel. Tarjeta Inteligente RFID + llave de metal en caso de emergencia. Con alarma de puerta entreabierta. ','5acc.png',14600.00,5,10,1,NULL,NULL,NULL),(14,'58755-0002',3,4,'Tarjeta de proximidad para reloj de personal','Tarjeta de proximidad para relojes de control de personal.','Tarjeta de frecuencia 125 khz, 26 bits, 0,8 mm de espesor. Con tecnología de tipo EM Marine.','6acc.png',1500.00,5,25,1,NULL,NULL,NULL),(15,'58755-0003',3,4,'Lector QR y Tarjeta','Lector de control de acceso','Terminal independiente pionero de ZKTeco con lector de códigos QR, RFID, huella y palma. Cuenta con pantalla táctil.','7acc.png',7000.00,5,8,1,NULL,NULL,NULL),(16,'0591-2780',3,4,'Control de acceso facial WiFi con detección térmica','Algoritmo de medición de temperatura corporal','Control de acceso facial con medición térmica. Capacidad ultra grande de plantillas faciales y de palma. Cámara con sensor CMOS starlight de 2MP con f','8acc.png',18000.00,10,10,1,NULL,NULL,NULL),(17,'0591-2781',3,4,'Control de asistencia con reconocimiento facial','Reconocimiento facial visible','Con algoritmo anti-falsificación, pantalla táctil de 2.8\". Admite instalación de escritorio y pared. Fuente 12V 2','9acc.png',11000.00,5,10,1,NULL,NULL,NULL),(18,'0591-2782',3,4,'Barrera de paso motorizada para personas ','Barrera de paso motorizada de acero inoxidable','Barrera de diseño compacto y fácil de integrar en espacios reducidos. Puede integrar sistemas de reconocimiento de huella digital, rostro y tarjeta.','10acc.png',190000.00,10,5,1,NULL,NULL,NULL),(19,'0591-2783',3,4,'Molinete bidireccional con palos colapsables + pictogramas ','Molinete bidireccional de sistema amortiguado','Diseño estético y ergonométrico, sentido de paso configurable. Bajo mantenimiento, con sistema antivandálico. ','11acc.png',300000.00,5,4,1,NULL,NULL,NULL),(20,'0591-2784',4,5,'Switch 9 Puertos ','Switch de 9 bocas, Grado comercial.','El ComNet ™ CWGE9MS Managed Ethernet Switch ofrece transmisión de (7) 10/100/1000 BASE-TX y (2) puertos combo 1000FX. Diseño plug-and-Play asegura una','1conec.png',9000.00,5,10,1,NULL,NULL,NULL),(21,'0591-2785',4,5,'Switch PoE (250M) Hikvision ','Switch PoE de16 Puertos + 2 admin','Puertos: 16 x 10/100 (PoE+) + 2 x Gigabit SFP (subida). Características: auto-uplink (auto MDI/MDI-X), full duplex mode, store and forward','2conec.png',15000.00,5,12,1,NULL,NULL,NULL),(22,'0591-2786',4,5,'Antena Litebeam 5GHZ, 23DBI Airmax Ubiquity','Antena direccional de alta ganancia.','Diseño industrial de vanguardia. Con libertad de alineación de tres ejes. El LiteBeamM proporciona 23 dBi de ganancia para conectividad a larga distan','3conec.png',12450.00,5,10,1,NULL,NULL,NULL),(23,'0591-2787',4,5,'Unifi Access Point Ac Long Range Ubiquiti','Antena con enlace simétrico de largo alcance','Antena de innovador diseño, el cual le proporciona un gran alcance. Potente motor de software inalámbrico para empresas de alta densidad que requieren','4conec.png',13000.00,5,10,1,NULL,NULL,NULL),(24,'58755-0004',4,5,'Antena OMNI 2.4GHz 13 dBi','Antena de tipo PARAROCKET 2.4GHz UBIQUITI','Antena de alcance intermedio, ideal para oficinas y espacios semiabiertos.','5conec.png',7000.00,5,10,1,NULL,NULL,NULL),(25,'58755-0005',5,4,'Pulsador de Panico/Emergencia Inalambrico','Pulsador utilizado como antipánico.','Pulsador antipánico. Frecuencia de operacion : 315MHZ/433MHZ.','1intru.png',300.00,10,30,1,NULL,NULL,NULL),(26,'58755-0006',5,4,'Kit Alarma HIKVISION WiFi 3G Y 4G','Kit alarma marca HIKVISION','Incluye: 1 Hub / 1 Sensor PIR / 1 Contacto Magnético / 1 Control Remoto/ WiFi, Panel de control de seguridad inalámbrico de la serie AX, que contiene ','2intru.png',20000.00,10,10,1,NULL,NULL,NULL),(27,'58755-0007',5,4,'Sirena Inalámbrica Exterior HIKVISION','Sirena inalámbrica exterior.','Sirena ideal para uso exterior por su diseño y resistencia a las contingencias climáticas. Conexión por WiFi.','3conec.png',2500.00,5,10,1,NULL,NULL,NULL),(28,'58755-0008',5,4,'Arco detector de metales ','Arco detector de metales de 6 zonas.','Posee zonas de detección interconectadas en diferentes áreas y alarma simultánea de múltiples zonas.','4intru.png',150000.00,5,5,1,NULL,NULL,NULL),(29,'58755-0009',5,4,'Barrera Infrarroja 100 Metros','Barrera infrarroja apta intemperie.','Montaje de superficie, aunque puede montarse en postes o caños. Hasta 100 metros de cobertura, apto intemperie. Protección total de perímetros.','5intru.png',35000.00,10,5,1,NULL,NULL,NULL),(30,'58755-0010',5,4,'Barrera Vehicular Modelo 1.5','Barrera Vehicular con brazo de hasta 3 m.','Largo de brazo de: 1 a 12 metros. Servicio: 3.000 ciclos/día. Mantenimiento: solo revisión c/500.000 ciclos. Brazo circular de aluminio extruído (dure','6intru.png',290000.00,10,5,1,NULL,NULL,NULL),(31,'58755-0011',5,4,'Detector de humo ','Detector de humor marca HIKVISION','Detector de humo de alerta inmediata. Apto conexión WiFi para dar aviso a servicios.','7intru.png',3500.00,5,10,1,NULL,NULL,NULL),(32,'58755-0012',6,1,'Kit Cámara Térmica TPC-BF5421-T+ JQ-D70Z DAHUA','Cámara híbrida con medición de temperatura ','Cámara híbrida con medición de temperatura que proporciona simultáneamenteuna imagen normal y una imagen térmica de la escena tomada. Un algoritmo de ','1port.png',75000.00,5,10,1,NULL,NULL,NULL),(33,'58755-0013',6,1,'Videoportero Cableado con monitor','Videoportero Cableado Apto Exterior Con Monitor Color','Portero eléctrico con frente de aleación de aluminio. Cámara con visión nocturna. Resistente al agua. Pantalla de 7\" TFT LCD.','2port.png',18500.00,5,10,1,NULL,NULL,NULL),(34,'58755-0014',6,1,'Portero unidad exterior Antivandálico DAHUA','Portero con cámara HD e indicación de voz','Portero con cámara HD, visión nocturna, mensajería de video y audio. Panel de aleación de zinc, IP65, IK10. ','3port.png',6500.00,5,10,1,NULL,NULL,NULL),(35,'57968-4874',6,1,'Kit Video Portero IP + Monitor 7 Pulgadas','Kit Video Portero marca HIKVISION','Kit de videoportero IP para barrio privado o casa, solo un botón de llamada. Pantalla de 7 pulgadas de tipo TFT, de resolución 1024x600','4port.png',8000.00,5,10,1,NULL,NULL,NULL),(36,'57968-4875',6,4,'Pistola Termómetro Laser Infrarrojo ','Pistola Termómetro Laser Infrarrojo Para Humanos ','Tensiómetro láser infrarrojo, termómetro para humanos. Distancia de medición: 5-15 cm .','5port.png',2000.00,10,10,1,NULL,NULL,NULL),(37,'57968-4876',7,5,'Fuente Switching 12V. 1A','Fuente Switching 12V. 1A de carcasa Ignífuga.','Certificada internacionalmente bajo normas IEC-60065 y IEC-60950. Certificación avalada por grandes certificadoras como TUV y Bureau Veritas.','1ceso.png',350.00,5,10,1,NULL,NULL,NULL),(38,'57968-4877',7,5,'Fuente Switching 12V. 5A','Fuente Switching de Salida de carcasa ignífuga.','Certificada internacionalmente bajo normas IEC-60065 y IEC-60950. Certificación avalada por grandes certificadoras como TUV y Bureau Veritas. Fusible ','2ceso.png',450.00,5,10,1,NULL,NULL,NULL),(39,'57968-4878',7,5,'Fuente Switching 12V. 10A','Fuente Switching de Salida de carcasa ignífuga.','Tensión de salida: 12Vcc. Corriente Máxima de salida: 10A. Consumo: 1.5A. Dimensiones: 199x98x39   ','3ceso.png',700.00,10,10,1,NULL,NULL,NULL),(40,'57968-4879',7,5,'Disco Rigido 1TB Seagate Skyhawk','Disco duro de 3.5 pulgadas.','Disco Capacidad 1000 GB. Tamaño de disco duro 3.5pulg.Interfaz Serial ATA III.','4ceso.png',8000.00,5,10,1,NULL,NULL,NULL),(41,'',NULL,NULL,'','','','',0.00,0,0,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_adress`
--

DROP TABLE IF EXISTS `shipping_adress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipping_adress` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `municipio` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `unidad` varchar(45) DEFAULT NULL,
  `codigoPostal` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shipping_fk0` (`userId`),
  CONSTRAINT `shipping_fk0` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_adress`
--

LOCK TABLES `shipping_adress` WRITE;
/*!40000 ALTER TABLE `shipping_adress` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_adress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_orders`
--

DROP TABLE IF EXISTS `shipping_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipping_orders` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `shippingAdressId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `shippingMethod` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shipping_orders_fk0` (`userId`),
  KEY `shoppincartitems_fk2` (`orderId`),
  KEY `shopping_orders_fk1` (`shippingAdressId`),
  CONSTRAINT `shipping_orders_fk0` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `shoppincartitems_fk0` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `shoppincartitems_fk2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `shopping_orders_fk1` FOREIGN KEY (`shippingAdressId`) REFERENCES `shipping_adress` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_orders`
--

LOCK TABLES `shipping_orders` WRITE;
/*!40000 ALTER TABLE `shipping_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcartitems`
--

DROP TABLE IF EXISTS `shoppingcartitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shoppingcartitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `salePrice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shoppingcartitems_fk0` (`productId`),
  KEY `shoppingcartitems_fk1` (`userId`),
  KEY `shoppincartitems_fk3` (`orderId`),
  CONSTRAINT `shoppincartitems_fk3` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  CONSTRAINT `shoppingcartitems_fk0` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `shoppingcartitems_fk1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcartitems`
--

LOCK TABLES `shoppingcartitems` WRITE;
/*!40000 ALTER TABLE `shoppingcartitems` DISABLE KEYS */;
INSERT INTO `shoppingcartitems` VALUES (1,NULL,6,3,2090,10,20900,1,'2021-05-29 01:56:43','2021-05-29 01:56:43',NULL),(2,NULL,6,3,2090,10,20900,1,'2021-05-29 02:11:53','2021-05-29 02:11:53',NULL),(3,NULL,6,4,4950,10,49500,1,'2021-05-29 02:11:58','2021-05-29 02:11:58',NULL),(4,NULL,6,5,7028,10,70282,1,'2021-05-29 02:12:02','2021-05-29 02:12:02',NULL),(5,NULL,6,3,2090,1,2090,1,'2021-05-30 02:24:43','2021-05-30 02:24:43',NULL);
/*!40000 ALTER TABLE `shoppingcartitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Visión Nocturna',NULL,NULL,NULL),(2,'Visión de Calor',NULL,NULL,NULL),(3,'360°',NULL,NULL,NULL),(4,'Timbres',NULL,NULL,NULL),(5,'Routers',NULL,NULL,NULL);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `companyName` varchar(100) DEFAULT NULL,
  `cuit` varchar(13) DEFAULT NULL,
  `avatar` varchar(150) NOT NULL,
  `role` varchar(2) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan.altemir@gmail.com','Juan Martín','Altemir',NULL,NULL,'anakin.jpg','3','admin123'),(2,'ramiroestevez04@hotmail.com','Ramiro','Estevez',NULL,NULL,'kyloren.jpg','1','admin123'),(3,'pepegrillo@gmail.com','Pepe','Grillo',NULL,NULL,'foto-1619389479083.jpg','1','$2a$10$U3iYQw7gSGj43vg9z97vVu0GrAN4uihd0Qz/vm7it70Kr0p9zN4pq'),(4,'jp@correo.com','jose','perez',NULL,NULL,'foto-1619395250405.jpg','1','$2a$10$vCTV4PKNdFzyjQsGfCwULOphsimQPfcL8FCV8qj7BuM2xZ5suaSxu'),(6,'ramiroestevez96@gmail.com','Ramiro','Estevez',NULL,NULL,'foto-1620149319514.png','7','$2a$10$Uncwz8YbOyBH2nnSwiBp/..pu/ylfCCeucOfMBlpaY3rWmMHO3gz.'),(7,'julioperez@email.com','Julio','Perez',NULL,NULL,'foto-1621267304919.jpg','1','$2a$10$fV4YSJiIy1WgSb28ge.BfeeWg1ds9PPL4p2gkfIOZb0ykuBEBSXPO'),(8,'pepe.dias@mail.com','Pepe','Dias',NULL,NULL,'foto-1621640659428.jpg','1','$2a$10$IK1cHP.DpJzCAUS0e7O/1.cz5KYNCV4pc3MgRvGs1EqIGKv/1m2n.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-30 21:09:57
