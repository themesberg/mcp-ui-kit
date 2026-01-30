import { z } from "zod";
import { tableData } from "../data/table-data.js";

// Data Table widget configuration
export const dataTableWidget = {
  name: "data-table" as const,
  metadata: {
    description: "Data Table Display",
  },
  toolConfig: {
    description: "Display a table of products with search and filtering.",
    inputSchema: {
      search: z.string().optional().describe("Search query to filter products by name or color"),
      category: z
        .enum(["Laptop", "Tablet", "Accessories", "Wearables", "Phone", "Audio"])
        .optional()
        .describe("Filter by product category"),
    },
  },
  handler: async ({
    search,
    category,
  }: {
    search?: string;
    category?: "Laptop" | "Tablet" | "Accessories" | "Wearables" | "Phone" | "Audio";
  }) => {
    try {
      let filteredRows = tableData.rows;

      if (search) {
        const query = search.toLowerCase();
        filteredRows = filteredRows.filter(
          (row) =>
            row.name.toLowerCase().includes(query) ||
            row.color.toLowerCase().includes(query)
        );
      }

      if (category) {
        filteredRows = filteredRows.filter((row) => row.category === category);
      }

      return {
        structuredContent: {
          search,
          category,
          tableData: {
            ...tableData,
            rows: filteredRows,
          },
        },
        content: [],
        isError: false,
      };
    } catch (error) {
      return {
        content: [{ type: "text" as const, text: `Error: ${error}` }],
        isError: true,
      };
    }
  },
};
