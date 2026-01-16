-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 127.0.1.28    Database: cloth-shop
-- ------------------------------------------------------
-- Server version	8.4.6

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
-- Table structure for table `cart-products`
--

DROP TABLE IF EXISTS `cart-products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart-products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart-products_ibfk_213` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart-products_ibfk_214` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart-products`
--

LOCK TABLES `cart-products` WRITE;
/*!40000 ALTER TABLE `cart-products` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart-products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gloves-infos`
--

DROP TABLE IF EXISTS `gloves-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gloves-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `size` enum('XS','S','M','L','XL') NOT NULL,
  `price` int NOT NULL,
  `water_protection` tinyint(1) NOT NULL,
  `wind_protection` tinyint(1) NOT NULL DEFAULT '1',
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `gloves-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gloves-infos`
--

LOCK TABLES `gloves-infos` WRITE;
/*!40000 ALTER TABLE `gloves-infos` DISABLE KEYS */;
INSERT INTO `gloves-infos` VALUES (0,'XS',299,1,1,0,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(1,'S',399,0,0,1,'2025-11-02 00:00:00','2025-11-02 00:00:00');
/*!40000 ALTER TABLE `gloves-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headwear-infos`
--

DROP TABLE IF EXISTS `headwear-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `headwear-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('BaseballCap','ClassicCap','Hat') NOT NULL,
  `size` enum('XS','S','M','L','XL') NOT NULL,
  `price` int NOT NULL,
  `season` enum('Winter','DemiSeasonal','Summer','Spring','Autumn') NOT NULL,
  `visor` tinyint(1) NOT NULL,
  `ears_closed` tinyint(1) NOT NULL,
  `size_adjuster` tinyint(1) NOT NULL,
  `reflective_elements` tinyint(1) NOT NULL,
  `ventilation_holes` tinyint(1) NOT NULL,
  `sex` enum('Male','Female','Unisex') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `headwear-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headwear-infos`
--

LOCK TABLES `headwear-infos` WRITE;
/*!40000 ALTER TABLE `headwear-infos` DISABLE KEYS */;
INSERT INTO `headwear-infos` VALUES (0,'Hat','M',499,'Winter',1,1,1,1,1,'Unisex',2,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(1,'ClassicCap','L',599,'Summer',0,0,1,0,1,'Unisex',3,'2025-11-02 00:00:00','2025-11-02 00:00:00');
/*!40000 ALTER TABLE `headwear-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `men-shirt-infos`
--

DROP TABLE IF EXISTS `men-shirt-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `men-shirt-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Classic','Everyday','Polo','Linen','Jeans','Other') NOT NULL,
  `size` enum('XS','S','M','l','XL') NOT NULL,
  `price` int NOT NULL,
  `sex` enum('Male','Female') NOT NULL DEFAULT 'Male',
  `fashion` enum('Classic','Oversize') NOT NULL,
  `collar` enum('Shift','Stand','Tangerine','Without') NOT NULL,
  `sleeve` enum('Long','Short','ThreeFourth','Controlled') NOT NULL,
  `fasteners` enum('Button','Snaps','Zippers') NOT NULL,
  `cut` enum('Straight','Assymetric','WithSideSeams') NOT NULL,
  `density` enum('Light','Medium','Dense') NOT NULL,
  `season` enum('Winter','Spring','Summer','Autumn','DemiSeason') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `men-shirt-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `men-shirt-infos`
--

LOCK TABLES `men-shirt-infos` WRITE;
/*!40000 ALTER TABLE `men-shirt-infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `men-shirt-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `men-tshirts-infos`
--

DROP TABLE IF EXISTS `men-tshirts-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `men-tshirts-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Classic','Oversize','Polo','CropTop','LongSleeve','Sport','SleeveLess','TankTop') NOT NULL,
  `sex` enum('Male','Female','Unisex') NOT NULL DEFAULT 'Male',
  `size` enum('XS','S','M','L','XL','XXL','XXXL') NOT NULL,
  `price` int NOT NULL,
  `fashionType` enum('Straight','Fitted','Oversize','Asymmetrical','RelaxedFit') NOT NULL,
  `collar_type` enum('RoundNeck','VNeck','PoloCollar','Hooded','Collar') NOT NULL,
  `sleeveType` enum('Short','Long','Sleeveless','Flashlight','RolledUp','Raglan') NOT NULL,
  `sleeveLength` enum('Normal','Cropped','Long','Tunic') NOT NULL,
  `density` enum('Light','Medium','Dense') NOT NULL,
  `season` enum('Summer','Universal','Winter') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `men-tshirts-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `men-tshirts-infos`
--

LOCK TABLES `men-tshirts-infos` WRITE;
/*!40000 ALTER TABLE `men-tshirts-infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `men-tshirts-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `url` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `photos_ibfk_213` FOREIGN KEY (`product_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `photos_ibfk_214` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (0,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(1,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(2,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(3,'2025-11-02 00:00:00','2025-11-02 00:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products-infos`
--

DROP TABLE IF EXISTS `products-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` enum('GlovesCategory','HeadWearCategory','MenShirtCategory','MenTShirtCategory','BlousesCategory','WomenShirtCategory','WomenTShirtCategory') NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products-infos_ibfk_219` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `products-infos_ibfk_220` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products-infos`
--

LOCK TABLES `products-infos` WRITE;
/*!40000 ALTER TABLE `products-infos` DISABLE KEYS */;
INSERT INTO `products-infos` VALUES (0,'GlovesCategory','Admin Gloves','Gloves from admin',2,0,0,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(1,'GlovesCategory','User Gloves','Gloves from user',3,1,1,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(2,'HeadWearCategory','Admin Headwear','Headwear from admin',4,2,0,'2025-11-02 00:00:00','2025-11-02 00:00:00'),(3,'HeadWearCategory','User HeadWear','Headwear from user',5,3,1,'2025-11-02 00:00:00','2025-11-02 00:00:00');
/*!40000 ALTER TABLE `products-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Admin','Moderator','User','Helper','Manager') NOT NULL DEFAULT 'User',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'Admin First Name','Admin Last Name','adminemail@gmail.com','$2b$12$3te7iVqowTCSWGEFSMPqFOqcQ2CmhBvFTnRQoL/3tVKQilREZ.I2G','Admin','2025-11-02 00:00:00','2025-11-02 00:00:00'),(1,'User First Name','Admin Last Name','useremail@gmail.com','$2b$12$3te7iVqowTCSWGEFSMPqFOYVkVHr.9DpfKDjG77ZAN.xXbgdkSkAu','User','2025-11-02 00:00:00','2025-11-02 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `women-blouses-infos`
--

DROP TABLE IF EXISTS `women-blouses-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `women-blouses-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Classic','Shirt','Romantic','OffShoulder','Bodysuit','Tunic','Assymetrical') NOT NULL,
  `size` enum('XS','S','M','L','XL') NOT NULL,
  `price` int NOT NULL,
  `fashion_type` enum('Fitted','Oversize','Loose','Asymmetrical') NOT NULL,
  `sleeve_type` enum('Short','Long','ThreeFourth','Raglan','Flashlight','Wing','Sleeveless') NOT NULL,
  `collar` enum('TurnDown','StandUp','Frill','Bow','VNeck','Collarless') NOT NULL,
  `fasteners` enum('Buttons','Zippers','Hooks','NoFasteners') NOT NULL,
  `back` enum('Open','Standard','Seamed','Extended','Buttoned') NOT NULL,
  `length` enum('Standard','Cropped','Long','Tunic') NOT NULL,
  `season` enum('Summer','DemiSeasonal','Universal') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `women-blouses-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `women-blouses-infos`
--

LOCK TABLES `women-blouses-infos` WRITE;
/*!40000 ALTER TABLE `women-blouses-infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `women-blouses-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `women-shirts-infos`
--

DROP TABLE IF EXISTS `women-shirts-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `women-shirts-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Classic','Everyday','Polo','Linen','Jeans','Other') NOT NULL,
  `size` enum('XS','S','M','l','XL') NOT NULL,
  `price` int NOT NULL,
  `sex` enum('Male','Female') NOT NULL DEFAULT 'Female',
  `fashion` enum('Classic','Oversize') NOT NULL,
  `collar` enum('Shift','Stand','Tangerine','Without') NOT NULL,
  `sleeve` enum('Long','Short','ThreeFourth','Controlled') NOT NULL,
  `fasteners` enum('Button','Snaps','Zippers') NOT NULL,
  `cut` enum('Straight','Assymetric','WithSideSeams') NOT NULL,
  `density` enum('Light','Medium','Dense') NOT NULL,
  `season` enum('Winter','Spring','Summer','Autumn','DemiSeason') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `women-shirts-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `women-shirts-infos`
--

LOCK TABLES `women-shirts-infos` WRITE;
/*!40000 ALTER TABLE `women-shirts-infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `women-shirts-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `women-tshirts-infos`
--

DROP TABLE IF EXISTS `women-tshirts-infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `women-tshirts-infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('Classic','Oversize','Polo','CropTop','LongSleeve','Sport','SleeveLess','TankTop') NOT NULL,
  `sex` enum('Male','Female','Unisex') NOT NULL DEFAULT 'Female',
  `size` enum('XS','S','M','L','XL','XXL','XXXL') NOT NULL,
  `price` int NOT NULL,
  `fashion_type` enum('Straight','Fitted','Oversize','Asymmetrical','RelaxedFit') NOT NULL,
  `collar_type` enum('RoundNeck','VNeck','PoloCollar','Hooded','Collar') NOT NULL,
  `sleeve_type` enum('Short','Long','Sleeveless','Flashlight','RolledUp','Raglan') NOT NULL,
  `sleeve_length` enum('Normal','Cropped','Long','Tunic') NOT NULL,
  `density` enum('Light','Medium','Dense') NOT NULL,
  `season` enum('Summer','Universal','Winter') NOT NULL,
  `product_info_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `product_info_id` (`product_info_id`),
  CONSTRAINT `women-tshirts-infos_ibfk_1` FOREIGN KEY (`product_info_id`) REFERENCES `products-infos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `women-tshirts-infos`
--

LOCK TABLES `women-tshirts-infos` WRITE;
/*!40000 ALTER TABLE `women-tshirts-infos` DISABLE KEYS */;
/*!40000 ALTER TABLE `women-tshirts-infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'cloth-shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-23 16:40:06
