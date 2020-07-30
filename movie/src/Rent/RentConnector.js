import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../dataF/ActionCreators";
import { DataTypes } from "../dataF/Types";
import { Rent } from "./Rent";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
};

const filterMovies = (movies = [], category) =>
  !category || category === "All"
    ? movies
    : movies.filter(
        (mv) => mv.category.toLowerCase() === category.toLowerCase()
      );

export const RentConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Route
            path="/rent/movies/:category?"
            render={(routeProps) => (
              <Rent
                {...this.props}
                {...routeProps}
                movies={filterMovies(
                  this.props.movies,
                  routeProps.match.params.category
                )}
              />
            )}
          />

          <Redirect to="/rent/movies" />
        </Switch>
      );
    }
    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.MOVIES);
    }
  }
);
