<script>
  import Map from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";
  /**
   * This includes the CSS from the ArcGIS API for JavaScript
   * You can alternatively do this in the style tag below:
   *
   * ```
   * @import "@arcgis/core/assets/esri/themes/light/main.css";
   * ```
   *
   * ... Vite includes it in the same way - so use either way you prefer.
   *
   * Also note: you can use the "light" or "dark" theme here. See:
   * https://developers.arcgis.com/javascript/latest/styling/
   */
  import "@arcgis/core/assets/esri/themes/light/main.css";
  export let centerText;
  // Function that gets called when the element is created.
  // https://svelte.dev/tutorial/actions
  // https://svelte.school/tutorials/introduction-to-actions
  const createMap = (domNode) => {
    // Create the map
    const map = new Map({
      basemap: "streets-vector",
    });
    // Create the mapView from the map
    const view = new MapView({
      container: domNode,
      map: map,
      zoom: 14,
      center: [-90.188, 38.625], // longitude, latitude
    });
    // Use the watch functionality of the JavaScript API (view.watch) to call a
    // function every time the extent changes. Every time it does, update the
    // "centerText" variable - Svelte takes care of updating the UI based
    // on this variable assignment
    // (Reactivity!) https://svelte.dev/tutorial/reactive-assignments
    view.watch("center", (center) => {
      const { latitude, longitude } = center;
      centerText = `Lat: ${latitude.toFixed(3)} | Lon: ${longitude.toFixed(3)}`;
    });
  };
</script>

<h1>Esri Svelte Example</h1>
<p>
  An example
  <a href="https://svelte.dev/">Svelte</a>
  application that shows how use the ArcGIS API for JavaScript to load a map. Check
  out the
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

<style>
  /* Alternative to the CSS import in the script tag above: */
  /* @import "@arcgis/core/assets/esri/themes/light/main.css"; */
  .view {
    height: 400px;
    width: 600px;
  }
</style>
