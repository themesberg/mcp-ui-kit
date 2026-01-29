import { z } from "zod";
import { websiteTrafficData, type WebsiteKey } from "../data/chart-data";

// Line Chart widget configuration
export const lineChartWidget = {
  name: "line-chart" as const,
  metadata: {
    description: "Line Chart Display",
  },
  toolConfig: {
    description: "Display website traffic statistics for the last 30 days.",
    inputSchema: {
      website: z
        .enum(["flowbite.com", "themesberg.com"])
        .describe("Select a website to view traffic statistics"),
    },
  },
  handler: async ({ website }: { website: WebsiteKey }) => {
    try {
      const chartData = websiteTrafficData[website];
      return {
        structuredContent: { website, chartData },
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
