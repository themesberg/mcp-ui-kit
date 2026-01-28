import { z } from "zod";

// Magic 8 Ball widget configuration
export const magic8Ball = {
  name: "magic-8-ball" as const,
  metadata: {
    description: "Magic 8 Ball",
  },
  toolConfig: {
    description: "For fortune-telling or seeking advice.",
    inputSchema: {
      question: z.string().describe("The user question."),
    },
  },
  handler: async ({ question }: { question: string }) => {
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

// Add more widget configurations here
// export const anotherWidget = { ... };
