import React, { Component } from "react";
import TodoForm from "./TodoForm";

class Todo extends Component {
  constructor() {
    super();
    this.editClickedTodo = this.editClickedTodo.bind(this);
    this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
  }
  editClickedTodo() {
    this.props.onEditTodo(this.props.todo);
  }

  deleteClickedTodo() {
    this.props.onDeleteTodo(this.props.todo);
  }

  render() {
    return (
      <span data-todos-index={this.props.todo.id}>
        <span onClick={this.editClickedTodo}>{this.props.todo.body}</span>
        {this.props.editingTodoId === this.props.todo._id ? (
          <TodoForm
            autoFocus={true}
            onUpdateTodo={this.props.onUpdateTodo}
            buttonName="Update Todo!"
          />
        ) : (
          ""
        )}

        <span className="deleteButton" onClick={this.deleteClickedTodo}>
          (X)
        </span>
      </span>
    );
  }
}

export default Todo;
