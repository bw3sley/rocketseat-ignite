import type { Preview } from "@storybook/react";

import { create } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      theme: create({
        base: "dark",
        fontBase: "Roboto, sans-serif"
      })
    }
  },

  tags: ["autodocs"]
};

export default preview;
