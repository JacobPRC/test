import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { DELETE_USER } from "../queries/mutations";

export default ({ name, age, id }) => {
  const [deleteUser] = useMutation(DELETE_USER);
  let history = useHistory();

  const removeUser = () => {
    deleteUser({ variables: { id } });
    history.push("/");
  };

  return (
    <div className="item" key={id}>
      <div className="right floated content">
        <Link to={`/user/${id}`}>
          <div className="ui button">View Account</div>
        </Link>
        <div onClick={() => removeUser()} className="ui button negative">
          Delete User
        </div>
      </div>
      <div className="ui avatar image">
        <i className="user outline circle icon" />
      </div>
      <div className="content">
        {name} {age}
      </div>
    </div>
  );
};
