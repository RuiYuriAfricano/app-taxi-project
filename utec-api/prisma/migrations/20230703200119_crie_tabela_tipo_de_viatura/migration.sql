/*
  Warnings:

  - You are about to drop the column `tipoDeViatura` on the `taxi` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `taxi` DROP COLUMN `tipoDeViatura`,
    ADD COLUMN `id_TDV` INTEGER NULL;

-- CreateTable
CREATE TABLE `tipoDeViatura` (
    `codTDV` INTEGER NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`codTDV`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `taxi` ADD CONSTRAINT `taxi_id_TDV_fkey` FOREIGN KEY (`id_TDV`) REFERENCES `tipoDeViatura`(`codTDV`) ON DELETE SET NULL ON UPDATE CASCADE;
