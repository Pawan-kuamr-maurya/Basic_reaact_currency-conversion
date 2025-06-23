import React from "react";
import "./Input.css";
import { useId } from 'react';
function Input({lable,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usdf",amountDisable=false,curencyDecable=false}) {

  return (
    <div className="input">
      <div className="top">
        <div>{lable}</div>
        <div>currencytype</div>
      </div>

      <div className="top">
        <div>
          <input 
          type="number" 
          name="input" 
          id="first" 
          disabled={amountDisable} 
          value={amount} 
           onChange={(event)=>{onAmountChange&& onAmountChange(Number(event.target.value))}}/>
        </div>
        <div>
          <select
           name="currencytype" 
           id="currencytype"
            disabled={curencyDecable} 
            value={selectCurrency} 
            onChange={(event)=>{onCurrencyChange&&onCurrencyChange(event.target.value)} }> 
         {currencyOptions.map(element => <option key={useId()} value={element}>{element}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
