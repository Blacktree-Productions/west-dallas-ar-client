import React from "react";
import Map from "../map";
import Query from "../Query";
import MARKERS_QUERY from "../../queries/markers/markers";




const Explore = () => (
    <section>
      {/* <Map/>   */}
      <Query query={MARKERS_QUERY}>
        {({ data: { markers } }) => {
            return <Map markers={markers} />;
        }}
      </Query> 
    </section>   
);

export default Explore;