import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import { FETCH_USER } from "../queries/queries";
import Square from "./Square";

export default () => {
  let params = useParams();
  const { id } = params;

  const { loading, error, data, refetch } = useQuery(FETCH_USER, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const { balance, name, squares } = data.user;

  const renderSquares = () => {
    if (squares.length < 1)
      return (
        <h3 style={{ textAlign: "center" }}>
          Looks like you don't have any squares. Wanna make one?
        </h3>
      );
    return squares.map((sq) => {
      const { balance, description, goal, id, name } = sq;
      return (
        <Square
          balance={balance}
          description={description}
          goal={goal}
          id={id}
          name={name}
          mainBal={data.user.balance - squareBalance}
        />
      );
    });
  };

  let squareBalance = 0;

  const getSqBalance = (bal) =>
    squares.map((sq) => {
      squareBalance += sq.balance;
      return squareBalance;
    });

  getSqBalance(squareBalance);

  refetch();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {name}'s Total Balance: {balance}
      </h1>
      <div className="ui centered card">
        <div className="content">
          <div className="header">{name}'s Main Account Account</div>
          <div className="description">
            <p>Balance: ${balance - squareBalance}</p>
            <p>
              {balance === 0
                ? "Would you like to add more money to your account?"
                : ""}
            </p>
          </div>
        </div>
        <div className=" left floated content">
          <Link to={`/user/${id}/deposit`}>
            <i className="plus icon" />
            Add to balance
          </Link>
        </div>
      </div>
      <div className="four wide column">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {renderSquares()}
        </div>
      </div>
      <Link to={`/user/${id}/squares/new`}>
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            fontSize: "3rem",
          }}
        >
          <i className="plus icon"></i>
        </div>
      </Link>
    </div>
  );
};
