import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategoryNav extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary btn-block" to={this.props.baseUrl}>
          All
        </Link>
        {this.props.categories &&
          this.props.categories.map((ct) => (
            <Link
              className="btn btn-secondary btn-block"
              key={ct}
              to={`${this.props.baseUrl}/${ct.toLowerCase()}`}
            >
              {ct}
            </Link>
          ))}
      </div>
    );
  }
}
