import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setBeerName } from "../redux/actions/filtersActions";
import { styleSelector } from "../redux/selectors/beerSelector";

const Navbar = props => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__item">
        <h1>Vivitri Capital</h1>
      </a>
      <NavLink to="/" className="navbar__item">
        Home
      </NavLink>
      <div className="navbar__item navbar__item--shop">
        Shop By Beer Style
        <div className="navbar__item--dropdown">
          {props.styles.map(style => (
            <NavLink to={`/beerstyle/${style}`} key={style} className="navbar__dropdown--link">
              {style}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="navbar__end">
        <a href="/" className="navbar__item">
          <i className="fas fa-shopping-cart" />
        </a>
        <div className="navbar__item navbar__search">
          <input
            type="text"
            placeholder="Search by name"
            className="navbar__search--input"
            onKeyDown={e => {
              props.dispatch(setBeerName(e.target.value));
            }}
          />
          <div className="icon__holder">
          <i className="fas fa-search icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    styles: styleSelector(state.beer)
  };
};

export default connect(mapStateToProps)(Navbar);
