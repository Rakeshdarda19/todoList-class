import React from "react";
import '../App.css'
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions/index";
export class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: "",
    };
  }
  render() {
    return (
      <>     
            <input
              type="text"
              value={this.state.todoList}
              onChange={(e) => this.setState({ todoList: e.target.value })}
            />
            <i className='fa fa-plus add-btn'
              onClick={() => {this.props.addTodo(this.state.todoList);
                this.setState({ todoList: "" });
              }}
            ></i>
            {this.props.todoState &&
              this.props.todoState.list.map((e) => {
                return (
                  <div className="todo-list" key={e.id}>
                    <h2>{e.data}</h2>
                    <i className='fa fa-trash-alt add-btn'onClick={() => this.props.deleteTodo(e.id)}></i>
                  </div>
                );
              })}   
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    todoState: state.todoReducer,
  };
}

export default connect(mapStateToProps, { addTodo, deleteTodo })(TodoClass);
