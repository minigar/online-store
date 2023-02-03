/*
  Warnings:

  - You are about to drop the column `hashRT` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "hashRT",
ADD COLUMN     "hashedRT" TEXT;
