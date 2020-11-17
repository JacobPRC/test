import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { DELETE_SQUARE } from "../queries/mutations";

export default ({ name, description, balance, id, goal, mainBal }) => {
  const [deleteSquare] = useMutation(DELETE_SQUARE);
  let params = useParams();
  let history = useHistory();

  const removeSquare = () => {
    deleteSquare({ variables: { id, userId: params.id } });
    history.push(`/user/${params.id}`);
  };

  const percentSaved = (balance / goal) * 100;
  const message =
    percentSaved === 0
      ? "Add some money to start your savings!"
      : percentSaved < 50
      ? "You're doing great! Keep up the good work!"
      : percentSaved > 50 && percentSaved <= 85
      ? "Awesome! You're more than half way there!"
      : percentSaved >= 86 && percentSaved <= 99
      ? "You're so close!!"
      : percentSaved === 100
      ? "Great job! You've met your goal!"
      : "Wow, over achieve much?";

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{name}</div>
        <i>
          <div className="header">{description}</div>
        </i>
        <div className="right floated content">
          <i
            onClick={() => removeSquare()}
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            className="trash alternate icon"
          ></i>
          <Link
            to={{
              pathname: `/user/${params.id}/squares/${id}/edit`,
              state: { name, description, goal, id },
            }}
          >
            <i style={{ fontSize: "1.5rem" }} className="edit icon"></i>
          </Link>
        </div>
        <div className="description">
          <p>Balance: ${balance}</p>
          <p>Goal: ${goal}</p>
          <p>You've saved {percentSaved}% of your goal!</p>
          <i>
            <p>{message}</p>
          </i>
          <Link
            to={{
              pathname: `/user/${params.id}/squares/${id}/deposit`,
              state: { mainBal, squareId: id },
            }}
          >
            <i className="plus icon" /> Add to Square
          </Link>
          <Link
            to={{
              pathname: `/user/${params.id}/squares/${id}/withdraw`,
              state: { withdraw: true, squareBal: balance, squareId: id },
            }}
          >
            <p>
              <i className="minus icon" /> Withdraw
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
