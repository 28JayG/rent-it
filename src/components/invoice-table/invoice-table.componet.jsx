import React from "react";

import { RUPEE_SYMBOL } from "../../constants/strings";

import "./invoice-table.styles.scss";

const InvoiceTable = () => {
  return (
    <div className='invoice'>
      <table>
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Order No</th>
            <th scope="col">Product details</th>
            <th scope="col">Rental Period</th>
            <th scope="col">Total Rent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" data-label="Sl.No">
              1
            </td>
            <td data-label="Order No">37287889927</td>
            <td data-label="Product details">Macbook Pro 16 GB RAM</td>
            <td data-label="Rental Period">6 Dec’ 17 - 12 Dec’ 17 </td>
            <td data-label="Total Rent">{RUPEE_SYMBOL} 10400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
