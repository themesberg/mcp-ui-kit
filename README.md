# MCP UI components

### Build apps for ChatGPT, Gemini, Claude and any MCP clients (Cursor, Windsurf)

This is an open-source library of UI components, widgets and examples that you can use to build MCP apps that can work as ChatGPT apps, Gemini apps, Claude apps, and any other MCP client like Cursor or Windsurf. The examples include basic text components, radio, checkbox selection prompts, charts, e-commerce examples, qr code generation, tables, and more.

The components are based on the [Flowbite UI framework](https://github.com/themesberg/flowbite) and the [SkyBridge framework](https://github.com/alpic-ai/skybridge) for building MCP apps.

https://github.com/user-attachments/assets/19626e5d-0181-4a8f-98aa-fb51ac2adbc7

- [Live demo](https://mcp-ui-kit-c89068fd.alpic.live/try)

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

### 1. Install the local packages:

```bash
npm install
```

You can also use bun, pnpm or yarn.

### 2. Start a local server by running the following command:

```bash
npm run dev
```

This command starts an Express server on port 3000. This server packages:

- an MCP endpoint on `/mcp` (the app backend)
- a React application on Vite HMR dev server (the UI elements to be displayed in the host)
- a set of widget examples built with Flowbite UI components

### 3. Connect to AI clients like ChatGPT, Gemini, and Claude

Using Ngrok we need to create an accessible connector:

```bash
ngrok http 3000
```

This will create a NGROK_FORWARDING_URL like this:

```
https://3785c5ddc4b6.ngrok-free.app/mcp
```

Note: make sure you add the `/mcp` folder to the URL when registering an app.

Check out the following guides to learn how to integrate with each AI client:

<details>
<summary><b>Install in ChatGPT</b></summary>
<ol>
<li>Navigate to Settings > Connectors</li>
<li>Scroll down and click on Advanced Settings</li>
<li>Enable Developer mode</li>
<li>Go back to the Settings > Connectors page, and click on Create in the Browser Connectors section</li>
<li>Add a custom connector with the MCP Server URL: [NGROK_FORWARDING_URL]/mcp</li>
<li>Click on Create to add the MCP server as a Connector</li>
<li>To use your newly created connector in the chat, click + then More and select it.</li>
</details>

## Theming

[Flowbite theming](https://flowbite.com/docs/customize/theming/) allows you to update the appearance of the UI components by updating the `index.css` styles.

Here are a couple of predefined styles (default, minimal, enterprise, playful, and mono) from Flowbite:

```css
/* choose one of the following */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import "flowbite/src/themes/default";

/* MINIMAL THEME
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/minimal";
*/

/* ENTERPRISE THEME
@import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/enterprise";
*/

/* PLAYFUL THEME
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap');
@import "flowbite/src/themes/playful";
*/

/* MONO THEME
@import "flowbite/src/themes/mono";
*/
```

## Resources

- [Apps SDK Documentation](https://developers.openai.com/apps-sdk)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Alpic Documentation](https://docs.alpic.ai/)
- [Flowbite UI components](https://flowbite.com/docs/getting-started/quickstart/)
- [Tailwind CSS](https://tailwindcss.com/)
