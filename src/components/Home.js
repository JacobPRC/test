import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { FETCH_USERS } from "../queries/queries";
import UserItem from "./UserItem";

const Home = () => {
  const { loading, error, data, refetch } = useQuery(FETCH_USERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const renderUsers = () =>
    data.users.map((user) => {
      return <UserItem name={user.name} age={user.age} id={user.id} />;
    });

  refetch();

  return (
    <div className="ui middle aligned divided list">
      {renderUsers()}
      <div>
        <Link to="/user/new">
          <i className="plus icon" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
