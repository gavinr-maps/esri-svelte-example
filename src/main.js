import App from "./App.svelte";
// // MAP COMPONENTS
// import { defineCustomElements } from "@arcgis/map-components/dist/loader";

// Since we aren't passing any arguments to defineCustomElements, this will define all of the available components. You can also import just what you need: https://developers.arcgis.com/calcite-design-system/framework-examples/rollup/
// defineCustomElements();

// defineCustomElements(window, {
//   resourcesUrl: "https://jsdev.arcgis.com/map-components/4.30/builddate.txt",
// });

const app = new App({
  target: document.getElementById("app"),
  // target: document.body,
});

export default app;
