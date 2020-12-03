import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Marker from "../Markers/index";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import "./map.css";

// import Popup from "../popup";
// import fetchFakeData from "../../api/fetchFakeData";

// const styles = {
//   width: "100vw",
//   height: "80vh",

// };

const Map = ({ markers }) => {
  // const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  // const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  useEffect(() => {
    mapboxgl.accessToken =process.env.REACT_APP_MAPBOX_KEY;
    // const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/roamopen/ckdvus6oi106319qoyiofra1q", // stylesheet location
        center: [-96.873785, 32.778766],
        zoom: 12.75
      });

      map.on("load", () => {

        markers.forEach( el => {
          const markerNode = document.createElement('div');
          ReactDOM.render(<Marker id={el.id} description={el.description} video={el.clip.url}/>, markerNode);

          new mapboxgl.Marker(markerNode)
            .setLngLat(el.geometry.coordinates)
            .addTo(map);

        });

        map.resize();

    });

    // clean up on unmount 
    return () => map.remove();
    // if (!map) initializeMap({ setMap, mapContainer });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [value, setValue] = React.useState('english');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="map" ref={mapContainer}> 
      <Box
        css={{ bgcolor: 'Bisque', opacity: .95, padding: 10  }}
        color="grey"
        position="absolute"
        top={10}
        right={10}
        zIndex="tooltip"
      >
        <FormControl component="fieldset" >
          <FormLabel component="legend">Language</FormLabel>
          <RadioGroup aria-label="language" name="language" value={value} onChange={handleChange}>
            <FormControlLabel value="english"  control={<Radio />} label="English" />
            <FormControlLabel value="spanish"  control={<Radio />} label="Spanish" />
          </RadioGroup>
        </FormControl>  
      </Box>

    </div>)
};

export default Map;
