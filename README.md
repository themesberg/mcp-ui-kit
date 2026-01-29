# MCP UI Kit starter for MCP and ChatGPT apps

This is an open-source library of UI components, widgets and examples that you can use to build MCP and ChatGPT apps for the major AI providers like Claude, ChatGPT, Gemini, and more. The examples include basic text components, radio, checkbox selection prompts, charts, e-commerce examples, qr code generation, tables, and more.

The components are all based on the open-source UI component library called [Flowbite](https://github.com/themesberg/flowbite) and you can also update the `index.css` file to [update the theming](https://flowbite.com/docs/customize/theming/) from the default setting to minimal, mono, playful, enterprise or create your own.

## MCP Widgets

| Show basic text content based on user input |
|:---:|
| ![Show basic text content based on user input](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-basic-text.png) |

| Show a list of checkbox options for the user |
|:---:|
| ![Show a list of checkbox options for the user](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-checkbox.png) |

| Show a list of radio options for the user |
|:---:|
| ![Show a list of radio options for the user](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-radio.png) |

| Show a table with data that can be searched and filtered |
|:---:|
| ![Show a table with data that can be searched and filtered](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-data-table.png) |

| Show a list of e-commerce products that you can add to the cart |
|:---:|
| ![Show a list of e-commerce products that you can add to the cart](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-ecommerce.png) |

| Generate a qr code based on the user input |
|:---:|
| ![Generate a qr code based on the user input](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-qr-code.png) |

| Show chart data based on the API data |
|:---:|
| ![Show chart data based on the API data](https://flowbite.s3.us-east-1.amazonaws.com/mcp-ui-kit/mcp-chart.png) |

## Getting Started

### Prerequisites

- Node.js 24+
- HTTP tunnel such as [ngrok](https://ngrok.com/download)
- [Flowbite](https://flowbite.com/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [React](https://react.dev/) for React stuff

### Local Development

#### 1. Install

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

#### 2. Start your local server

Run the development server from the root directory:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This command starts an Express server on port 3000. This server packages:

- an MCP endpoint on `/mcp` (the app backend)
- a React application on Vite HMR dev server (the UI elements to be displayed in the host)

#### 3. Connect to ChatGPT

- ChatGPT requires connectors to be publicly accessible. To expose your server on the Internet, run:
```bash
ngrok http 3000
```
- In ChatGPT, navigate to **Settings → Connectors → Create** and add the forwarding URL provided by ngrok suffixed with `/mcp` (e.g. `https://3785c5ddc4b6.ngrok-free.app/mcp`)

## Resources

- [Apps SDK Documentation](https://developers.openai.com/apps-sdk)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Alpic Documentation](https://docs.alpic.ai/)
- [Flowbite UI components](https://flowbite.com/docs/getting-started/quickstart/)
- [Tailwind CSS](https://tailwindcss.com/)