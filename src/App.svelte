<script>
  import { loadModules } from "esri-loader";
  export let title;
  export let centerText;

  let viewDiv; // this is set using "bind:this" down below in the HTML.
  // For more info see:https://svelte.dev/tutorial/bind-this

  loadModules(["esri/Map", "esri/views/MapView"], { css: true })
    .then(([Map, MapView]) => {
      // then we load a web map from an id
      const map = new Map({
        basemap: "streets"
      });

      const view = new MapView({
        container: viewDiv,
        map: map,
        zoom: 8,
        center: [-90, 38] // longitude, latitude
      });

      view.watch("center", center => {
        const { latitude, longitude } = center;
        centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(
          2
        )}`;
      });
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });
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
<div class="view" bind:this={viewDiv} />

{#if centerText}
  <p>{centerText}</p>
{/if}
