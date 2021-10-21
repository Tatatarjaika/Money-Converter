import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './converter.scss';

const Converter = ({
baseAmount,
setAmount,
convertedAmount,
changeCurrency,
convertedCurrency,
}) => (
  <>
    <input
      type='text'
      placeholder='Set the amount you want to convert'
      value={baseAmount}
      onChange={(evt) => {
        setAmount(evt.currentTarget.value);
      }}
    /> euro
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select the currency for conversion
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(evt) => {
          changeCurrency(evt.currentTarget.innerText);
        }}>USD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <div>Résultat : {convertedAmount} {convertedCurrency}</div>
  </>
);

export default Converter;
