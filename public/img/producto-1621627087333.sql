CREATE TABLE `products` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`sku` INT NOT NULL,
	`category` INT NOT NULL,
	`subcategory` INT NOT NULL,
	`product_name` varchar NOT NULL,
	`description` varchar NOT NULL,
	`detail` varchar NOT NULL,
	`image` varchar NOT NULL,
	`price` DECIMAL NOT NULL,
	`discount` INT,
	`stock` INT NOT NULL,
	`status` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`category` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` varchar NOT NULL,
	`full_name` varchar NOT NULL,
	`phone` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`shipping_adress` varchar NOT NULL,
	`order_date` DATETIME NOT NULL,
	`order_status` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `order_details` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`order_id` INT NOT NULL,
	`product_id` INT NOT NULL,
	`quantity` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `shopping_cart` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`product_id` INT NOT NULL,
	`quantity` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `subcategories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`subcategory` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `payment_details` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`order_id` INT NOT NULL,
	`debit/credit` INT NOT NULL,
	`card_provider` varchar,
	`card_number` INT NOT NULL,
	`cardholder` INT NOT NULL,
	`expiration` DATE NOT NULL,
	`security_code` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `products` ADD CONSTRAINT `products_fk0` FOREIGN KEY (`category`) REFERENCES `categories`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_fk1` FOREIGN KEY (`subcategory`) REFERENCES `subcategories`(`id`);

ALTER TABLE `orders` ADD CONSTRAINT `orders_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `order_details` ADD CONSTRAINT `order_details_fk0` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`);

ALTER TABLE `order_details` ADD CONSTRAINT `order_details_fk1` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `shopping_cart_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `shopping_cart_fk1` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);

ALTER TABLE `payment_details` ADD CONSTRAINT `payment_details_fk0` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`);

