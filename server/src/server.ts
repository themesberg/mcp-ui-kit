import { McpServer } from "skybridge/server";
import { magic8Ball } from "./widgets-register";

const server = new McpServer(
  {
    name: "mcp-ui-kit",
    version: "0.0.1",
  },
  { capabilities: {} }
).registerWidget(
  magic8Ball.name,
  magic8Ball.metadata,
  magic8Ball.toolConfig,
  magic8Ball.handler
);
// Chain more widgets here: .registerWidget(anotherWidget.name, ...)

export default server;
export type AppType = typeof server;
