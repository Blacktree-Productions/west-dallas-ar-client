import gql from "graphql-tag";

const MARKERS_QUERY = gql`
    query Markers {
        markers {
        id
        Title
        description
        geometry
        language {
            id
            Type
          }
          clip {
            id
            name
            url
          }
        }
    }
`;

export default MARKERS_QUERY;





