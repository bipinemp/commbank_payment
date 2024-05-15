"use client";

import React from "react";
import { useFormState } from "react-dom";
import { handlePayment } from "./actions";

const PaymentForm = () => {
  const [state, action] = useFormState(handlePayment, undefined);
  return (
    <form
      action={action}
      className="flex flex-col gap-y-5 w-[500px] mx-auto mt-20"
    >
      <div className="flex flex-col gap-y-2 gap-x-3">
        <label>Credit Card Number: </label>
        <input name="ccnum" type="text" maxLength={20} autoFocus />
      </div>
      <div className="flex flex-col gap-y-2 gap-x-3">
        <label>CVC: </label>
        <input name="cccvc" type="text" maxLength={4} />
      </div>
      <div className="flex flex-col gap-y-2 gap-x-3">
        <label>Expiry Date: </label>
        <select name="ccexpmonth">
          <option value="01">Jan</option>
          <option value="02">Feb</option>
          <option value="03">Mar</option>
          <option value="04">Apr</option>
          <option value="05">May</option>
          <option value="06">Jun</option>
          <option value="07">Jul</option>
          <option value="08">Aug</option>
          <option value="09">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
        <select name="ccexpyear">
          <option value="13">2013</option>
          <option value="14">2014</option>
          <option value="15">2015</option>
          <option value="16">2016</option>
          <option value="17">2017</option>
          <option value="18">2018</option>
          <option value="19">2019</option>
          <option value="20">2020</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="22">2023</option>
          <option value="22">2024</option>
          <option value="22">2025</option>
        </select>
      </div>
      <button
        className="bg-green-600 text-white font-semibold px-4 py-3 rounded-md"
        type="submit"
      >
        Process Payment
      </button>
    </form>
  );
};

export default PaymentForm;
