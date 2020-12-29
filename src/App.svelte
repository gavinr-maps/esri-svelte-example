<script>
  import { loadModules } from "esri-loader";

  export let title;
  export let centerText;

  // Function that gets called when the element is created.
  // https://svelte.dev/tutorial/actions
  // https://svelte.school/tutorials/introduction-to-actions
  const createMap = async (domNode) => {
    // Use esri-loader to load the EsriMap and MapView modules
    // // https://github.com/Esri/esri-loader#usage
    const esriLoaderOptions = { css: true };
    const [EsriMap, MapView] = await loadModules(
      ["esri/Map", "esri/views/MapView"],
      esriLoaderOptions
    );

    // Create the map
    const map = new EsriMap({
      basemap: "streets"
    });

    // Create the mapView from the map
    const view = new MapView({
      container: domNode,
      map: map,
      zoom: 8,
      center: [-90, 38] // longitude, latitude
    });

    // Use the watch functionality of the JavaScript API (view.watch) to call a
    // function every time the extent changes. Every time it does, update the
    // "centerText" variable - Svelte takes care of updating the UI based
    // on this variable assignment
    // (Reactivity!) https://svelte.dev/tutorial/reactive-assignments
    view.watch("center", center => {
      const { latitude, longitude } = center;
      centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
    });
  };
</script>

<style>
  h1 {
    color: purple;
  }
  .view {
    height: 400px;
    width: 400px;
  }
</style>

<h1>{title}</h1>
<p>
  An example
  <a href="https://svelte.dev/">Svelte</a>
  application that shows how to use esri-loader to load a map. Check out the
  <a href="https://github.com/gavinr/esri-svelte-example">code</a>
  for more info!
</p>

<!-- use:createMap calls the "createMap" function (defined above) when the  -->
<!-- element is created. -->
<!-- See the "createMap" function def above for more info. -->
<div class="view" use:createMap />

{#if centerText}
  <p>{centerText}</p>
{/if}
