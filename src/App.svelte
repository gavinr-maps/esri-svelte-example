<script>
	import { onMount } from "svelte";

	import Map from '@arcgis/core/Map';
	import MapView from '@arcgis/core/views/MapView';
	
	export let name;
	export let centerText;

	let viewDiv; // this is set using "bind:this" down below in the HTML.
	// For more info see:https://svelte.dev/tutorial/bind-this
	
	onMount(async () => {

    // Create the map
    const map = new Map({
      basemap: "streets"
    });

    // Create the mapView from the map
    const view = new MapView({
      container: viewDiv,
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
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<div class="view" bind:this={viewDiv} />

{#if centerText}
  <p>{centerText}</p>
{/if}

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.view {
    height: 400px;
    width: 400px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>