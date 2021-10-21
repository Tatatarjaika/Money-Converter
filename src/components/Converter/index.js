import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
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
  <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select the currency to convert
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
    <input
      type='text'
      placeholder='Set the amount you want to convert'
      value={baseAmount}
      onChange={(evt) => {
        setAmount(evt.currentTarget.value);
      }}
    /> {baseCurrency}
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select the currency for conversion
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
      <div>Résultat : {convertedAmount} {convertedCurrency}</div>
  </>
);

export default Converter;
