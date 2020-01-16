import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
      console.log('Props Side Bar', props)
    this.state = {
      class: "",
      display: "inline-block"
    };
  }

  onHover = () => {
    this.setState({
      class: "active"
    });
  };

  onLeaveHover = () => {
    this.setState({
      class: ""
    });
  };

  render() {
    return (
      <nav 
      id="sidebar"
      onMouseEnter={e => this.onHover(e)}
      onMouseLeave={e => this.onLeaveHover(e)}
      className={this.state.class}
      >
        <div className="sidebar-header" />
        <ul className="list-unstyled components mt-3">
        <li
           className={
            this.props.location.pathname === "/tradeDecomposition" ? "active" : ""
          }
          >
            <Link to="/tradeDecomposition">
              <i
                className="fa fa-cloud-upload icon-styling"
                aria-hidden="true"
              />
              <span
                className=" hidetext fontstyling"
                style={{ display: this.state.display }}
              >
                Trade Decomposition
              </span>
            </Link>
           
          </li>
          <li
              className={ 
              this.props.location.pathname === "/budgetPlanning" ? "active": ""
            }
          >
          <Link to="/budgetPlanning">
              <i
                className="fa fa-bar-chart icon-styling"
                aria-hidden="true"
              />{" "}
              <span
                className=" fontstyling"
                style={{ display: this.state.display }}
              >
                Buget Planning
              </span>
            </Link>
          </li>
        </ul>
      </nav>
     );
  }
}

export default withRouter(SideBar);
