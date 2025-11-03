-- CreateEnum
CREATE TYPE "PRODUCT_TYPE" AS ENUM ('MEN', 'WOMEN', 'KIDS');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "type" "PRODUCT_TYPE";
