import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";

const GET_USER = gql`
  {
    user(login: "zerostatic") {
      name
      avatarUrl
      repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
        nodes {
          name
          url
        }
      }
    }
  }
`;

const List = styled.ul`
  text-align: left;
  list-style-type: none;
`;

const MemberDetails = () => (
  <Query query={GET_USER}>
    {({ data, loading, error }) => {
      if (error) {
        return <h1>Error: {error}</h1>;
      }
      if (loading || !data) {
        return <h1>Loading</h1>;
      }

      const repos = data.user.repositories.nodes;
      console.log("repos", repos);

      return (
        <List>
          {repos.map((repo, i) => (
            <li key={i}>
              <a href={repo.url}>{repo.name}</a>
            </li>
          ))}
        </List>
      );
    }}
  </Query>
);

export default MemberDetails;
