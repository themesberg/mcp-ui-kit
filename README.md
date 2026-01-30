# MCP UI components for MCP apps

This is an open-source library of UI components, widgets and examples that you can use to build MCP apps that can work as ChatGPT apps, Gemini apps, Claude apps, and any other MCP client like Cursor or Windsurf. The examples include basic text components, radio, checkbox selection prompts, charts, e-commerce examples, qr code generation, tables, and more.

The components are all based on the open-source [Flowbite](https://github.com/themesberg/flowbite) UI component library called using Tailwind CSS classes and you can also update the `index.css` file to [update the theming](https://flowbite.com/docs/customize/theming/) from the default setting to minimal, mono, playful, enterprise or create your own.

## MCP UI components

This is the full list of open-source components and widgets available:

- Basic text
- Radio group
- Checkbox group
- Line chart
- E-commerce products
- QR code
- Table data

## Getting Started

To start developing locally, you need to have Node and Ngrok installed.

### Prerequisites

- Node.js 24+
- HTTP tunnel such as [ngrok](https://ngrok.com/download)

### Local Development

Getting started locally is as easy as running the install command with your favourite package manager.

1. Install the local packages:

```bash
npm install
```

You can also use bun, pnpm or yarn.

2. Start a local server by running the following command:

```bash
npm run dev
```

This command starts an Express server on port 3000. This server packages:

- an MCP endpoint on `/mcp` (the app backend)
- a React application on Vite HMR dev server (the UI elements to be displayed in the host)
- a set of widget examples built with Flowbite UI components

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