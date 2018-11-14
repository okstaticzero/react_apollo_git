import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import { Button } from "rebass";
const GET_CURRENT_USER = gql`
  {
    organization(login: "reactjs") {
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

const Members = ({ onSelectMember }) => (
  <Query query={GET_CURRENT_USER}>
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
            <li>
              <Button onClick={() => onSelectMember(member.login)}>
                {member.name}
              </Button>
            </li>
          ))}
        </List>
      );
    }}
  </Query>
);
export default Members;
