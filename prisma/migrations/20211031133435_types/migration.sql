/*
  Warnings:

  - You are about to alter the column `height` on the `HealthData` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `weight` on the `HealthData` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "HealthData" ALTER COLUMN "height" SET DATA TYPE INTEGER,
ALTER COLUMN "weight" SET DATA TYPE INTEGER;
