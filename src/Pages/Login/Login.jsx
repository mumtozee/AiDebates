import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Incorrect password or username.")
  };

  return (
    <>
      <div className="row text-center">
        <p className="display-6">Log In</p>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-4">
          <form action="/" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="input-group">
                  <div className="input-group-text">@</div>
                  <input type="text" className="form-control" name="username" 
                    onChange={handleChange} placeholder="Username:" />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                  <input type="password" className="form-control" name="password" 
                    onChange={handleChange} placeholder="Password:" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
