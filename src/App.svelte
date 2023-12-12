<script>
  import "@arcgis/map-components/dist/components/arcgis-map";
  import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";

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

  // Instance of the ArcGIS Map Component
  // https://next.sites.afd.arcgis.com/javascript/latest/components/storybook/?path=/docs/map-components_component-reference-map--docs
  let arcgisMap;

  // Instance of Esri MapView:
  // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
  let view;

  let zoom = 14;
  let center = [-90.188, 38.625];

  $: centerText = center
    ? `Lat: ${center[1].toFixed(3)} | Lon: ${center[0].toFixed(3)}`
    : "";

  $: if (arcgisMap) {
    arcgisMap.addEventListener("viewReady", (evt) => {
      // when the view is ready, we set the svelte variable
      // so other parts of the component can use it::
      view = evt.target.view;
    });
  }

  $: if (view) {
    // note: in a production application you should use the "handle" on the
    // next line and unsubscribe.
    reactiveUtils.watch(
      () => view?.center,
      (c) => {
        center = [c.longitude, c.latitude];
      }
    );
  }
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
<div class="mapWrapper">
  <arcgis-map basemap="streets-vector" {zoom} {center} bind:this={arcgisMap} />
</div>

{#if centerText}
  <p>{centerText}</p>
  <p><label>Zoom: <input disabled={true} value={zoom} /></label></p>
  <p>
    <button
      on:click={() => {
        zoom = 1;
      }}>Zoom to level 1</button
    >
  </p>
{/if}

<style>
  /* Alternative to the CSS import in the script tag above: */
  /* @import "@arcgis/core/assets/esri/themes/light/main.css"; */

  .mapWrapper {
    height: 400px;
    width: 600px;
  }
</style>
