import gql from "graphql-tag";

const VIDEOS_QUERY = gql`
  query Videos {
    Videos {
      Id
      Title
      description
      geometry
    }
  }
`;

export default VIDEOS_QUERY;