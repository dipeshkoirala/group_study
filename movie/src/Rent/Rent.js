import React, { Component } from "react";
import { CategoryNav } from "./CategoryNav";
import { MovieList } from "./MovieList";

export class Rent extends Component {
  render() {
    return (
      <div className="ct-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">Movie Store</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <CategoryNav
              baseUrl="/rent/movies"
              categories={this.props.categories}
            />
          </div>
          <div className="col-9 p-2">
            <MovieList movies={this.props.movies} />
          </div>
        </div>
      </div>
    );
  }
}
