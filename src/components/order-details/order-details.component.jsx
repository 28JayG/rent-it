import React from "./order-details.styles.scss";
import { RUPEE_SYMBOL } from "../../constants/strings";

import { FaHome, FaRegCreditCard } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import PaymentDetail from "./payment-detail/payment-detail.component";

import "./order-details.styles.scss";

const iconSize = 21;

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="grid-item address">
        <div className="address-heading">
          <FaHome size={iconSize} />
          <h4 className="heading">Delivery Address</h4>
        </div>
        <address>
          Jason Doe
          <br />
          #B61, MJR PLATINA, Kudlu Gate,
          <br />
          Industrial layout, Begur,
          <br />
          Bangalore-560068, Karnataka
          <br />
          Mobile: 9567035955
        </address>
      </div>
      <div className="grid-item payment">
        <div className="payment-heading">
          <FaRegCreditCard size={iconSize} />
          <h4 className="heading">Payment Details</h4>
        </div>
        <PaymentDetail title="total amount" value={`${RUPEE_SYMBOL} 10400`} />
        <PaymentDetail title="payment method" value="axis bank debit card" />
        <PaymentDetail title="payment status" value="paid" />
      </div>
      <div className="grid-item delivery-notes">
        <div className="delivery-notes-heading">
          <BiNotepad size={iconSize} />
          <h4 className="heading">Delivery Notes</h4>
        </div>
        <div className="note">Please take care of the item it is fragile</div>
      </div>
    </div>
  );
};

export default OrderDetails;
