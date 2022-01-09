import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs['password'].localeCompare(inputs['confirm_p']) != 0) {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      <div className="row">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="display-6">Sign Up</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            All the fields are mandatory.
          </figcaption>
        </figure>
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
                  <input type="email" className="form-control" name="email" 
                    onChange={handleChange} placeholder="Email:" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                  <input type="password" className="form-control" name="password" 
                    onChange={handleChange} placeholder="Password:" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                  <input type="password" className="form-control" name="confirm_p"
                     onChange={handleChange} placeholder="Confirm password:" />
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

export default Signup;
