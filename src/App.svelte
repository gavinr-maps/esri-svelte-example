<script>
  import "@arcgis/core/assets/esri/themes/light/main.css";
  import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
  defineMapElements();
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
  let mapView;

  // This function is called when the "arcgisViewReadyChange" event is emitted
  const watchMap = (event) => {
    mapView = event.target.view;

    // Get the initial center of the map and set the "centerText" variable
    const { latitude, longitude } = mapView.center;
    centerText = `Lat: ${latitude.toFixed(3)} | Lon: ${longitude.toFixed(3)}`;

    // Use the watch functionality of the JavaScript API (view.watch) to call a
    // function every time the extent changes. Every time it does, update the
    // "centerText" variable - Svelte takes care of updating the UI based
    // on this variable assignment
    // (Reactivity!) https://svelte.dev/tutorial/reactive-assignments
    mapView.watch("center", (center) => {
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
  <a href="https://github.com/gavinr-maps/esri-svelte-example">code</a>
  for more info!
</p>

<!-- Use the Map Component from the @arcgis/map-components package: https://www.npmjs.com/package/@arcgis/map-components -->
<!-- Use the onarcgisViewReadyChange event to get the view object from the map component. -->
<div class="view">
  <arcgis-map
    on:arcgisViewReadyChange={watchMap}
    basemap="streets-vector"
    zoom={14}
    center={[-90.188, 38.625]}
  ></arcgis-map>
</div>

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
