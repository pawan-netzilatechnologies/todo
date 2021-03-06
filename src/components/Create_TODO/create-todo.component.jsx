import React, { Component } from "react";

export default class CreateTodos extends Component {
  constructor() {
    super();

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  onChangeTodoDescription = (event) => {
    this.setState({
      todo_description: event.target.value,
    });
  };

  onChangeTodoResponsible = (event) => {
    this.setState({
      todo_responsible: event.target.value,
    });
  };

  onChangeTodoPriority = (event) => {
    this.setState({
      todo_priority: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log("Form Submitted");
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label html="description">Description: </label>
            <input
              type="text"
              id="description"
              className="form-control mt-1"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="responsible">Responsible: </label>
            <input
              type="text"
              id="responsible"
              className="form-control mt-1"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group mt-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              />
              <label htmlFor="priorityLow" className="form-check-label">
                Low
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              />
              <label htmlFor="priorityMedium" className="form-check-label">
                Medium
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              />
              <label htmlFor="priorityHigh" className="form-check-label">
                High
              </label>
            </div>
          </div>

          <div className="form-group mt-4">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
