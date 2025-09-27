import type { Preview } from "@storybook/nextjs";

import "tailwindcss/tailwind.css";
import "../src/app/globals.css";
import "../src/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
