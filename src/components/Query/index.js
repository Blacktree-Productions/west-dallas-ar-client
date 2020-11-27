import React from "react";
import { useQuery } from "@apollo/client";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });
  
// might want to break down specific loading and error points this is a very general component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;