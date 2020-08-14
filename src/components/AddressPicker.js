import React, { useState } from "react";

const AddressPicker = () => {
  const [adress, setAdress] = useState({ pscode: "", phone: "" });

  const pscodeAdded = (e) => {
    const value = e.target.value;
    setAdress({ ...adress, pscode: value });
    console.log(adress);
  };

  const phoneAdded = (e) => {
    const value = e.target.value;
    setAdress({ ...adress, phone: value });
    console.log(adress);
  };

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Your adress</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container full-width">
            <form className="adressform row justify-content-center">
              <input
                className="form-control col-4 mr-3"
                type="text"
                placeholder="Enter Post Code"
                onChange={pscodeAdded}
                value={adress.pscode}
              />
              <input
                className="form-control col-2"
                type="text"
                placeholder="Enter Post Code"
                value="(+44)"
                disabled
              />
              <input
                className="form-control col-4"
                type="text"
                placeholder="Enter Phone Number"
                onChange={phoneAdded}
                value={adress.phone}
              />
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-info"
            data-toggle="modal"
            data-target="#success-modal"
            data-dismiss="modal"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressPicker;
