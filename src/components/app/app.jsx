import React from "react";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [`task 1`, `task 2`, `task 3`, `task 4`]
    };

  }

  render() {
    return (
      <React.Fragment>
        <Header tasks={this.state.tasks}/>
        <Main tasks={this.state.tasks}/>
      </React.Fragment>
    );
  }
}

export default App;
