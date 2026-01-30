import { z } from "zod";
import { products } from "../data/products.js";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

// E-commerce Carousel widget configuration
export const ecomCarouselWidget = {
  name: "e-commerce" as const,
  metadata: {
    description: "E-commerce Product Carousel",
    _meta: {
      ui: {
        csp: {
          resourceDomains: ["https://fakestoreapi.com"],
        },
      },
    },
  },
  toolConfig: {
    description: "Display a list of products from the store.",
    inputSchema: {
      category: z
        .enum(["electronics", "jewelery", "men's clothing", "women's clothing"])
        .optional()
        .describe("Filter by product category"),
      maxPrice: z.number().optional().describe("Maximum price filter"),
    },
  },
  handler: ({
    category,
    maxPrice,
  }: {
    category?: "electronics" | "jewelery" | "men's clothing" | "women's clothing";
    maxPrice?: number;
  }) => {
    try {
      const filtered: Product[] = [];

      for (const product of products) {
        if (category && product.category !== category) {
          continue;
        }
        if (maxPrice !== undefined && product.price > maxPrice) {
          continue;
        }
        filtered.push(product);
      }

      return {
        structuredContent: { products: filtered },
        content: [{ type: "text" as const, text: JSON.stringify(filtered) }],
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
