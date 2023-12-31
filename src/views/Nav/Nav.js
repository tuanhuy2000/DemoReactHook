import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/todo" activeClassName="active">
        Todo
      </NavLink>
      <NavLink to="/user" activeClassName="active">
        User
      </NavLink>
      <NavLink to="/blog" activeClassName="active">
        Blog
      </NavLink>
      <NavLink to="/product" activeClassName="active">
        Product
      </NavLink>
      <NavLink to="/otp" activeClassName="active">
        OTP
      </NavLink>
    </div>
  );
};

export default Nav;
