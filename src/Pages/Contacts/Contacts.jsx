import { useState } from "react";

const Contacts = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <>
      <div className="row">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p className="display-6">Our contacts:</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Fan? Drop a note!
          </figcaption>
        </figure>

        <div className="col d-flex justify-content-center align-items-center">
          <div>
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <p className="text-center">Search for <em className="text-primary">@aidebates_org</em> in all social media and 
                catch up with the news ;)</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="col-1">
                <a href="https://twitter.com/imumtozee">
                  <img src={`${process.env.PUBLIC_URL}/assets/twitter.jpg`} className="img-fluid" width={32} />
                </a>
              </div>
              <div className="col-1">
                <a href="https://instagram.com/imumtozee">
                  <img src={`${process.env.PUBLIC_URL}/assets/insta.jpg`} className="img-fluid" width={32} />
                </a>
              </div>
              <div className="col-1">
                <a href="https://t.me/imumtozee">
                  <img src={`${process.env.PUBLIC_URL}/assets/tg.jpg`} className="img-fluid" width={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <form action="/" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Full name:" 
                  name="name" onChange={handleChange} />
              </div>
              <div className="col">
                <input type="email" className="form-control" placeholder="Email:" 
                  name="email" onChange={handleChange} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <textarea className="form-control" rows={5} 
                  placeholder="Message:" name="message" onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col d-flex justify-content-center">
                <button type="sumbit" className="btn btn-primary">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
