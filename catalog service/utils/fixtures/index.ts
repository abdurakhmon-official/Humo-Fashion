import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

enum PRODUCT_TYPE {
  MEN = "MEN",
  WOMEN = "WOMEN",
  KIDS = "KIDS",
}

enum PRODUCT_COLORS {
  RED = "RED",
  GREEN = "GREEN",
  BLACK = "BLACK",
  GRAY = "GRAY",
  BLUE = "BLUE",
  PURPLE = "PURPLE",
}

enum PRODUCT_SIZE {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export const ProductFactory = new Factory<any>()
  .attr("name", () => faker.commerce.productName() || "Unknown Product")
  .attr("description", () => faker.commerce.productDescription() || "No description available.")
  .attr("overview", () => faker.lorem.sentences({ min: 2, max: 4 }) || "No overview available.")
  .attr("information", () => faker.lorem.paragraphs({ min: 1, max: 3 }) || "No information provided.")
  .attr("stock", () => faker.number.int({ min: 10, max: 100 }))
  .attr("price", () => {
    const price = faker.commerce.price({ min: 10, max: 500, dec: 2 });
    return parseFloat(price) || 0;
  })
  .attr("discount", () => faker.number.int({ min: 5, max: 50 }))
  .attr("price2", ["price", "discount"], (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return parseFloat(discountedPrice.toFixed(2));
  })
  .attr("type", () => faker.helpers.arrayElement(Object.values(PRODUCT_TYPE)) || PRODUCT_TYPE.MEN)
  .attr("like_count", () => faker.number.int({ min: 10, max: 200 }))
  .attr("sold", () => faker.number.int({ min: 1, max: 100 }))
  .attr("size", () => faker.helpers.arrayElement(Object.values(PRODUCT_SIZE)))
  .attr("color", () => faker.helpers.arrayElement(Object.values(PRODUCT_COLORS)))
  .attr("average_rating", () => faker.number.float({ min: 0, max: 5, precision: 0.1 }))
  .attr("deleted", () => false)
  .attr("brandId", (brandId: string) => brandId || "")
  .attr("createdAt", () => new Date())
  .attr("updatedAt", () => new Date());
