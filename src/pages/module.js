import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import ModuleDetail from "../components/module-detail";

const MODULE_QUERY = gql`
  query Module($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = ({ moduleId, trackId }) => {
  const { loading, error, data } = useQuery(MODULE_QUERY, {
    variables: {
      moduleId,
      trackId,
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} data={data} loading={loading}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
