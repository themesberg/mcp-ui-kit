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

### 3. Create a connector with Ngrok

Using Ngrok you need to create an accessible connector:

```bash
ngrok http 3000
```

This will create a NGROK_FORWARDING_URL like this:

```
https://3785c5ddc4b6.ngrok-free.app/mcp
```

Note: make sure you add the `/mcp` folder to the URL when registering an app.

### 4. Connect to AI clients like ChatGPT, Gemini, and Claude

Check out the following guides to learn how to integrate with each AI client:

<details>
<summary>
  <img src="https://github.com/user-attachments/assets/4796fcfc-1ddf-4f68-82d0-030a2af62b17" width="16">
  <b>Install in ChatGPT</b>
</summary>

1. Navigate to **Settings > Connectors**
2. Scroll down and click on **Advanced Settings**
3. Enable **Developer mode**
4. Go back to the **Settings > Connectors** page, and click on **Create** in the Browser Connectors section
5. Add a custom connector with the MCP Server URL: `[NGROK_FORWARDING_URL]/mcp`
6. Click on **Create** to add the MCP server as a Connector
7. To use your newly created connector in the chat, click **+** then **More** and select it.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/7e9c6105-70c4-41a4-9f45-15dbea5b561b" width="16"><b> Install in Claude Web</b></summary>

1. Navigate to **Settings > Connectors**
2. Locate the **Connectors** section
3. Click **Add custom connector** at the bottom of the section
4. Add your connector's remote MCP server URL: `[NGROK_FORWARDING_URL]/mcp`
5. Finish configuring your connector and click **Add**
6. To enable connectors, use the **Search and tools** button on the lower left of the chat.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/351ed7b9-58cf-4017-86b3-b3e02bfd3237" width="16"> <b>Install in Gemini CLI</b></summary>

**Option 1 — Configure via the Gemini CLI**

Run the following command in your terminal:

```bash
gemini mcp add --transport http <server-name> "[NGROK_FORWARDING_URL]/mcp"
```

Use `/mcp` in the Gemini CLI terminal to view your recently added MCP server status and discovered tools.

**Option 2 — Configure via settings.json directly**

MCP servers used by Gemini CLI are configured in settings.json. More details [here](https://github.com/google-gemini/gemini-cli).

1. Open `~/.gemini/settings.json` (user) or `.gemini/settings.json` (project).
2. Add your server under `mcpServers`:

```json
{
  "mcpServers": {
    "<server-name>": {
      "httpUrl": "[NGROK_FORWARDING_URL]/mcp"
    }
  }
}
```

3. Restart the Gemini CLI (or start a new session), then run `/mcp` to confirm it's connected.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/51c50bc4-aa7b-483e-b2e4-03c1c866d164" width="16"> <b>Install in Cursor</b></summary>

Cursor stores MCP servers configuration through a `mcp.json` file. More details [here](https://docs.cursor.com/context/model-context-protocol).

1. Open (or create) your `mcp.json` file.
2. Add this MCP server right under `mcpServers`:

```json
{
  "mcpServers": {
    "<server-name>": {
      "type": "http",
      "url": "[NGROK_FORWARDING_URL]/mcp"
    }
  }
}
```

3. Once saved, Cursor Agent automatically uses this MCP server tools when relevant.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/26d49b63-b6f2-47b0-88d6-cdff1faae444" width="16"> <b>Install in VS Code</b></summary>

VS Code stores MCP servers configuration in a `mcp.json` file. More details [here](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

1. Open (or create) your `.vscode/mcp.json` file.
2. Add this MCP server under `servers`:

```json
{
  "servers": {
    "<server-name>": {
      "type": "http",
      "url": "[NGROK_FORWARDING_URL]/mcp"
    }
  }
}
```

3. Once you have added the MCP server, you can use its tools in the Chat view (⌃⌘I).

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/7e9c6105-70c4-41a4-9f45-15dbea5b561b" width="16"> <b>Install in Claude Code</b></summary>

MCP servers added to Claude Code are stored in `~/.claude.json`. More details [here](https://docs.anthropic.com/en/docs/claude-code/mcp).

To install this MCP server, run the following command in your terminal:

```bash
claude mcp add --transport http <server-name> "[NGROK_FORWARDING_URL]/mcp"
```

In the Claude Code terminal UI, use `/mcp` to view actively connected MCP servers. You should see your recently connected MCP server and can use it right away.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/9932918e-e636-4bf8-9483-38b2492ccdef" width="16"> <b>Install in Mistral AI</b></summary>

1. Open the side panel and expand **Intelligence > Connectors**
2. Click **+ Add Connector** on the right side of the page
3. In the MCP Connectors directory, click the **Custom MCP Connector** tab
4. Enter a Connector Name and the following Connector Server URL: `[NGROK_FORWARDING_URL]/mcp`
5. Finish configuring your connector and click **Create**
6. To use the connector, click the **Tools** button below the chat input and enable it in the Connectors section.

</details>

<details>
<summary><img src="https://github.com/user-attachments/assets/4796fcfc-1ddf-4f68-82d0-030a2af62b17" width="16"> <b>Install in Codex</b></summary>

MCP configuration for Codex is stored in `~/.codex/config.toml` and is shared between the CLI and the IDE extension.

**Option 1 — Configure via the Codex CLI**

Run the following command in your terminal:

```bash
codex mcp add <server-name> --url "[NGROK_FORWARDING_URL]/mcp"
```

**Option 2 — Modify the Codex config file directly**

1. Open `~/.codex/config.toml`.
2. Add the following snippet to your `config.toml` file:

```toml
[mcp_servers."<server-name>"]
url = "[NGROK_FORWARDING_URL]/mcp"
```

In the Codex terminal UI, use `/mcp` to view actively connected MCP servers. You should see your recently connected MCP server and can use it right away.

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
