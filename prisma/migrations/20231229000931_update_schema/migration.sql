/*
  Warnings:

  - You are about to drop the column `authorId` on the `ProductInput` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProductInput` table. All the data in the column will be lost.
  - You are about to drop the column `suplier` on the `ProductInput` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `ProductInput` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `ProductOutput` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProductOutput` table. All the data in the column will be lost.
  - You are about to drop the column `suplier` on the `ProductOutput` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `ProductOutput` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductInput" DROP COLUMN "authorId",
DROP COLUMN "description",
DROP COLUMN "suplier",
DROP COLUMN "value";

-- AlterTable
ALTER TABLE "ProductOutput" DROP COLUMN "authorId",
DROP COLUMN "description",
DROP COLUMN "suplier",
DROP COLUMN "value";
