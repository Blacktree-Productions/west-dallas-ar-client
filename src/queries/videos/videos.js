import gql from "graphql-tag";

const VIDEOS_QUERY = gql`
  query Videos {
    videos {
      id
      Title
      description
      geometry
    }
  }
`;

export default VIDEOS_QUERY;