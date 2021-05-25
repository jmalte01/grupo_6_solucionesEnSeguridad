-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2021 a las 01:33:02
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ses_schema`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Cámaras'),
(2, 'Vigilancia'),
(3, 'Acceso'),
(4, 'Conectividad'),
(5, 'Intrusión'),
(6, 'Portería'),
(7, 'Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `sku` varchar(60) NOT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `subcategoryId` int(10) UNSIGNED DEFAULT NULL,
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
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `sku`, `categoryId`, `subcategoryId`, `productName`, `description`, `detail`, `image`, `price`, `discount`, `stock`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, '60344-4001', 1, 1, 'Cámara Foscam C2', 'Cámara tipo domo para ambientes externos', 'Cámara IP de exterior con calidad 1920x1080 (Full HD)\r\nProtección antivandálica. Visión 130°. Ranura para tarjeta microSD.\r\nCompatible Android/iOS', '1camfoscam.png', '8500.00', 10, 15, 15, '2021-05-22 22:58:29', '2021-05-25 10:22:20', NULL),
(3, '54868-2415', 1, 1, 'Cámara web C450', 'Cámara Pro Streaming con Trípode', 'Cámara Pro para Streaming. Calidad Full HD 1080 a 30 fps o superrápido HD 720p a 60fps.\r\nCampo visual de 78°.', '2webcamfoscam.png', '2200.00', 5, 18, 1, '2021-05-21 22:58:29', '2021-05-25 10:24:53', NULL),
(4, '62802-210', 1, 1, 'Cámara de vigilancia HD F199', 'Cámara de vigilancia para exterior', 'Cámara de vigilancia para exterior con autonomía de grabación y conexión inalámbrica WiFi. Calidad de video de 2 megapíxeles.', '3camvigil.png', '5500.00', 10, 12, 12, '2021-05-20 22:58:29', '2021-05-25 10:27:30', NULL),
(5, '52810-217', 2, 5, 'DVR/NVR COOPER 4+1 CH 720P 1080N AUDIO BNC DAHUA', 'Grabador DVR/NVR COOPER', 'Compresión de video H.264 Admite entradas de video HDCVI / AHD / TVI / CVBS / IP Máx. 5/10 canales de entradas de cámara IP, cada canal hasta 2MP / 5M', '2vig.png', '7321.00', 4, 8, 1, '2021-05-19 22:58:29', NULL, NULL),
(6, '0591-2789', 1, 1, 'Cámaras de seguridad – Versint V5640PTZ', 'Cámara en plataforma PTZ', 'Cámara modelo v5640PTZ de fácil instalación en cualquier entorno o condición de montaje. Monitoreo de estado automatizado, visualización remota de vid', '5cam.png', '4000.00', 10, 10, 0, '2021-05-18 22:58:29', NULL, NULL),
(7, '54162-010', 1, 1, 'Cámara con reconocimiento de patentes vehiculares LPR', 'Cámara de reconocimiento de matrículas vehículares de ZKTeco', 'Basado en años de experiencia en la industria, en plataformas de hardware de cámaras LPR y software de gestión de estacionamient, puede identificar co', '6cam.png', '15000.00', 5, 6, 1, '2021-05-17 22:58:29', NULL, NULL),
(8, '55154-6295', 3, 4, 'Lector de tarjetas', 'Lector de tarjetas digital', 'Lector de tarjetas automatizado, ideal para ambientes laborales.', '1acc.png', '3569.00', 10, 8, 0, '2021-05-16 22:58:29', NULL, NULL),
(9, '58755-0001', 3, 4, 'Lector de huellas dactilares', 'Lector de huellas dactilares ', 'Lector de huellas dactilares, ideal para restringir el acceso a sectores vulnerables.', '2acc.png', '3800.00', 5, 8, 0, '2021-05-15 22:58:29', NULL, NULL),
(10, '0904-6084', 3, 4, 'Lector de tarjetas de proximidad AC5000', 'Terminal de tarjeta de proximidad ', 'Terminal de tarjeta de proximidad. Pantalla táctil de 10 cm. Cámara fija VGA con flash.', '3acc.png', '8000.00', 5, 8, 0, '2021-05-14 22:58:29', NULL, NULL),
(11, '57968-4873', 1, 2, 'Cámara infrarroja terrestre', 'Cámara tipo Domo IP WiFi', 'Cámara tipo domo Móvil IP WiFi con calidad de resolución 1080p. Para ambientes internos, con visión nocturna y ángulo de visión de 72°', '4cam.png', '6000.00', 10, 12, 1, NULL, NULL, NULL),
(12, '0904-6085', 3, 4, 'Terminal Biométrico Virdi AC7000', 'Terminal Biométrico de doble cámara', 'Lector robusto y elegante ideal para uso nm sistema de autenticación por rostro, huellas digitales, RFID y/o contraseña. De interfaz simple y amigable', '4acc.png', '10000.00', 10, 12, 1, NULL, NULL, NULL),
(13, '0904-6087', 3, 4, 'Cerradura Para Hotel 8118 RF ', 'Cerradura Electrónica Para Hotel. Tarjeta Inteligente RF', 'Cerradura Electrónica Para Hotel. Tarjeta Inteligente RFID + llave de metal en caso de emergencia. Con alarma de puerta entreabierta. ', '5acc.png', '14600.00', 5, 10, 1, NULL, NULL, NULL),
(14, '58755-0002', 3, 4, 'Tarjeta de proximidad para reloj de personal', 'Tarjeta de proximidad para relojes de control de personal.', 'Tarjeta de frecuencia 125 khz, 26 bits, 0,8 mm de espesor. Con tecnología de tipo EM Marine.', '6acc.png', '1500.00', 5, 25, 1, NULL, NULL, NULL),
(15, '58755-0003', 3, 4, 'Lector QR y Tarjeta', 'Lector de control de acceso', 'Terminal independiente pionero de ZKTeco con lector de códigos QR, RFID, huella y palma. Cuenta con pantalla táctil.', '7acc.png', '7000.00', 5, 8, 1, NULL, NULL, NULL),
(16, '0591-2780', 3, 4, 'Control de acceso facial WiFi con detección térmica', 'Algoritmo de medición de temperatura corporal', 'Control de acceso facial con medición térmica. Capacidad ultra grande de plantillas faciales y de palma. Cámara con sensor CMOS starlight de 2MP con f', '8acc.png', '18000.00', 10, 10, 1, NULL, NULL, NULL),
(17, '0591-2781', 3, 4, 'Control de asistencia con reconocimiento facial', 'Reconocimiento facial visible', 'Con algoritmo anti-falsificación, pantalla táctil de 2.8\". Admite instalación de escritorio y pared. Fuente 12V 2', '9acc.png', '11000.00', 5, 10, 1, NULL, NULL, NULL),
(18, '0591-2782', 3, 4, 'Barrera de paso motorizada para personas ', 'Barrera de paso motorizada de acero inoxidable', 'Barrera de diseño compacto y fácil de integrar en espacios reducidos. Puede integrar sistemas de reconocimiento de huella digital, rostro y tarjeta.', '10acc.png', '190000.00', 10, 5, 1, NULL, NULL, NULL),
(19, '0591-2783', 3, 4, 'Molinete bidireccional con palos colapsables + pictogramas ', 'Molinete bidireccional de sistema amortiguado', 'Diseño estético y ergonométrico, sentido de paso configurable. Bajo mantenimiento, con sistema antivandálico. ', '11acc.png', '300000.00', 5, 4, 1, NULL, NULL, NULL),
(20, '0591-2784', 4, 5, 'Switch 9 Puertos ', 'Switch de 9 bocas, Grado comercial.', 'El ComNet ™ CWGE9MS Managed Ethernet Switch ofrece transmisión de (7) 10/100/1000 BASE-TX y (2) puertos combo 1000FX. Diseño plug-and-Play asegura una', '1conec.png', '9000.00', 5, 10, 1, NULL, NULL, NULL),
(21, '0591-2785', 4, 5, 'Switch PoE (250M) Hikvision ', 'Switch PoE de16 Puertos + 2 admin', 'Puertos: 16 x 10/100 (PoE+) + 2 x Gigabit SFP (subida). Características: auto-uplink (auto MDI/MDI-X), full duplex mode, store and forward', '2conec.png', '15000.00', 5, 12, 1, NULL, NULL, NULL),
(22, '0591-2786', 4, 5, 'Antena Litebeam 5GHZ, 23DBI Airmax Ubiquity', 'Antena direccional de alta ganancia.', 'Diseño industrial de vanguardia. Con libertad de alineación de tres ejes. El LiteBeamM proporciona 23 dBi de ganancia para conectividad a larga distan', '3conec.png', '12450.00', 5, 10, 1, NULL, NULL, NULL),
(23, '0591-2787', 4, 5, 'Unifi Access Point Ac Long Range Ubiquiti', 'Antena con enlace simétrico de largo alcance', 'Antena de innovador diseño, el cual le proporciona un gran alcance. Potente motor de software inalámbrico para empresas de alta densidad que requieren', '4conec.png', '13000.00', 5, 10, 1, NULL, NULL, NULL),
(24, '58755-0004', 4, 5, 'Antena OMNI 2.4GHz 13 dBi', 'Antena de tipo PARAROCKET 2.4GHz UBIQUITI', 'Antena de alcance intermedio, ideal para oficinas y espacios semiabiertos.', '5conec.png', '7000.00', 5, 10, 1, NULL, NULL, NULL),
(25, '58755-0005', 5, 4, 'Pulsador de Panico/Emergencia Inalambrico', 'Pulsador utilizado como antipánico.', 'Pulsador antipánico. Frecuencia de operacion : 315MHZ/433MHZ.', '1intru.png', '300.00', 10, 30, 1, NULL, NULL, NULL),
(26, '58755-0006', 5, 4, 'Kit Alarma HIKVISION WiFi 3G Y 4G', 'Kit alarma marca HIKVISION', 'Incluye: 1 Hub / 1 Sensor PIR / 1 Contacto Magnético / 1 Control Remoto/ WiFi, Panel de control de seguridad inalámbrico de la serie AX, que contiene ', '2intru.png', '20000.00', 10, 10, 1, NULL, NULL, NULL),
(27, '58755-0007', 5, 4, 'Sirena Inalámbrica Exterior HIKVISION', 'Sirena inalámbrica exterior.', 'Sirena ideal para uso exterior por su diseño y resistencia a las contingencias climáticas. Conexión por WiFi.', '3conec.png', '2500.00', 5, 10, 1, NULL, NULL, NULL),
(28, '58755-0008', 5, 4, 'Arco detector de metales ', 'Arco detector de metales de 6 zonas.', 'Posee zonas de detección interconectadas en diferentes áreas y alarma simultánea de múltiples zonas.', '4intru.png', '150000.00', 5, 5, 1, NULL, NULL, NULL),
(29, '58755-0009', 5, 4, 'Barrera Infrarroja 100 Metros', 'Barrera infrarroja apta intemperie.', 'Montaje de superficie, aunque puede montarse en postes o caños. Hasta 100 metros de cobertura, apto intemperie. Protección total de perímetros.', '5intru.png', '35000.00', 10, 5, 1, NULL, NULL, NULL),
(30, '58755-0010', 5, 4, 'Barrera Vehicular Modelo 1.5', 'Barrera Vehicular con brazo de hasta 3 m.', 'Largo de brazo de: 1 a 12 metros. Servicio: 3.000 ciclos/día. Mantenimiento: solo revisión c/500.000 ciclos. Brazo circular de aluminio extruído (dure', '6intru.png', '290000.00', 10, 5, 1, NULL, NULL, NULL),
(31, '58755-0011', 5, 4, 'Detector de humo ', 'Detector de humor marca HIKVISION', 'Detector de humo de alerta inmediata. Apto conexión WiFi para dar aviso a servicios.', '7intru.png', '3500.00', 5, 10, 1, NULL, NULL, NULL),
(32, '58755-0012', 6, 1, 'Kit Cámara Térmica TPC-BF5421-T+ JQ-D70Z DAHUA', 'Cámara híbrida con medición de temperatura ', 'Cámara híbrida con medición de temperatura que proporciona simultáneamenteuna imagen normal y una imagen térmica de la escena tomada. Un algoritmo de ', '1port.png', '75000.00', 5, 10, 1, NULL, NULL, NULL),
(33, '58755-0013', 6, 1, 'Videoportero Cableado con monitor', 'Videoportero Cableado Apto Exterior Con Monitor Color', 'Portero eléctrico con frente de aleación de aluminio. Cámara con visión nocturna. Resistente al agua. Pantalla de 7\" TFT LCD.', '2port.png', '18500.00', 5, 10, 1, NULL, NULL, NULL),
(34, '58755-0014', 6, 1, 'Portero unidad exterior Antivandálico DAHUA', 'Portero con cámara HD e indicación de voz', 'Portero con cámara HD, visión nocturna, mensajería de video y audio. Panel de aleación de zinc, IP65, IK10. ', '3port.png', '6500.00', 5, 10, 1, NULL, NULL, NULL),
(35, '57968-4874', 6, 1, 'Kit Video Portero IP + Monitor 7 Pulgadas', 'Kit Video Portero marca HIKVISION', 'Kit de videoportero IP para barrio privado o casa, solo un botón de llamada. Pantalla de 7 pulgadas de tipo TFT, de resolución 1024x600', '4port.png', '8000.00', 5, 10, 1, NULL, NULL, NULL),
(36, '57968-4875', 6, 4, 'Pistola Termómetro Laser Infrarrojo ', 'Pistola Termómetro Laser Infrarrojo Para Humanos ', 'Tensiómetro láser infrarrojo, termómetro para humanos. Distancia de medición: 5-15 cm .', '5port.png', '2000.00', 10, 10, 1, NULL, NULL, NULL),
(37, '57968-4876', 7, 5, 'Fuente Switching 12V. 1A', 'Fuente Switching 12V. 1A de carcasa Ignífuga.', 'Certificada internacionalmente bajo normas IEC-60065 y IEC-60950. Certificación avalada por grandes certificadoras como TUV y Bureau Veritas.', '1ceso.png', '350.00', 5, 10, 1, NULL, NULL, NULL),
(38, '57968-4877', 7, 5, 'Fuente Switching 12V. 5A', 'Fuente Switching de Salida de carcasa ignífuga.', 'Certificada internacionalmente bajo normas IEC-60065 y IEC-60950. Certificación avalada por grandes certificadoras como TUV y Bureau Veritas. Fusible ', '2ceso.png', '450.00', 5, 10, 1, NULL, NULL, NULL),
(39, '57968-4878', 7, 5, 'Fuente Switching 12V. 10A', 'Fuente Switching de Salida de carcasa ignífuga.', 'Tensión de salida: 12Vcc. Corriente Máxima de salida: 10A. Consumo: 1.5A. Dimensiones: 199x98x39   ', '3ceso.png', '700.00', 10, 10, 1, NULL, NULL, NULL),
(40, '57968-4879', 7, 5, 'Disco Rigido 1TB Seagate Skyhawk', 'Disco duro de 3.5 pulgadas.', 'Disco Capacidad 1000 GB. Tamaño de disco duro 3.5pulg.Interfaz Serial ATA III.', '4ceso.png', '8000.00', 5, 10, 1, NULL, NULL, NULL),
(41, 'EEEX-00523', 1, 1, 'Cámara espía', 'Cámara de exteriores', 'Cámara ideal para seguridad corporativa.', 'producto-1621985130234.png', '6000.00', 5, 15, 1, '2021-05-25 23:25:30', '2021-05-25 23:25:30', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcartitems`
--

