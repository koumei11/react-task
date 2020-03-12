import React, {Component} from 'react';

class App extends Component {
  render() {
    const profiles = [
      {name: "Taro", age: 10},
      {name: "Hanako", age: 23},
      {name: "KOMEI"}
    ]
    return (
      <React.Fragment>
        {
          profiles.map((user, index) => {
            return <User name={user.name} age={user.age} key={index}/>
          })
        }
      </React.Fragment>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
      </div>
    )
  }
}

User.defaultProps = {
  age: 1
}

export default App;
