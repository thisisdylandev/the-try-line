/*
  Warnings:

  - You are about to drop the column `admin` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Player` table. All the data in the column will be lost.
  - Added the required column `name` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "admin",
DROP COLUMN "userId",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
