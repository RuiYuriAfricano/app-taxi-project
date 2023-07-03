/*
  Warnings:

  - You are about to drop the column `pontoDestino` on the `viagem` table. All the data in the column will be lost.
  - You are about to drop the column `pontoPartida` on the `viagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `viagem` DROP COLUMN `pontoDestino`,
    DROP COLUMN `pontoPartida`,
    ADD COLUMN `xDestino` VARCHAR(191) NULL,
    ADD COLUMN `xPartida` VARCHAR(191) NULL,
    ADD COLUMN `yDestino` VARCHAR(191) NULL,
    ADD COLUMN `yPartida` VARCHAR(191) NULL;
