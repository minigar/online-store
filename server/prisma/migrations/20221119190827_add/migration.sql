-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imgUrl" TEXT NOT NULL DEFAULT '../../client/src/images/blackSquare.png';

-- CreateTable
CREATE TABLE "CartProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL DEFAULT '../../client/src/images/blackSquare.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CartProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CartProduct_name_key" ON "CartProduct"("name");
