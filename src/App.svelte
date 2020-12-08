<script>
  import { onMount } from "svelte";

  import ArcGISMap from "@arcgis/core/Map";
  import MapView from "@arcgis/core/views/MapView";

  export let title;
  export let centerText;

  let viewDiv; // this is set using "bind:this" down below in the HTML.
  // For more info see:https://svelte.dev/tutorial/bind-this

  // Svelte - onMount - https://svelte.dev/tutorial/onmount
  onMount(async () => {
    // Create the map
    const map = new ArcGISMap({
      basemap: "gray-vector",
    });

    // Create the mapView from the map
    const view = new MapView({
      container: viewDiv,
      map: map,
      zoom: 8,
      center: [-90, 38], // longitude, latitude
    });

    // Use the watch functionality of the JavaScript API (view.watch) to call a
    // function every time the extent changes. Every time it does, update the
    // "centerText" variable - Svelte takes care of updating the UI based
    // on this variable assignment
    // (Reactivity!) https://svelte.dev/tutorial/reactive-assignments
    view.watch("center", (center) => {
      const { latitude, longitude } = center;
      centerText = `Lat: ${latitude.toFixed(2)} | Lon: ${longitude.toFixed(2)}`;
    });
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
