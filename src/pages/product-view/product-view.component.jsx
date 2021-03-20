import React from "react";
import AgeGroupPicker from "../../components/age-group-picker/age-group-picker.component";
import DatePicker from "../../components/date-picker/date-picker.component";
import ItemDetails from "../../components/item-details/item-details.component";
import QuantityPicker from "../../components/quantity-picker/quantity-picker.component";

import "./product-view.styles.scss";

class ProductView extends React.Component {
  render() {
    return (
      <section className="product-view">
        <div className="product-details">
          <ItemDetails />
        </div>
        <div className="fill-details">
          <div className="quantity-agegroup">
            <QuantityPicker />
            <AgeGroupPicker />
          </div>
          <DatePicker />
        </div>
      </section>
    );
  }
}

export default ProductView;
