import gql from "graphql-tag";

const AUDIOS_QUERY = gql`
  query Audios {
    Audios {
      Id
      Title
      description
      geometry
    }
  }
`;

export default AUDIOS_QUERY;