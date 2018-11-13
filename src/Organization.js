import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CURRENT_USER = gql`
  {
    organization(login: "ibm") {
      members(first: 5) {
        nodes {
          name
          bio
        }
      }
    }
  }
`;

const renderMembers = members => (
  <ul>
    {members.map((member, i) => (
      <li>{member.name}</li>
    ))}
  </ul>
);
const Organization = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading, error }) => {
      if (error) {
        return <h1>Error: {error}</h1>;
      }
      if (loading || !data) {
        return <h1>Loading</h1>;
      }
      const members = data.organization.members.nodes;
      console.log("data", members);
      return <div>{renderMembers(members)}</div>;
    }}
  </Query>
);
export default Organization;
