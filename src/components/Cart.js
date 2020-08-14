import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";
import nextId from "react-id-generator";
import AddressPicker from "./AddressPicker";

const Cart = () => {
  const cart = useSelector((state) => state.list);
  const dispatch = useDispatch();

  /*   Displaying empty or selected cart   */

  const displaycart =
    cart.length === 0 ? (
      <tr>
        <td>Your cart is empty!</td>
      </tr>
    ) : (
      cart.map((item, index) => (
        <tr key={nextId()}>
          <td>{item.name}</td>
          <td>
            <button
              className="btn btn-circle"
              onClick={() => dispatch(increment(index))}
            >
              +
            </button>
            {item.noplates}
            <button
              className="btn btn-circle"
              onClick={() => dispatch(decrement(index))}
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
        </tr>
      ))
    );

  return (
    <div className="cart-element">
      {/* Cart element Icon */}
      <span data-toggle="modal" data-target="#cart" type="button">
        <img
          src={`${process.env.PUBLIC_URL}/cart-icon.png`}
          alt="my cart"
          width="50"
        />
      </span>

      {/* Cart element Modal to view selected cart */}

      <div className="modal" id="cart" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your Cart</h5>
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
              <table className="align-center">
                <tbody>{displaycart}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <p className="badge-warning">
                Sorry, we only accept CASH at the moment!
              </p>
              <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#address-modal"
                data-dismiss="modal"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Modal to enter address */}

      <div className="modal" id="address-modal" tabIndex="-1">
        <AddressPicker />
      </div>

      {/* Success */}
      <div className="modal" id="success-modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body justify-content-center">
              Order placed!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
