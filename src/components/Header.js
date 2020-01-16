import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="navbar-brand" id="promoColor">Trade$mart</div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#">
                  {" "}
                  <i className="fa fa-bell-o navicon" aria-hidden="true">
                    <span className="badge badge-pill badge-danger">7</span>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <i className="fa fa-download navicon" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <i className="fa fa-envelope-o navicon" aria-hidden="true">
                    <span className="badge badge-pill badge-warning">15</span>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <i
                    className="fa fa-question-circle-o navicon"
                    aria-hidden="true"
                    style={{ fontSize: "19px" }}
                  >
                    <span className="badge badge-pill badge-info">5</span>
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <i
                    className="fa fa-map-marker navicon"
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <i
                    className="fa fa-user-circle-o navicon"
                    style={{ fontSize: "22px" }}
                    aria-hidden="true"
                  />
                </a>
              </li>
              {/* <li className="nav-item">
													<a className="float col-2" href="#">
														<i  className="fa fa-power-off navicon"
																	style={{fontSize: "22px"}} aria-hidden="true"></i>
													</a>
											</li> */}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}