CREATE TABLE `shoppingcartitems` (
  `id` int(11) NOT NULL,
  `salePrice` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `shoppingcartitems`
--

INSERT INTO `shoppingcartitems` (`id`, `salePrice`, `quantity`, `subtotal`, `status`, `userId`, `productId`, `cartId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(0, 2367, 1, 2367, 1, 1, 3, NULL, '2021-05-23 22:58:29', '2021-05-23 22:58:29', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcarts`
--

CREATE TABLE `shoppingcarts` (
  `id` int(11) NOT NULL,
  `orderNumber` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`) VALUES
(1, 'Visión Nocturna'),
(2, 'Visión de Calor'),
(3, '360°'),
(4, 'Timbres'),
(5, 'Routers');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `role` varchar(2) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `avatar`, `role`, `password`) VALUES
(1, 'juan.altemir@gmail.com', 'Juan Martín', 'Altemir', 'anakin.jpg', '1', 'admin123'),
(2, 'ramiroestevez04@hotmail.com', 'Ramiro', 'Estevez', 'kyloren.jpg', '1', 'admin123'),
(3, 'pepegrillo@gmail.com', 'Pepe', 'Grillo', 'foto-1619389479083.jpg', '1', '$2a$10$U3iYQw7gSGj43vg9z97vVu0GrAN4uihd0Qz/vm7it70Kr0p9zN4pq'),
(4, 'jp@correo.com', 'jose', 'perez', 'foto-1619395250405.jpg', '1', '$2a$10$vCTV4PKNdFzyjQsGfCwULOphsimQPfcL8FCV8qj7BuM2xZ5suaSxu'),
(6, 'ramiroestevez96@gmail.com', 'Ramiro', 'Estevez', 'foto-1620149319514.png', '1', '$2a$10$Uncwz8YbOyBH2nnSwiBp/..pu/ylfCCeucOfMBlpaY3rWmMHO3gz.'),
(7, 'julioperez@email.com', 'Julio', 'Perez', 'foto-1621267304919.jpg', '1', '$2a$10$fV4YSJiIy1WgSb28ge.BfeeWg1ds9PPL4p2gkfIOZb0ykuBEBSXPO'),
(8, 'pepe.dias@mail.com', 'Pepe', 'Dias', 'foto-1621640659428.jpg', '1', '$2a$10$IK1cHP.DpJzCAUS0e7O/1.cz5KYNCV4pc3MgRvGs1EqIGKv/1m2n.'),
(9, 'admin@mail.com', 'admin', 'web', 'foto-1621893879050.jpg', '1', '$2a$10$0YVjm.hqbQwkHbyOz1mKzOC5/JcbuweqUWqDCxnPHftEXPnyVMILq'),
(10, 'admin@mail.com', 'admin', 'web', 'foto-1621896547531.jpg', '1', '$2a$10$qk9YTRgd9ONlK.cOwZYzz.yludj.pmBPHizKTctwz9TpP11m/ZSuy'),
(11, 'admin@mail.com', 'admin', 'web', 'foto-1621924104680.jpg', '1', '$2a$10$Ft5wPQYfRqjTh68Xez21deinrX2JLG49zZLsbK1GqtylWbQJwYvd6'),
(12, 'prueba@mail.com', 'prueba12', 'probada', 'foto-1621925483653.jpg', '1', '$2a$10$grx4qt2BHqmU4QFX.H8E8O7CoUN9P3NkVlfJzQiJwe78K58qXqBWW');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_fk0` (`categoryId`),
  ADD KEY `products_fk1_idx` (`subcategoryId`);

--
-- Indices de la tabla `shoppingcartitems`
--
ALTER TABLE `shoppingcartitems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shoppingcartitems_fk0` (`productId`),
  ADD KEY `shoppingcartitems_fk1` (`userId`),
  ADD KEY `shoppingcartitems_fk2` (`cartId`);

--
-- Indices de la tabla `shoppingcarts`
--
ALTER TABLE `shoppingcarts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_fk0` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_fk1` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`);

--
-- Filtros para la tabla `shoppingcartitems`
--
ALTER TABLE `shoppingcartitems`
  ADD CONSTRAINT `shoppingcartitems_fk0` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `shoppingcartitems_fk1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `shoppingcartitems_fk2` FOREIGN KEY (`cartId`) REFERENCES `shoppingcarts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
