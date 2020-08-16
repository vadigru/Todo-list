import React from "react";
import PropTypes from "prop-types";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      term: ``
    };

    this.inputRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmitButtonClick} = this.props;
    evt.preventDefault();

    if (this.state.term === ``) {
      return;
    }

    onSubmitButtonClick(this.state.term);
    this.inputRef.current.value = ``;
  }

  render() {

    return (
      <form
        className="input"
        onSubmit={(evt) => this._handleSubmit(evt)}
      >
        <input
          type="text"
          className="input__text"
          placeholder="input task"
          value={this.state.term}
          id="input-task"
          ref={this.inputRef}
          onChange={(evt) => this.setState({term: evt.target.value})}/>
        <label htmlFor="input-task"></label>
        <button
          type="submit"
          className="input__submit"
        >
            add task
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitButtonClick: PropTypes.func.isRequired
};

export default Form;
