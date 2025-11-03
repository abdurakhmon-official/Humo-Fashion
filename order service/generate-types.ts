import { existsSync, rmSync } from "fs";
import * as inputSchemas from './inputs'
import { createTypeAlias, printNode, zodToTs } from "zod-to-ts";
import { z } from "zod";
import { writeFile, mkdir } from "fs/promises";

const WARNING =
  "// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it";
const OUTPUT_DIR_ORDER_SERVICE = "../payment service/types";
const OUTPUT_DIR_UI_STORE = '../ui-store/types'

if (existsSync(`${OUTPUT_DIR_ORDER_SERVICE}/input`)) {
  rmSync(`${OUTPUT_DIR_ORDER_SERVICE}/input`, { recursive: true });
}

if (existsSync(`${OUTPUT_DIR_UI_STORE}/order-input`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/order-input`, {recursive: true})
}

if (existsSync(`${OUTPUT_DIR_UI_STORE}/order-models`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/order-models`, { recursive: true });
}

async function generateInputTypes() {
  const types: any[] = [];
    for (let key of Object.keys(inputSchemas)) {
      const schema = (inputSchemas as any)[key];

      if (!schema || !("_def" in schema)) {
        console.log(`Skipping non-zod key: ${key}`);
        continue;
      }

      const name = key.replace("Schema", "");
      const tsType = zodToTs(schema as z.Schema);
      const typeAlias = createTypeAlias(tsType.node, name);

      types.push({ name, content: `${WARNING}\n\n export ${printNode(typeAlias)}` });
    }


  await mkdir(`${OUTPUT_DIR_ORDER_SERVICE}/input`, { recursive: true });
  await mkdir(`${OUTPUT_DIR_UI_STORE}/order-input`, { recursive: true });

  for (let type of types) {
    console.log("Generated Input:", type.name);
    await writeFile(`${OUTPUT_DIR_ORDER_SERVICE}/input/${type.name}.ts`, type.content);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/order-input/${type.name}.ts`, type.content);
  }
}

generateInputTypes();
