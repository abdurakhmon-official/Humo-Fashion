import prisma from "../modules/db";
import { hashPassword } from "../modules/auth";
import { ProductFactory } from "../utils/fixtures";

const COUNTRIES = ["UZBEKISTAN", "USA", "SOUTH KOREA"];
const BRANDS = [
  "Zara",
  "H&M",
  "Uniqlo",
  "Mango",
  "Massimo Dutti",
  "Gucci",
  "Louis Vuitton",
  "Prada",
  "Channel",
  "Dior",
];

async function main() {
  const adminId = await createUsers();
  const koreaId = await createCountries();
  const brands = await createBrands(koreaId);
  await createProducts(brands);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });

async function createUsers() {
  const superAdmin = await prisma.user.upsert({
    where: { username: "super" },
    update: {},
    create: {
      name: "Humo Fashion Super Admin",
      username: "super",
      role: "SUPER_ADMIN",
      password: await hashPassword("12345678"),
    },
  });
  console.log("super id: ", superAdmin.id);

  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      name: "Humo Fashion Admin",
      username: "admin",
      role: "ADMIN",
      password: await hashPassword("12345678"),
    },
  });
  console.log("admin id: ", admin.id);

  const user = await prisma.user.upsert({
    where: { username: "user" },
    update: {},
    create: {
      name: "Humo Fashion User",
      username: "user",
      role: "USER",
      password: await hashPassword("12345678"),
    },
  });
  console.log("user id: ", user.id);

  return admin.id;
}

async function createCountries() {
  let koreaId;
  for (const country of COUNTRIES) {
    const cntry = await prisma.country.upsert({
      where: { name: country },
      update: {},
      create: Object.assign<any, any>({}, { name: country }),
    });

    if (country === "SOUTH KOREA") koreaId = cntry.id;
  }

  return koreaId;
}

async function createBrands(countryId: string) {
  const brandRecords: { id: string; name: string }[] = [];
  for (const brand of BRANDS) {
    const b = await prisma.brand.upsert({
      where: { name: brand },
      update: {},
      create: { name: brand, countryId },
    });
    brandRecords.push({ id: b.id, name: b.name });
  }
  return brandRecords;
}

async function createProducts(brands: { id: string; name: string }[]) {
  await prisma.product.deleteMany({})
  console.log('all products is deleted')
  
  for (const brand of brands) {
    for (let i = 0; i < 1000; i++) {
      const productData = ProductFactory.build({ brandId: brand.id });

      console.log("Product data:", productData);

      try {
        await prisma.product.create({
          data: productData
        });
      } catch (error) {
        console.error("Error creating product:", productData.name, error);
        throw error;
      }
    }
  }
  console.log("Products created for all brands!");
}

