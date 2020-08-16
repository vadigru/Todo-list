import React from "react";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import StoreLocal from "../../local-storage/local-storage.js";

const storage = new StoreLocal(`tasks`);

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this._handleTaskAdd = this._handleTaskAdd.bind(this);
    this._handleTaskDelete = this._handleTaskDelete.bind(this);
  }

  _handleTaskAdd(task) {
    const newTasks = [...this.state.tasks, task];
    this.setState({tasks: newTasks});
    storage.setItem(newTasks);
  }

  _handleTaskDelete(index) {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({tasks: updatedTasks});
    storage.setItem(updatedTasks);
  }

  componentDidMount() {
    const localTasks = storage.getAll();
    if (localTasks) {
      this.setState({tasks: localTasks});
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header tasks={this.state.tasks}/>
        <Main
          tasks={this.state.tasks}
          onSubmitButtonClick={this._handleTaskAdd}
          onDeleteButtonClick={this._handleTaskDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
