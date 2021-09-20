import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import Loader from "../components/Loader";
import { Button } from "bootstrap";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. contructor()");

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`; //En dado caso podria poner un elemento de que hubo un error
    }

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
            <BadgesList badges={this.state.data.results} />

            {this.state.loading && (
              <div className="loader">
                <Loader />
              </div>
            )}

            {!this.state.loading && (
              <button onClick={() => this.fetchCharacters()}>Load More</button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
