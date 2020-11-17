import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory, useParams, useLocation } from "react-router-dom";

import {
  ADD_MONEY_TO_USERS_ACC,
  ADD_MONEY_TO_SQUARE,
  SUBTRACT_MONEY_FROM_SQUARE,
} from "../queries/mutations";
import { FETCH_USER } from "../queries/queries";

export default () => {
  const [amount, setAmount] = useState("");
  const [addMoney] = useMutation(ADD_MONEY_TO_USERS_ACC);
  const [addMoneyToSquare] = useMutation(ADD_MONEY_TO_SQUARE);
  const [subtractFromSquare] = useMutation(SUBTRACT_MONEY_FROM_SQUARE);

  let history = useHistory();
  let params = useParams();
  let location = useLocation();

  const { id, sqid } = params;

  const submitDeposit = (e) => {
    e.preventDefault();
    addMoney({
      variables: { id, amount },
      refetchQueries: [{ query: FETCH_USER, variables: { id } }],
    });
    history.goBack();
  };

  const submitSquareDeposit = (e) => {
    e.preventDefault();
    addMoneyToSquare({ variables: { id: sqid, amount } });
    history.goBack();
  };

  const squareWithdraw = (e) => {
    e.preventDefault();
    subtractFromSquare({ variables: { id: sqid, amount } });
    history.goBack();
  };

  const notEnoughFunds = () =>
    alert("You do not have enough funds in you main account.");

  const depositCheckAndVeryify = (e) =>
    !location.state
      ? submitDeposit(e)
      : !location.state.withdraw && location.state.mainBal >= amount
      ? submitSquareDeposit(e)
      : location.state.withdraw && location.state.squareBal >= amount
      ? squareWithdraw(e)
      : notEnoughFunds();

  return (
    <form onSubmit={(e) => depositCheckAndVeryify(e)} class="ui form">
      <div class="field">
        <label>Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          type="number"
          placeholder="Amount"
        />
      </div>
      <button class="ui button" type="submit">
        Submit
      </button>
      <button
        onClick={() => history.push(`/user/${id}`)}
        className="ui button negative"
      >
        Cancel
      </button>
    </form>
  );
};
