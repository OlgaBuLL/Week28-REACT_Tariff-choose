import React, { useState } from "react";
import "../styles/tariff.sass";

export default function Tariff(props) {
  const { name, price, speed, theme } = props;
  const [pressed, setPressed] = useState(false);

  let selectedTariff;
  let selectedTariffBtn;
  if (pressed) selectedTariff = "selected";
  if (pressed) selectedTariffBtn = "button-selected";

  const handleChange = () => {
    setPressed(!pressed);
  };

  return (
    <div className={`card ${selectedTariff}`}>
      <div className={`cardName ${theme.cardName}`}>Безлимитный {name}</div>
      <div className={`cardPrice ${theme.cardPrice}`}>
        <p>руб</p>
        <p>{price}</p>
        <p>/мес</p>
      </div>
      <p className="speed">
        до <span>{speed}</span> Мбит/сек
      </p>
      <p className="text">
        Объем включенного <br />
        трафика не ограничен
      </p>
      <button className={`${selectedTariffBtn}`} onClick={handleChange}>
        {pressed ? "✅Тариф выбран✅" : "Выбрать тариф"}
      </button>
    </div>
  );
}
