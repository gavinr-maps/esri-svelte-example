<script>
  import { loadModules } from "esri-loader";
  export let name;
  export let centerText;

  loadModules(["esri/Map", "esri/views/MapView"], { css: true })
    .then(([Map, MapView]) => {
      // then we load a web map from an id
      const map = new Map({
        basemap: "streets"
      });
      const view = new MapView({
        container: "viewDiv",
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
  #viewDiv {
    height: 400px;
    width: 400px;
  }
</style>

<h1>Hello {name}!</h1>
<div id="viewDiv" />
<p>{centerText}</p>
