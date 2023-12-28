/*
  Warnings:

  - Made the column `quantity` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "quantity" SET NOT NULL;

-- CreateTable
CREATE TABLE "ProductInput" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "suplier" TEXT,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "postedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "ProductInput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductOutput" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "suplier" TEXT,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "postedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "ProductOutput_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductInput" ADD CONSTRAINT "ProductInput_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOutput" ADD CONSTRAINT "ProductOutput_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
