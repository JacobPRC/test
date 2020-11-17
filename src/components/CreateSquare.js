import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { CREATE_SQUARE, EDIT_SQUARE } from "../queries/mutations";

export default () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [createSquare] = useMutation(CREATE_SQUARE);
  const [editSquare] = useMutation(EDIT_SQUARE);
  let history = useHistory();
  let params = useParams();
  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { name, description, goal } = location.state;
      setName(name);
      setGoal(goal);
      setDescription(description);
    }
  }, []);

  const submitSquare = () => {
    createSquare({ variables: { name, goal, description, userId: params.id } });
    history.goBack();
  };

  const submitSquareEdit = () => {
    editSquare({
      variables: { name, goal, description, id: location.state.id },
    });
    history.goBack();
  };

  const locationCheck = () =>
    location.state ? submitSquareEdit() : submitSquare();

  return (
    <div className="ui centered card">
      <form className="ui form segment">
        <p>Let's make a square!</p>
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's it called?"
              name="name"
              type="text"
            />
          </div>
          <div className="field">
            <label>Goal</label>
            <input
              placeholder="How much you wanna save?"
              name="goal"
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            placeholder="Tell us what that $$ will be used for..."
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div
          onClick={() => locationCheck()}
          className="ui primary submit button"
        >
          Submit
        </div>
        <div
          onClick={() => history.goBack()}
          className="ui negative submit button"
        >
          Exit
        </div>
      </form>
    </div>
  );
};
