import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack';
import './converter.scss';

import currenciesList from 'src/data/currencies';

const Converter = ({
baseCurrency,
changeBaseCurrency,
baseAmount,
setAmount,
convertedAmount,
changeConvertedCurrency,
convertedCurrency,
}) => (
  <div className='main-container'>
    <div className='head-title'>Basic Currency Converter</div>
    <input
      className='currency-input'
      type='text'
      placeholder='Set the amount you want to convert'
      value={baseAmount}
      onChange={(evt) => {
        setAmount(evt.currentTarget.value);
      }}
    /> {baseCurrency}
    <div className='dropdown-btns'>
      <Dropdown drop="end">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Base Currency
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {currenciesList.map((currency) => (
            <Dropdown.Item
              key={currency.apiName}
              onClick={(evt) => {
                changeBaseCurrency(evt.currentTarget.innerText);
              }}
            >{currency.apiName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown drop="end" className='dropdown-btn'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Conversion Currency
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {currenciesList.map((currency) => (
            <Dropdown.Item
              key={currency.apiName}
              onClick={(evt) => {
                changeConvertedCurrency(evt.currentTarget.innerText);
              }}
            >{currency.apiName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <div className='result'>{convertedAmount} {convertedCurrency}</div>
  </div>
);

export default Converter;
