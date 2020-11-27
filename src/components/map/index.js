// import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Marker from "../Markers/index"
// import Popup from "../popup";
// import fetchFakeData from "../../api/fetchFakeData";

const styles = {
  width: "100vw",
  height: "80vh",
  // position: "absolute"
};

const Map = ({ markers }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  // const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    mapboxgl.accessToken =process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/roamopen/ckdvus6oi106319qoyiofra1q", // stylesheet location
        center: [-96.873785, 32.778766],
        zoom: 12.75
      });

       // add navigation control (zoom buttons) : todo remove before prod
    //   map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      map.on("load", () => {
        // const geometry = markers
        // geometry.forEach(el => {
        //   console.log(el.geometry)
        console.log(markers) 
        // });
        setMap(map);
        map.resize();
        // data source for new feature collection
        // map.addSource('video-points-data', {
        //   type: 'geojson',
        //   data: {
        //     type: 'FeatureCollection',
        //     features: [],
        //   },
        // });

        // fetch graphQl data
       

        // map.getSource('video-points-data').setData({
          
        // })
        // now add the layer, and reference the data source above by name
      // map.addLayer({
      //   id: "video-points-layer",
      //   source: "video-points-data",
      //   type: "symbol",
      //   layout: {
      //     "icon-image": "bakery-15", // this will put little croissants on our map
      //     "icon-padding": 0,
      //     "icon-allow-overlap": true
      //   }
      // });
    });

      // add popup when user clicks a point
      // map.on("click", "video-points-layer", e => {
      //   markers.forEach(el => {
      //     console.log(el.clip)
      //   })
      //   if (e.features.length) {
      //     const feature = e.features[0];
      //     // create popup node
      //     const popupNode = document.createElement("div");
      //     ReactDOM.render(<Popup feature={feature} />, popupNode);
      //     // set popup on map
      //     popUpRef.current
      //       .setLngLat(feature.geometry.coordinates)
      //       .setDOMContent(popupNode)
      //       .addTo(map);
      //   }
      // });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default Map;
