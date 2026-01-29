import { z } from "zod";

// Basic Answer widget configuration
export const basicTextWidget = {
  name: "basic-text" as const,
  metadata: {
    description: "Basic Text",
  },
  toolConfig: {
    description: "Show a text message based on a question.",
    inputSchema: {
      question: z.string().describe("The user's question."),
    },
  },
  handler: async () => {
    try {
      const answer = "Hello, world!";
      return {
        structuredContent: { answer },
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