import { McpServer } from "skybridge/server";
import { basicAnswerWidget } from "./widgets/basic-answer-server";
import { checkboxOptionsWidget } from "./widgets/checkbox-options-server";
import { ecomCarouselWidget } from "./widgets/e-commerce-server";
import { lineChartWidget } from "./widgets/line-chart-server";
import { radioOptionsWidget } from "./widgets/radio-options-server";

const server = new McpServer(
  {
    name: "mcp-ui-kit",
    version: "0.0.1",
  },
  { capabilities: {} }
)
  .registerWidget(
    basicAnswerWidget.name,
    basicAnswerWidget.metadata,
    basicAnswerWidget.toolConfig,
    basicAnswerWidget.handler
  )
  .registerWidget(
    radioOptionsWidget.name,
    radioOptionsWidget.metadata,
    radioOptionsWidget.toolConfig,
    radioOptionsWidget.handler
  )
  .registerWidget(
    checkboxOptionsWidget.name,
    checkboxOptionsWidget.metadata,
    checkboxOptionsWidget.toolConfig,
    checkboxOptionsWidget.handler
  )
  .registerWidget(
    ecomCarouselWidget.name,
    ecomCarouselWidget.metadata,
    ecomCarouselWidget.toolConfig,
    ecomCarouselWidget.handler
  )
  .registerWidget(
    lineChartWidget.name,
    lineChartWidget.metadata,
    lineChartWidget.toolConfig,
    lineChartWidget.handler
  );

export default server;
export type AppType = typeof server;
