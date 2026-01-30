import { z } from "zod";
import { websiteTrafficData, type WebsiteKey, type DateRangeKey } from "../data/chart-data.js";

// Date range labels for display
const dateRangeLabels: Record<DateRangeKey, string> = {
  "last-24-hours": "Last 24 hours",
  "last-7-days": "Last 7 days",
  "last-30-days": "Last 30 days",
  "last-90-days": "Last 90 days",
  "last-year": "Last year",
};

// Line Chart widget configuration
export const lineChartWidget = {
  name: "line-chart" as const,
  metadata: {
    description: "Line Chart Display",
  },
  toolConfig: {
    description: "Display website traffic statistics for a selected date range.",
    inputSchema: {
      website: z
        .enum(["flowbite.com", "themesberg.com"])
        .describe("Select a website to view traffic statistics"),
      dateRange: z
        .enum(["last-24-hours", "last-7-days", "last-30-days", "last-90-days", "last-year"])
        .describe("Select a date range for the statistics"),
    },
  },
  handler: async ({ website, dateRange }: { website: WebsiteKey; dateRange: DateRangeKey }) => {
    try {
      const chartData = websiteTrafficData[website][dateRange];
      const dateRangeLabel = dateRangeLabels[dateRange];
      return {
        structuredContent: { website, dateRange, dateRangeLabel, chartData },
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
