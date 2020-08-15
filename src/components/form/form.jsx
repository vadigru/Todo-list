import React from "react";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return (
      <p className="input">
        <input type="text" className="input__text" placeholder="input task" id="input-task" ref={this.inputRef} />
        <label htmlFor="input-task"></label>
        <button className="input__submit">add task</button>
      </p>
    );
  }
}

export default Form;
