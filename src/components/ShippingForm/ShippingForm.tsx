import React from "react";
import { connect } from "react-redux";
import countries from "../../services/states";

import { Field, ErrorMessage } from "formik";

const ShippingForm = () => (
  <div className="ShippingFormWrapper">
    <h2>Shipping Info</h2>
    <div className="form-group">
      <label>Recipient</label>
      <Field type="text" name="shippingName" placeholder="Full Name" />
      <div className="form-row">
        <Field type="text" name="shippingPhone" placeholder="Phone" />
        <span className="field-details">For delivery questions only</span>
      </div>
    </div>
    <div className="form-group">
      <label>Address</label>
      <Field type="text" name="shippingStreet" placeholder="Street Address" />
      <Field
        type="text"
        name="shippingDetails"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
      />
      <div className="input-wrapper">
        <Field type="text" name="shippingCity" placeholder="City" />
        <div className="target-icon"></div>
      </div>
      <div className="form-row">
        <Field as="select" name="shippingCountry">
          <option value="" disabled selected>
            Country
          </option>
          {countries.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
        </Field>
        <Field type="text" name="shippingZip" placeholder="ZIP" />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm);
