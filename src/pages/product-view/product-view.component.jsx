import React from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";
import { AppRoutes } from "../../constants/routes";

import AgeGroupPicker from "../../components/age-group-picker/age-group-picker.component";
import DatePicker from "../../components/date-picker/date-picker.component";
import ItemDetails from "../../components/item-details/item-details.component";
import QuantityPicker from "../../components/quantity-picker/quantity-picker.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./product-view.styles.scss";

class ProductView extends React.Component {
  state = {
    addedToCart: false,
  };

  handleAddToCart = () => {
    const { addItemToCart, history } = this.props;
    const { addedToCart } = this.state;

    if (addedToCart) {
      history.push(AppRoutes.CART);
      return;
    }

    addItemToCart();
    this.setState({
      addedToCart: true,
    });
  };

  render() {
    const { addedToCart } = this.state;

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
          <div style={{ height: "20px" }} />
          <CustomButton onClick={this.handleAddToCart} fullWidth>
            {addedToCart ? "CHECKOUT" : "ADD TO CART"}
          </CustomButton>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(ProductView);
