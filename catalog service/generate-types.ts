import { existsSync, rmSync } from "fs";
import * as inputSchemas from "./inputs";
import * as modelSchemas from "./generated/zod/modelSchema";
import { createTypeAlias, printNode, zodToTs } from "zod-to-ts";
import { z } from "zod";
import { writeFile, mkdir } from "fs/promises";

const WARNING =
  "// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it";
const OUTPUT_DIR_ORDER_SERVICE = "../order service/types";
const OUTPUT_DIR_UI_STORE = "../ui-store/types";

if (existsSync(`${OUTPUT_DIR_ORDER_SERVICE}/input`)) {
  rmSync(`${OUTPUT_DIR_ORDER_SERVICE}/input`, { recursive: true });
}
if (existsSync(`${OUTPUT_DIR_UI_STORE}/catalog-input`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/catalog-input`, { recursive: true });
}

if (existsSync(`${OUTPUT_DIR_ORDER_SERVICE}/models`)) {
  rmSync(`${OUTPUT_DIR_ORDER_SERVICE}/models`, { recursive: true });
}
if (existsSync(`${OUTPUT_DIR_UI_STORE}/catalog-models`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/catalog-models`, { recursive: true });
}

if (existsSync(`${OUTPUT_DIR_UI_STORE}/catalog-enums`)) {
  rmSync(`${OUTPUT_DIR_UI_STORE}/catalog-enums`, { recursive: true });
}

async function generateInputTypes() {
  const types: any[] = [];
  console.log("Object.keys(inputSchemas)", Object.keys(inputSchemas));
  for (let key of Object.keys(inputSchemas)) {
    const schema = (inputSchemas as any)[key];

    const name = key.replace("Schema", "");

    const tsType = zodToTs(schema as z.Schema);
    const typeAlias = createTypeAlias(tsType.node, name);

    types.push({ name, content: `${WARNING}\n\n export ${printNode(typeAlias)}` });
  }

  await mkdir(`${OUTPUT_DIR_ORDER_SERVICE}/input`, { recursive: true });
  await mkdir(`${OUTPUT_DIR_UI_STORE}/catalog-input`, { recursive: true });

  for (let type of types) {
    console.log("Generated Input:", type.name);
    await writeFile(`${OUTPUT_DIR_ORDER_SERVICE}/input/${type.name}.ts`, type.content);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/catalog-input/${type.name}.ts`, type.content);
  }
}

async function generateModelsTypes() {
  const types: any[] = [];
  for (let key of Object.keys(modelSchemas)) {
    const schema = (modelSchemas as any)[key];

    if (!key.includes("WithRelations")) {
      console.log("key: ", key);
      continue;
    }
    const name = key.replace("Schema", "").replace("WithRelations", "");

    const tsType = zodToTs(schema as z.Schema, "any");
    const typeAlias = createTypeAlias(tsType.node, name);

    types.push({ name, content: `${WARNING}\n\n export ${printNode(typeAlias)}` });
  }

  await mkdir(`${OUTPUT_DIR_ORDER_SERVICE}/models`, { recursive: true });
  await mkdir(`${OUTPUT_DIR_UI_STORE}/catalog-models`, { recursive: true });

  for (let type of types) {
    console.log("Generated Model:", type.name);
    await writeFile(`${OUTPUT_DIR_ORDER_SERVICE}/models/${type.name}.ts`, type.content);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/catalog-models/${type.name}.ts`, type.content);
  }
}

async function generateEnums() {
  const enums = [
    {
      name: "USER_ROLE",
      values: ["SUPER_ADMIN", "ADMIN", "USER"],
    },
    {
      name: "PRODUCT_COLORS",
      values: ["RED", "GREEN", "BLACK", "GRAY", "BLUE", "PURPLE"],
    },
    {
      name: "PRODUCT_TYPE",
      values: ["MEN", "WOMEN", "KIDS"],
    },
    {
      name: 'PRODUCT_SIZE',
      values: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    }
  ];

  await mkdir(`${OUTPUT_DIR_UI_STORE}/catalog-enums`, { recursive: true });

  for (let enumDef of enums) {
    const enumContent = `${WARNING}

export enum ${enumDef.name} {
${enumDef.values.map((v) => `  ${v} = "${v}"`).join(",\n")}
}

export const ${enumDef.name}_VALUES = [
${enumDef.values.map((v) => `  "${v}"`).join(",\n")}
] as const;
`;
    console.log("Generated Enum:", enumDef.name);
    await writeFile(`${OUTPUT_DIR_UI_STORE}/catalog-enums/${enumDef.name}.ts`, enumContent);
  }
}

generateInputTypes();
generateModelsTypes();
generateEnums();
