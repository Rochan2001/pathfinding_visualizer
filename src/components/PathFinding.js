import React, { Component } from "react";
import Node from "./Node";
import "../App.css";

class PathFinding extends Component {
  constructor(props) {
    super(props);
    this.state = { nodes: [] };
  }

  componentDidMount() {
    const nodes = [];

    for (let i = 0; i < 15; i++) {
      const row = [];

      for (let j = 0; j < 50; j++) {
        row.push([]);
      }
      nodes.push(row);
    }

    this.setState({ nodes: nodes });
  }

  render() {
    const { nodes } = this.state;
    return (
      <div className="align_grid">
        {nodes.map((row, rowId) => {
          return (
            <div>
              {row.map((node, nodeId) => (
                <Node></Node>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default PathFinding;
