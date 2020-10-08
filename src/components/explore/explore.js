import React from "react";
import Map from "../map";
import Query from "../Query";
import VIDEOS_QUERY from "../../queries/videos/videos";




const Explore = () => (
    <section>
      {/* <Map/>   */}
      <Query query={VIDEOS_QUERY}>
        {({ data: { videos } }) => {
            return <Map videos={videos} />;
        }}
      </Query> 
    </section>   
);

export default Explore;