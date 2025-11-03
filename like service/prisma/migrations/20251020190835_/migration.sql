-- CreateTable
CREATE TABLE "product_likes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "product_likes_productId_idx" ON "product_likes"("productId");

-- CreateIndex
CREATE INDEX "product_likes_userId_idx" ON "product_likes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "product_likes_userId_productId_key" ON "product_likes"("userId", "productId");
