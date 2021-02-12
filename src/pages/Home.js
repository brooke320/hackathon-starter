import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h7> Your favorite microblogging platform</h7>
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
