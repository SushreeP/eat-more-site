import React from "react";

const ContactUs = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm text-light">
            <p>
              This project is built in a mobile-first approach using{" "}
              <u>React</u>,<u>Redux</u> for state management,{" "}
              <u>Bootstrap, CSS grid</u> for styling, async/await to fetch data
              from the API and among other utilities <u>Router</u> (of course),{" "}
              <u>Hooks and Lifecycle components</u>.
            </p>
          </div>
          <div className="col-sm text-light">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your message"
                />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Your Email Id"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      id="form-append-btn"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row text-light d-block text-center p-1">
          Eat more Cafe © June, 2020 | A showcase project by SushreePM | All
          rights reserved
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
