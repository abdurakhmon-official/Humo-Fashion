-- CreateTable
CREATE TABLE "public"."countries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "public"."countries"("name");

-- AddForeignKey
ALTER TABLE "public"."Brand" ADD CONSTRAINT "Brand_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
