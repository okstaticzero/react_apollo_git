import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import { Link } from "@reach/router";

const GET_CURRENT_USER = gql`
  query Members($name: String!) {
    organization(login: $name) {
      members(first: 5) {
        nodes {
          name
          bio
          login
        }
      }
    }
  }
`;

const List = styled.ul`
  text-align: left;
  list-style-type: none;
`;

const Members = ({ name }) => (
  <Query query={GET_CURRENT_USER} variables={{ name }}>
    {({ data, loading, error }) => {
      if (error) {
        return <h1>Error: {error}</h1>;
      }
      if (loading || !data) {
        return <h1>Loading</h1>;
      }
      const members = data.organization.members.nodes;
      return (
        <List>
          {members.map((member, i) => (
            <li key={member.login}>
              <Link to={`/member/${member.login}`}>{member.name}</Link>
            </li>
          ))}
        </List>
      );
    }}
  </Query>
);
export default Members;
