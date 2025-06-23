import { useState } from 'react'
import {Input} from './componet'; //by defautl index.js file call ho jati hai 

import './App.css'
import { useEffect } from 'react'

function App() {
 
// const [form ,setfrom]=useState("USD")
// const [to ,setTo]=useState("INR")
  const [data,setData]=useState({})
// const [label, setLabel] = useState('');
const [amount, setAmount] = useState(0);
const [convertAmount , setConverteAmount]= useState(0) 

const [currency, setCurrency] = useState('USD');
const [selectCurrency, setSelectCurrency] = useState('USD');

const [currencyOptions, setCurrencyOptions] = useState([]);

const [amountDisable, setAmountDisable] = useState(false);
const [curencyDecable, setcurencyDecable] = useState(false);



useEffect(() => {
  fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then((res) => res.json()) // return res.json() to the next promise https://open.er-api.com/v6/latest/${form}
    .then((data) => {
      console.log((data.rates));
      setData(data.rates);
      setCurrencyOptions(Object.keys(data.rates))
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, [currency]);

useEffect(()=>{
let toal=amount*data[selectCurrency];
console.log(data[selectCurrency]+" "+amount+"  "+selectCurrency);
setConverteAmount(toal);

},[amount,currency,selectCurrency])
  return (
    <>
<div
  style={{
    backgroundImage: 'url(https://catchourtravelbug.com/wp-content/uploads/2023/09/Vietnamese-Dong.jpg)',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <h1 className="text-3xl font-bold font-mono" style={{ color: 'black',textTransform:"capitalize", textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
    currency converter data update each day
  </h1>
  <div style={{ gap: '20px', marginTop: '20px' }}>
    <Input
      label={"From"}
      amount={amount}
      onCurrencyChange={setCurrency}
      amountDisable={amountDisable}
      selectCurrency={currency}
      curencyDecable={curencyDecable}
      onAmountChange={setAmount}
      currencyOptions={currencyOptions}
    />
    <Input
      label={"To"}
      amount={convertAmount}
      onCurrencyChange={setSelectCurrency}
      amountDisable={amountDisable}
      selectCurrency={selectCurrency}
      curencyDecable={curencyDecable}
      onAmountChange={setConverteAmount}
      currencyOptions={currencyOptions}
    />
  </div>
</div>
    </>
  )
}

export default App;
