import React from 'react';

const Login = () => (
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
                                    <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                </div>
                                <button className="btn btn-lg btn-primary btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Login;
