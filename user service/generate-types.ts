import { existsSync, rmSync } from "fs";
import * as inputSchemas from "./inputs/user.input";
import * as modelSchemas from "./generated/zod/modelSchema";
import { createTypeAlias, printNode, zodToTs } from "zod-to-ts";
import { z, ZodObject } from "zod";
import { writeFile, mkdir } from "fs/promises";

const WARNING =
  "// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it";
const OUTPUT_DIR_UI_STORE = "../ui-store/types";

if (existsSync(`${OUTPUT_DIR_UI_STORE}/user-input`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/user-input`, { recursive: true });
}

if (existsSync(`${OUTPUT_DIR_UI_STORE}/user-model`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/user-model`, { recursive: true });
}

async function generateInputTypes() {
  const types: any[] = [];
  console.log("Object.keys(inputSchemas)", Object.keys(inputSchemas));
  for (let key of Object.keys(inputSchemas)) {
    const schema = (inputSchemas as any)[key];

    const name = key.replace("Schema", "");

    const tsType = zodToTs(schema as ZodObject<any>);
    const typeAlias = createTypeAlias(tsType.node, name);

    types.push({ name, content: `${WARNING}\n\n export ${printNode(typeAlias)}` });
  }

  await mkdir(`${OUTPUT_DIR_UI_STORE}/user-input`, { recursive: true });

  for (let type of types) {
    console.log("Generated Input:", type.name);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/user-input/${type.name}.ts`, type.content);
  }
}

async function generateModelsTypes() {
  const types: any[] = [];

  for (let key of Object.keys(modelSchemas)) {
    const schema = (modelSchemas as any)[key];

    // Faqat asosiy schema'larni olish (WithRelations yoki boshqa variantlarsiz)
    if (key.includes("WithRelations") || key.includes("Optional") || key.includes("Partial") || key === "default") {
      continue;
    }

    const name = key.replace("Schema", "");

    console.log("Generating model:", name);

    try {
      const tsType = zodToTs(schema as z.ZodType<any>);
      const typeAlias = createTypeAlias(tsType.node, name);

      types.push({
        name,
        content: `${WARNING}\n\nexport ${printNode(typeAlias)}`,
      });
    } catch (error) {
      console.error(`Error generating type for ${name}:`, error);
    }
  }

  await mkdir(`${OUTPUT_DIR_UI_STORE}/user-model`, { recursive: true });

  for (let type of types) {
    console.log("Generated Model:", type.name);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/user-model/${type.name}.ts`, type.content);
  }
}

// Ikkalasini ham ishga tushirish
async function generateAll() {
  await generateInputTypes();
  await generateModelsTypes();
}

generateAll().catch(console.error);
