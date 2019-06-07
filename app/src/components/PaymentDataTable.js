import React, { Component } from 'react';
import DataTable from './DataTable';

class PaymentDataTable extends Component {
  render() {

    const headings = [
      'Description',
      'Date',
      'Quantity',
      'Rate',
      'Amount',
    ];

    const rows = [
      [
        'Custom Design',
        '05/22',
        1,
        '$75.00',
        '$75.00'
      ],
      [
        'Implementation',
        '05/30',
        12,
        '$500.00',
        '$6,000.00'
      ]
    ];

    return (
      <div>
        <DataTable headings={headings} rows={rows} />
        <div className="table-summary">
          <button>
          View PDF
          </button>
          <div>
            <p>Tax:</p> <p>$6.75</p>
          </div>
          <div>
            <p>Discount:</p> <p>-$1,500.00</p>
          </div>
          <div>
            <p>Total Balance Due:</p> <p>$4,581.75</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentDataTable;
