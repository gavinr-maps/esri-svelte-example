// ArcGIS API config
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./arcgis-assets";

// Svelte entry point
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
