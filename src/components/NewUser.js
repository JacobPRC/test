import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../queries/mutations";

export default () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  let history = useHistory();
  const submitNewUser = () => {
    if (age > 0 && name.length >= 2) {
      createUser({ variables: { name, age } });
      return history.goBack();
    }

    alert("Please enter name and age");
  };

  return (
    <div>
      <div class="ui form">
        <div class="fields">
          <div class="field">
            <label>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="field">
            <label>Age</label>
            <input
              onChange={(e) => setAge(e.target.valueAsNumber)}
              value={age}
              type="number"
              placeholder="Age"
            />
          </div>
        </div>
        <button onClick={() => submitNewUser()} className="ui button primary">
          Submit
        </button>
        <button onClick={() => history.goBack()} className="ui button negative">
          Go Back
        </button>
      </div>
    </div>
  );
};
