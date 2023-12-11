<script>
  import "@arcgis/map-components/dist/components/arcgis-map";

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

  let zoom = 14;
  let arcgisMap;

  let center = [-90.188, 38.625];

  $: centerText = center
    ? `Lat: ${center[1].toFixed(3)} | Lon: ${center[0].toFixed(3)}`
    : "";

  $: if (arcgisMap) {
    arcgisMap.addEventListener("viewReady", (evt) => {
      // when the view is ready, we can do use it:
      const view = evt.target.view;

      view.watch("center", (c) => {
        center = [c.longitude, c.latitude];
      });
    });
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
{/if}

<style>
  /* Alternative to the CSS import in the script tag above: */
  /* @import "@arcgis/core/assets/esri/themes/light/main.css"; */

  .mapWrapper {
    height: 400px;
    width: 600px;
  }
</style>
