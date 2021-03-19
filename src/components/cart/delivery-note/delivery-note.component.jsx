import React from "react";

import "./delivery-note.styles.scss";

class DeliveryNote extends React.Component {
  state = {
    isTextOpen: false,
  };

  toggleTextField = () =>
    this.setState((prevState) => ({ isTextOpen: !prevState.isTextOpen }));

  render() {
    const { isTextOpen } = this.state;

    return (
      <div className="note">
        <h3>Delivery Notes</h3>
        {!isTextOpen ? (
          <span onClick={this.toggleTextField}>Add any Delivery notes</span>
        ) : (
          <div className='text-field'>
            <textarea name="note" id="note" rows="5" />
            <span onClick={this.toggleTextField} className="cross">
              &#10005;
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default DeliveryNote;
