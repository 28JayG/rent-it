import React from "react";

import Stepper from "../../components/stepper/stepper.component";
import OrderDetails from "../../components/order-details/order-details.component";
import { FaRegCheckCircle } from "react-icons/fa";

import "./order-confirmation.styles.scss";
import InvoiceTable from "../../components/invoice-table/invoice-table.componet";

class OrderConfirmation extends React.Component {
  render() {
    return (
      <section className="order-confirmation">
        <Stepper activeStep={4} completedSteps={3} />
        <div className="order-success">
          <FaRegCheckCircle className="tick" />
          <h3 className="success-text">Order Placed Succesfully!</h3>
          <p className="order-number">
            Order Number is <span className="number">FGU805PK5</span>
          </p>
          <span className="email-sent">
            You will recieve a confirmation e-mail shortly.
          </span>
        </div>
        <OrderDetails />
        <InvoiceTable />
      </section>
    );
  }
}

export default OrderConfirmation;
