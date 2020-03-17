import React from "react";
import "./styles.css";
import List from "./List";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      inputVal: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    this.setState({ inputVal: event.target.value });
  }

  addTask(e) {
    if (this.state.inputVal !== "") {
      var newTask = {
        text: this.state.inputVal,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          tasks: prevState.tasks.concat(newTask)
        };
      });
      this.setState({ inputVal: "" });
    } else {
      alert("Please input some task in the task box");
    }
    e.preventDefault();
  }

  delete(key) {
    var taskArray = this.state.tasks.filter(function(task) {
      return task.key !== key;
    });
    this.setState({ tasks: taskArray });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            placeholder="Enter the task"
            onChange={this.handleChange}
            value={this.state.inputVal}
          />
        </form>
        <List taskArray={this.state.tasks} delete={this.delete} />
      </React.Fragment>
    );
  }
}
