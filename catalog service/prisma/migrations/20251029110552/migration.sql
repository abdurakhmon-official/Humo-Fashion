-- CreateEnum
CREATE TYPE "PRODUCT_SIZE" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "size" "PRODUCT_SIZE";
