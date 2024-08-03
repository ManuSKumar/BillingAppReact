import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#6c5ce7",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  companyInfo: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "5px",
  },
  addLogo: {
    border: "2px dashed #ddd",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  billTo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  addParty: {
    border: "2px dashed #ddd",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    cursor: "pointer",
  },
  invoiceDetails: {
    "& > div": {
      marginBottom: "10px",
    },
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    "& th, & td": {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
    },
  },
  addItem: {
    border: "2px dashed #ddd",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
  termsConditions: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  },
  totals: {
    "& > div": {
      marginBottom: "10px",
    },
  },
});

const CreateSalesInvoice: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.title}>Create Sales Invoice</span>
        <button className={classes.saveButton}>Save Sales Invoice</button>
      </div>

      <div className={classes.companyInfo}>
        <h2>Galaxy Paints & Interiors</h2>
        <p>Phone Number: 9744209181</p>
        <div className={classes.addLogo}>Add Company Logo</div>
      </div>

      <div className={classes.billTo}>
        <div className={classes.addParty}>+ Add Party</div>
        <div className={classes.invoiceDetails}>
          <div>Sales Invoice No: 1</div>
          <div>Sales Invoice Date: 03 Aug 2024</div>
          <div>Payment Terms: 30 days</div>
          <div>Due Date: 02 Sep 2024</div>
        </div>
      </div>

      <table className={classes.table}>
        <thead>
          <tr>
            <th>NO</th>
            <th>ITEMS/ SERVICES</th>
            <th>HSN/ SAC</th>
            <th>QTY</th>
            <th>PRICE/ITEM (₹)</th>
            <th>DISCOUNT</th>
            <th>TAX</th>
            <th>AMOUNT (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={8} className={classes.addItem}>
              + Add Item
            </td>
          </tr>
        </tbody>
      </table>

      <div className={classes.footer}>
        <div>
          <div>+ Add Notes</div>
          <div className={classes.termsConditions}>
            <h4>Terms and Conditions</h4>
            <ol>
              <li>Goods once sold will not be taken back or exchanged</li>
              <li>
                All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
                only
              </li>
            </ol>
          </div>
          <div>+ Add New Account</div>
        </div>
        <div className={classes.totals}>
          <div>SUBTOTAL ₹0</div>
          <div>+ Add Discount</div>
          <div>+ Add Additional Charges</div>
          <div>Taxable Amount ₹0</div>
          <div>
            <input type="checkbox" id="autoRoundOff" />
            <label htmlFor="autoRoundOff">Auto Round Off</label>
          </div>
          <div>Total Amount</div>
          <div>
            <input type="checkbox" id="markAsPaid" />
            <label htmlFor="markAsPaid">Mark as fully paid</label>
          </div>
          <div>Amount Received ₹0</div>
          <div>Balance Amount ₹0</div>
          <div>Authorized signatory for Galaxy Paints & Interiors</div>
          <div className={classes.addLogo}>+ Add Signature</div>
        </div>
      </div>
    </div>
  );
};

export default CreateSalesInvoice;
