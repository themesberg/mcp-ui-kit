// Flowbite Pro CTA widget configuration
export const flowbiteCtaWidget = {
  name: "more-components" as const,
  metadata: {
    description: "Flowbite Pro CTA",
  },
  toolConfig: {
    description: "Check out more components that you can use with MCP and ChatGPT apps with Flowbite Pro.",
    inputSchema: {},
  },
  handler: async () => {
    try {
      return {
        structuredContent: {
          link: "https://flowbite.com/pro/#pricing",
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
