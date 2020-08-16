import React from "react";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

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
    const newArr = [...this.state.tasks, task];
    this.setState({tasks: newArr});
    document.cookie = JSON.stringify(newArr);
  }

  _handleTaskDelete(index) {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
    document.cookie = JSON.stringify(newArr);
  }

  componentDidMount() {
    const allCookies = document.cookie;
    if (allCookies) {
      this.setState({tasks: JSON.parse(allCookies)});
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
