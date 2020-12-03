import React from "react";
import Map from "../map";
import Query from "../Query";
import MARKERS_QUERY from "../../queries/markers/markers";
import "./explore.css";



const Explore = () => (

      <Query query={MARKERS_QUERY}>
        {({ data: { markers } }) => {
            return (
            <Map markers={markers} className="map-container" />)
        }}
      </Query> 
   
);

export default Explore;