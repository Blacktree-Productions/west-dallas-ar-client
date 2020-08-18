import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Popup from "./popup";
import fetchFakeData from "../api/fetchFakeData";

const styles = {
  width: "100vw",
  height: "100vh",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    mapboxgl.accessToken =process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-96.90609, 32.7796],
        zoom: 14
      });

       // add navigation control (zoom buttons) : todo remove before prod
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      map.on("load", () => {
        setMap(map);
        map.resize();
        // data source for new feature collection
        map.addSource("marker-data", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });
        // add layer, and reference data above by name
        map.addLayer({
          id: "marker-data-layer",
          source: "marker-data",
          type: "symbol",
          layout: {
            // add icon from maki 
            "icon-image": "globe-15",
            "icon-padding": 0,
            "icon-allow-overlap": true
          }
        });
      });

      map.on("moveend", async () => {
        // get new center coordinates
        const { lng, lat } = map.getCenter();
        // fetch new data 
        const results = await fetchFakeData({ longitude: lng, latitude: lat });
        // update "marker-data" source with new data
        // all layers that consume the "marker-data" data source will be updated automatically
        map.getSource("marker-data").setData(results);
      });

      
      // change cursor to pointer when user hovers over a clickable feature
      map.on("mouseenter", "marker-data-layer", e => {
        if (e.features.length) {
          map.getCanvas().style.cursor = "pointer";
        }
      });
  
      // reset cursor to default when user is no longer hovering over a clickable feature
      map.on("mouseleave", "marker-data-layer", () => {
        map.getCanvas().style.cursor = "";
      });

      // add popup when user clicks a point
      map.on("click", "marker-data-layer", e => {
        if (e.features.length) {
          const feature = e.features[0];
          // create popup node
          const popupNode = document.createElement("div");
          ReactDOM.render(<Popup feature={feature} />, popupNode);
          // set popup on map
          popUpRef.current
            .setLngLat(feature.geometry.coordinates)
            .setDOMContent(popupNode)
            .addTo(map);
        }
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
