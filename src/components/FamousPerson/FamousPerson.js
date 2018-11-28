import React, { Component } from 'react';

class FamousPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '',
        role: ''
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      person: {
        ...this.state.person,
        [propertyName]: event.target.value
      }
    })
  }

  handleClick() {
    console.log('name:', this.state.person.name);
    console.log('role:', this.state.person.role);
  }

  render() {
    return (
      <div>
        <p>
          <input onChange={this.handleChangeFor('name')} />
          <input onChange={this.handleChangeFor('role')} />
          <button onClick={this.handleClick}>Log in console</button>
        </p>
        <p>
          {this.state.person.name} is famous for {this.state.person.role}.
        </p>
      </div>
    );
  }
}

export default FamousPerson;
