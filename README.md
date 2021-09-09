# Esri Svelte Example

An example [Svelte](https://svelte.dev/) application that shows how use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) to load a map.

[View the live app here](https://esri-svelte-example.gavinr.com/).

## Get Started

To get started, follow these instructions.

1. Run the [Vite init workflow](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) choosing the Svelte template:

    ```bash
    npm init vite@latest esri-svelte-project --template svelte
    ```

    or if you prefer TypeScript:

    ```bash
    npm init vite@latest esri-svelte-project --template svelte-ts
    ```

2. Then install the dependencies and run:

    ```bash
    cd esri-svelte-project
    npm install
    npm install @arcgis/core --save-dev
    npm run dev
    ```

3. Copy contents of [`App.svelte` in this repository](https://github.com/gavinr/esri-svelte-example/blob/master/src/App.svelte) into your `App.svelte`.

## Links

- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
- [Svelte with the ArcGIS API for JavaScript](https://odoe.net/blog/svelte-with-the-arcgis-api-for-javascript/)
- [Esri Svelte Basemaps Example](https://github.com/jwasilgeo/esri-svelte-basemaps-example)
