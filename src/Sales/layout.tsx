import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  salesInvoices: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "start",
  },
  summaryBoxes: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    columnGap: 24,
  },
  summaryBox: {
    flex: "1",
    padding: "15px",
    borderRadius: "8px",
    "& h3": {
      margin: "0 0 10px 0",
      fontSize: "16px",
    },
    "& p": {
      margin: 0,
      fontSize: "24px",
      fontWeight: "bold",
    },
  },
  totalSales: {
    backgroundColor: "#F0F0FF",
    color: "#5050FF",
  },
  paid: {
    backgroundColor: "#F0FFF0",
    color: "#50AA50",
  },
  unpaid: {
    backgroundColor: "#FFF0F0",
    color: "#FF5050",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  actionsSub: {
    display: "flex",
    marginBottom: "20px",
    columnGap: 24,
  },
  select: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  createInvoice: {
    padding: "8px 16px",
    backgroundColor: "#5050FF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  invoiceTable: {
    width: "100%",
    borderCollapse: "collapse",
    "& th, & td": {
      border: "1px solid #ddd",
      padding: "12px",
      textAlign: "left",
    },
    "& th": {
      backgroundColor: "#f2f2f2",
    },
  },
  noData: {
    textAlign: "center",
    color: "#888",
  },
});

const SalesInvoices: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.salesInvoices}>
      <h1 className={classes.title}>Sales Invoices</h1>

      <div className={classes.summaryBoxes}>
        <div className={`${classes.summaryBox} ${classes.totalSales}`}>
          <h3>Total Sales</h3>
          <p>₹ 0</p>
        </div>
        <div className={`${classes.summaryBox} ${classes.paid}`}>
          <h3>Paid</h3>
          <p>₹ 0</p>
        </div>
        <div className={`${classes.summaryBox} ${classes.unpaid}`}>
          <h3>Unpaid</h3>
          <p>₹ 0</p>
        </div>
      </div>

      <div className={classes.actions}>
        <select className={classes.select} defaultValue="last365Days">
          <option value="last365Days">Last 365 Days</option>
        </select>
        <div className={classes.actionsSub}>
          <select className={classes.select} defaultValue="bulkActions">
            <option value="bulkActions">Bulk Actions</option>
          </select>
          <button className={classes.createInvoice}>
            Create Sales Invoice
          </button>
        </div>
      </div>

      <table className={classes.invoiceTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Invoice Number</th>
            <th>Party Name</th>
            <th>Due In</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6} className={classes.noData}>
              No Transactions Matching the current filter
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesInvoices;
