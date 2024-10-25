import React, { useState } from "react";

const Counter3 = () => {
  const [numb, setNumb] = useState(0);
  const [step, setStep] = useState(1);

  const handlePlus = () => {
    setNumb(numb + step);
  };
  const handleMinus = () => {
    setNumb(numb - step);
  };
  const handleReset = () => {
    setNumb(0);
    setStep(1);
  };

  return (
    <div>
      {/* Значення value це те, що в полі інпута. OnChange функція робить так:
      підставляє те, що я пишу в інпуті (e.target.value), в значення setStep, таким чином 
      встановлюючи новий step */}
      <input
        type="text"
        value={step}
        //        Все що ми відправляємо з інпута маємо конвертувати в намбер.
        // (e.target.value) пишу зі знаком +, бо таким чином не відбувається конкатинація чисел,
        //  а це називається "унарний плюс", що робить те саме шо i конструктор number - приводить
        //   рядок до числа
        onChange={(e) => setStep(+e.target.value)}
      />
      <h2>{numb}</h2>
      <button onClick={handlePlus}>plus</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMinus}>minus</button>
    </div>
  );
};
export default Counter3;
