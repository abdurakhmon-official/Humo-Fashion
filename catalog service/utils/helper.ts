import { BasicSearchSchema } from "@/inputs/basic.search";

export function parseQueryToSearch(query: Record<string, any>) {
  const parsed: any = {
    size: query.size,
    page: query.page,
    search: query.search,
    sortBy: [],
    options: {},
  };

  for (const key in query) {
    const value = query[key];

    const sortMatch = key.match(/^sortBy\[(\d+)\]\[(key|order)\]$/);
    if (sortMatch) {
      const index = Number(sortMatch[1]);
      const field = sortMatch[2];
      if (!parsed.sortBy[index]) parsed.sortBy[index] = { key: "", order: "desc" };
      parsed.sortBy[index][field] = value;
      continue;
    }

    const singleOptionMatch = key.match(/^options\[([^[]+)\]$/);
    if (singleOptionMatch) {
      const main = singleOptionMatch[1];
      parsed.options[main] = value;
      continue;
    }

    const nestedOptionMatch = key.match(/^options\[([^[]+)\]\[([^[]+)\]$/);
    if (nestedOptionMatch) {
      const main = nestedOptionMatch[1];
      const sub = nestedOptionMatch[2];
      parsed.options[main] = parsed.options[main] || {};
      parsed.options[main][sub] = value;
      continue;
    }
  }

  return BasicSearchSchema.parse(parsed);
}
