import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. contructor()");

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. componentdidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Pedro",
            lastName: "Sanchez",
            email: "pedro.sanhin@gmail.com",
            jobTitle: "Software Engineer",
            twitter: "pedroA1007",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Viry",
            lastName: "Guitierrez",
            email: "viri@hotmail.com",
            jobTitle: "Data Scientist",
            twitter: "virygut",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Efraim",
            lastName: "Olague",
            email: "elefraol@hotmail.com",
            jobTitle: "Backend Developer",
            twitter: "efrasm",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
          },
          {
            id: "64c03386-33a2-4512-9ac1-354ad7ebc5e9",
            firstName: "Andres",
            lastName: "Muro",
            email: "andym@hotmail.com",
            jobTitle: "Frontend Developer",
            twitter: "andreeeees",
            avatarUrl:
              "https://www.gravatar.com/avatar/f9879d71855b5ff21e4963273a886bfc?d=identicon",
          },
        ],
      });
    }, 3000);

    //clearTimeout(timeoutId);//sirve para cancelar los timeouts que quedaron pendientes
    //Pero esto se hace en el componenteWillUnmount
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount()");

    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
