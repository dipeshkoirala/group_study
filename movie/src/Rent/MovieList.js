import React, { Component } from "react";

export class MovieList extends Component {
  render() {
    if (this.props.movies == null || this.props.movies.length === 0) {
      return <h5 className="p-2">No such Movies</h5>;
    }
    return this.props.movies.map((mv) => (
      <div className="card m-1 p-2 bg-light" key={mv.id}>
        <h3>
          {mv.name}
          <span className="badge badge-pill badge-secondary float right">
            ${mv.boxOfficeCol.toFixed(2)}
          </span>
        </h3>
        <div className="card-text bg-light-green p-2">{mv.category}</div>
      </div>
    ));
  }
}
