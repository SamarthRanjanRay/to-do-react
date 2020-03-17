import React from "react";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCheked: false };
    this.changeCheck = this.changeCheck.bind(this);
  }

  changeCheck() {
    if (this.state.isCheked === true) {
      this.setState({ isCheked: false });
    } else {
      this.setState({ isCheked: true });
    }
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    return (
      <li
        style={{
          textDecoration: this.state.isCheked && "line-through"
        }}
        onClick={this.changeCheck}
        key={this.props.task.key}
      >
        <span class="left" onClick={() => this.delete(this.props.task.key)}>
          X
        </span>{" "}
        {this.props.task.text}
      </li>
    );
  }
}
