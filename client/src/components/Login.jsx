import React, { Component } from 'react';
const AuthService = require('./../classes/AuthService');
const auth = new AuthService();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
  }

  login(e) {
    e.preventDefault();
    auth.login(this.state.email, this.state.password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('Error logging in', err);
      });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h1 className="panel-title">Quiz Generator</h1>
                        </div>
                        <div className="panel-body">
                            <form role="form" id="login-form">
                                <fieldset>
                                    <div className="form-group">
                                        <input onChange={this.handleChange.bind(this)} name="email" value={this.state.email} className="form-control" placeholder="E-mail" autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleChange.bind(this)} name="password" value={this.state.password} className="form-control" placeholder="Password" />
                                    </div>
                                    <button type="submit" onClick={this.login.bind(this)} className="btn btn-lg btn-primary btn-block">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                </div>
                <button className="btn btn-primary btn-block">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
    );
  }
}

export default Login;
