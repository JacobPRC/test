import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="container" style={{ textAlign: "center", padding: "5%" }}>
    <h1>Squares!</h1>
    <i>
      <h2>Inspired by N26's spaces savings function</h2>
    </i>
    <div style={{ paddingTop: "5%" }}>
      <p>
        This spaces app is inspiried by N26, a German online bank. One function
        they implement is Spaces, which allows you to seperate your money into
        various saving goals or spaces. It does impact your total balance, but
        it is not usable by your card.
      </p>
      <br />
      <p>
        So this app is basically a simple version of that. You can deposit funds
        into your account, view total balance, create spaces, and add money into
        them. So go ahead! Pretend that you are better than you really are and
        save away!
      </p>
      <Link to="/">
        <button className="ui button">Check out some people's profiles!</button>
      </Link>
      <Link to="/user/new">
        <button className="ui button">Make a profile!</button>
      </Link>
    </div>
  </div>
);
