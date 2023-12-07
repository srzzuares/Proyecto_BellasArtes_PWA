-- CreateTable
CREATE TABLE `tbb_artistas` (
    `Persona_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion_Blog` VARCHAR(1000) NULL,
    `Imagen` VARCHAR(1000) NULL,
    `Estatus` BOOLEAN NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Persona_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbb_compra` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Usuario_ID` INTEGER NOT NULL,
    `Pintura_ID` INTEGER NOT NULL,
    `Costo_Final` DOUBLE NULL,
    `Descuento` DOUBLE NOT NULL,
    `Fecha_Venta` DATETIME(3) NOT NULL,

    INDEX `Pintura_ID`(`Pintura_ID`),
    INDEX `Usuario_ID`(`Usuario_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbb_personas` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(30) NOT NULL,
    `P_Apellido` VARCHAR(30) NOT NULL,
    `S_Apellido` VARCHAR(30) NOT NULL,
    `Nacimiento` DATE NOT NULL,
    `Genero` ENUM('M', 'F', 'N/A') NULL DEFAULT 'N/A',
    `Estatus` BOOLEAN NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbb_pinturas` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre_Obra` VARCHAR(50) NULL,
    `Imagen` VARCHAR(1000) NULL,
    `Descripcion` VARCHAR(1000) NULL,
    `Artista_ID` INTEGER NOT NULL,
    `Fecha_Creacion` DATE NULL,
    `Tecnica` VARCHAR(20) NULL,
    `Genero_ID` INTEGER NOT NULL,
    `Costo` DOUBLE NOT NULL,
    `Estatus` BOOLEAN NOT NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    INDEX `Artista_ID`(`Artista_ID`),
    INDEX `Genero_ID`(`Genero_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbb_usuarios` (
    `Persona_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre_Usuario` VARCHAR(30) NULL,
    `Correo` VARCHAR(100) NULL,
    `Contrasena` VARCHAR(100) NULL,
    `Rol_ID` INTEGER NOT NULL,
    `Estatus` BOOLEAN NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    INDEX `Rol_ID`(`Rol_ID`),
    PRIMARY KEY (`Persona_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbc_genero` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre_Genero` VARCHAR(30) NULL,
    `Genero_Padre` INTEGER NOT NULL,
    `Estatus` BOOLEAN NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    INDEX `Genero_Padre`(`Genero_Padre`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbc_roles` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(30) NOT NULL,
    `Descripcion` VARCHAR(300) NOT NULL,
    `Estatus` BOOLEAN NOT NULL DEFAULT true,
    `Fecha_Registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Fecha_Actualizacion` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbb_artistas` ADD CONSTRAINT `tbb_artistas_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_compra` ADD CONSTRAINT `tbb_compra_ibfk_1` FOREIGN KEY (`Pintura_ID`) REFERENCES `tbb_pinturas`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_compra` ADD CONSTRAINT `tbb_compra_ibfk_2` FOREIGN KEY (`Usuario_ID`) REFERENCES `tbb_usuarios`(`Persona_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_pinturas` ADD CONSTRAINT `tbb_pinturas_ibfk_1` FOREIGN KEY (`Artista_ID`) REFERENCES `tbb_artistas`(`Persona_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_pinturas` ADD CONSTRAINT `tbb_pinturas_ibfk_2` FOREIGN KEY (`Genero_ID`) REFERENCES `tbc_genero`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_usuarios` ADD CONSTRAINT `tbb_usuarios_ibfk_1` FOREIGN KEY (`Persona_ID`) REFERENCES `tbb_personas`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbb_usuarios` ADD CONSTRAINT `tbb_usuarios_ibfk_2` FOREIGN KEY (`Rol_ID`) REFERENCES `tbc_roles`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbc_genero` ADD CONSTRAINT `tbc_genero_ibfk_1` FOREIGN KEY (`Genero_Padre`) REFERENCES `tbc_genero`(`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
