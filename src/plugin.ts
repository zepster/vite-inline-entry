import { type Plugin } from "vite";

const PLUGIN_NAME = "vite-plugin-inline-entry";

export interface PluginOptions {}

export const plugin = (_pluginOptions: PluginOptions): Plugin => {
  return {
    name: PLUGIN_NAME,
    transformIndexHtml() {
      return [
        {
          tag: "p",
          attrs: { "data-name": PLUGIN_NAME }
        }
      ];
    }
  };
};
