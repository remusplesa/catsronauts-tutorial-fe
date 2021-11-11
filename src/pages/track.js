import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      author {
        name
        id
        photo
      }
      description
      modules {
        title
        id
        length
      }
      id
      thumbnail
      length
      modulesCount
      numberOfViews
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult error={error} data={data} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
