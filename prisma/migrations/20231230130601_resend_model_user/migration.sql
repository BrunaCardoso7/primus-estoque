/*
  Warnings:

  - You are about to drop the column `authorId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_authorId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "User";
