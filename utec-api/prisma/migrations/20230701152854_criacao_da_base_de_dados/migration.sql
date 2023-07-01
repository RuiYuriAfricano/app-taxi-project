-- CreateTable
CREATE TABLE `actor` (
    `email` VARCHAR(191) NOT NULL,
    `morada` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `datanasc` DATETIME(3) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `clienteEmail` VARCHAR(191) NOT NULL,
    `x` VARCHAR(191) NOT NULL,
    `y` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clienteEmail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresa` (
    `codEmpresa` INTEGER NOT NULL,
    `nomeEmpresa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codEmpresa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `email` VARCHAR(191) NOT NULL,
    `destreza` VARCHAR(191) NOT NULL,
    `id_empresa` INTEGER NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motoristataxi` (
    `codMotoristaTaxi` INTEGER NOT NULL,
    `id_taxi` INTEGER NULL,
    `id_motorista` VARCHAR(191) NULL,

    PRIMARY KEY (`codMotoristaTaxi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taxi` (
    `codTaxi` INTEGER NOT NULL,
    `x` VARCHAR(191) NOT NULL,
    `y` VARCHAR(191) NOT NULL,
    `tipoDeViatura` VARCHAR(191) NOT NULL,
    `vmPorKM` DOUBLE NOT NULL,
    `precoBasePorKM` DOUBLE NOT NULL,
    `disponibilidade` VARCHAR(191) NOT NULL,
    `filaEspera` VARCHAR(191) NULL,
    `id_empresa` INTEGER NULL,

    PRIMARY KEY (`codTaxi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem` (
    `codViagem` INTEGER NOT NULL,
    `custoFinal` DOUBLE NULL,
    `custoEstimado` DOUBLE NULL,
    `pontoPartida` VARCHAR(191) NULL,
    `pontoDestino` VARCHAR(191) NULL,
    `distanciaPercorrida` DOUBLE NULL,
    `tempoEstimado` DATETIME(3) NULL,
    `tempoReal` DATETIME(3) NULL,
    `data` DATETIME(3) NULL,
    `factorFiabilidade` VARCHAR(191) NULL,
    `classificacaoMotorista` VARCHAR(191) NULL,
    `condicionantes` VARCHAR(191) NULL,
    `estadoViagem` VARCHAR(191) NULL,
    `fkMotoristaTaxi` INTEGER NOT NULL,
    `fkClienteEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codViagem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `cliente_clienteEmail_fkey` FOREIGN KEY (`clienteEmail`) REFERENCES `actor`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `motorista` ADD CONSTRAINT `motorista_email_fkey` FOREIGN KEY (`email`) REFERENCES `actor`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `motorista` ADD CONSTRAINT `motorista_id_empresa_fkey` FOREIGN KEY (`id_empresa`) REFERENCES `empresa`(`codEmpresa`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `motoristataxi` ADD CONSTRAINT `motoristataxi_id_taxi_fkey` FOREIGN KEY (`id_taxi`) REFERENCES `taxi`(`codTaxi`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `motoristataxi` ADD CONSTRAINT `motoristataxi_id_motorista_fkey` FOREIGN KEY (`id_motorista`) REFERENCES `motorista`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taxi` ADD CONSTRAINT `taxi_id_empresa_fkey` FOREIGN KEY (`id_empresa`) REFERENCES `empresa`(`codEmpresa`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `viagem_fkMotoristaTaxi_fkey` FOREIGN KEY (`fkMotoristaTaxi`) REFERENCES `motoristataxi`(`codMotoristaTaxi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `viagem_fkClienteEmail_fkey` FOREIGN KEY (`fkClienteEmail`) REFERENCES `cliente`(`clienteEmail`) ON DELETE RESTRICT ON UPDATE CASCADE;
