import { z } from "zod";

export const SortingSchema = z.object({
  key: z.string(),
  order: z.enum(["asc", "desc"]).default("desc"),
});

export const BasicSearchSchema = z
  .object({
    size: z.coerce.number().nullable().default(10),
    page: z.coerce.number().nullable().default(1),
    search: z.string().optional().nullable(),
    sortBy: z.array(SortingSchema).optional(),
    options: z.record(z.any()).optional(),
  })
  .transform((data) => {
    const size = data.size || 10;
    const page = data.page || 1;

    const sortArray = data.sortBy && data.sortBy.length > 0 ? data.sortBy : [{ key: "createdAt", order: "desc" }];

    const sorting: Record<string, "asc" | "desc"> = {};
    sortArray.forEach(({ key, order }) => {
      sorting[key] = order === "asc" ? "asc" : "desc";
    });
    return {
      search: data.search,
      size,
      page,
      skip: (page - 1) * size,
      sorting,
      options: data.options || {},
    };
  });

export type BasicSearch = z.infer<typeof BasicSearchSchema>;

