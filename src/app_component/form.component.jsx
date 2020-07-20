import React from "react";
import "./form.style.css";
const Form = (props) => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              name="city"
              autoComplete="off"
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="country"
              autoComplete="off"
              className="form-control"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 py-2 mt-md-0 text-md-left">
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
const error = () => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Enter City And Country To See The Weather
    </div>
  );
};
export default Form;
