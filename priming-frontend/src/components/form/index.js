import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Submitted');
  }

  render() {
    return (
      <div className="App-Form">
        <form>
          <label>
            Volume of Beer:
            <input type="number" step="0.25" name="beer-volume" />
          </label>

          <label>
            Volume of CO2:
            <input type="number" step="0.1" name="co2-volume" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
