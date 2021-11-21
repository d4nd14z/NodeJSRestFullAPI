CREATE DATABASE IF NOT EXISTS restapidb;

USE restapidb;

CREATE TABLE empresas (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nit VARCHAR(50),
	nombre VARCHAR(255),
	direccion VARCHAR(255),
	email VARCHAR(50),
	telefono VARCHAR(20)	
) ENGINE = InnoDB;

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	descripcion VARCHAR(255)	
) ENGINE = InnoDB;

CREATE TABLE tipoids (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(5),
	descripcion VARCHAR(255)
) ENGINE = InnoDB;

CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipoid INT NOT NULL,
	numid VARCHAR(50),
	nombres VARCHAR(50),
	apellidos VARCHAR(50),
	email VARCHAR(50),
	login VARCHAR(50) UNIQUE,
	password varchar(255),
	rol INT,
	empresa INT,
	FOREIGN KEY (tipoid) REFERENCES tipoids(id),
	FOREIGN KEY (rol) REFERENCES roles(id),
	FOREIGN KEY (empresa) REFERENCES empresas(id)	
) ENGINE = InnoDB;

INSERT INTO empresas (nit, nombre, direccion, email, telefono)
VALUES('1234567890','D2MSoftware', 'Av. Universitaria # 65 - 02', 'd2msoftware@localhost.com', '123456789');

INSERT INTO roles (nombre, descripcion)
VALUES ('Administrador','Administrador del Sistema');

INSERT INTO roles (nombre, descripcion)
VALUES ('Usuario','Usuario del Sistema');

INSERT INTO tipoids (nombre, descripcion)
VALUES ('CC','Cedula de Ciudadania');

INSERT INTO tipoids (nombre, descripcion)
VALUES ('CE','Cedula de Extranjeria');

INSERT INTO tipoids (nombre, descripcion)
VALUES ('NIT','Numero de Identificacion Tributaria');

INSERT INTO usuarios (tipoid, numid, nombres, apellidos, email, login, password, rol, empresa)
VALUES(1, '1234567890', 'Daniel Mauricio', 'Diaz Forero', 'admin@d2msoftware.com', 'admin', 'admin', 1, 1);
