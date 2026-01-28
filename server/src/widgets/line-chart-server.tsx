import { z } from "zod";
import { chartData } from "../data/chart-data";

// Line Chart widget configuration
export const lineChartWidget = {
  name: "line-chart" as const,
  metadata: {
    description: "Line Chart Display",
  },
  toolConfig: {
    description: "Display a line chart based on a question.",
    inputSchema: {
      question: z.string().describe("The question or title for the chart"),
    },
  },
  handler: async ({ question }: { question: string }) => {
    try {
      return {
        structuredContent: { question, chartData },
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
