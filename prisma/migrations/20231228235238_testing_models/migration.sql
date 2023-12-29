/*
  Warnings:

  - You are about to drop the `ProductInput` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductOutput` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductInput" DROP CONSTRAINT "ProductInput_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOutput" DROP CONSTRAINT "ProductOutput_productId_fkey";

-- DropTable
DROP TABLE "ProductInput";

-- DropTable
DROP TABLE "ProductOutput";
