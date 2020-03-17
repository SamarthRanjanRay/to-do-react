import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var tasks = this.props.taskArray.map(value => (
      <ListItem task={value} delete={this.delete} />
    ));

    return <ul>{tasks}</ul>;
  }
}
