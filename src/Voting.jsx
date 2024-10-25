import React, { useState } from "react";

const Voting = () => {
  const [votingData, setVotingData] = useState({
    MacOS: 0,
    Windows: 0,
    Linux: 0,
  });
  //	const handleVote = (variant) => { ... }
  //Це функція, яка приймає один аргумент — variant. Це може бути варіант голосування, наприклад, "MacOS".
  const handleVote = (variant) => {
    if (variant === "MacOS") {
      setVotingData((prev) => {
        //   Використовую фігурні дужки, бо повертаю обʼєкт { MacOS: , Windows: , Linux: ,}
        return {
          //...prev — це оператор розпаковки, який копіює всі поточні дані голосування в новий об’єкт.
          //Наприклад, якщо є варіанти "MacOS" і "Windows", вони всі копіюються.
          ...prev,
          MacOS: prev.MacOS + 1,
        };
      });
    }
    if (variant === "Windows") {
      // Можна повернути об’єкт через return, а можна використати круглі дужки для скороченого синтаксису(обгорнути об’єкт у круглі дужки ()):
      setVotingData((prev) => ({ ...prev, Windows: prev.Windows + 1 }));
    }
    if (variant === "Linux") {
      setVotingData((prev) => ({ ...prev, Linux: prev.Linux + 1 }));
    }
  };
  //В даному випадку зверху ми порушуємо принцип DRY (Don’t Repeat Yourself), бо міняємо лише слово macOS/windows/linux в функції.
  //[variant] - для динамічного створення обʼєкту в якості ключа при формуванні обʼєкту треба записати variant в квадратних дужках, кажучи «ключем» буде слугувати цей variant.
  //Весь верхній код люд ля ф-ї handleVote можна замінити так:

  //   const handleVote = (variant) => {
  //     setVotingData((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  //   };

  return (
    <div>
      <li>MacOS: {votingData.MacOS}</li>
      <li>Windows: {votingData.Windows}</li>
      <li>Linux: {votingData.Linux}</li>
      <button onClick={() => handleVote("MacOS")}>MacOS</button>
      <button onClick={() => handleVote("Windows")}>Windows</button>
      <button onClick={() => handleVote("Linux")}>Linux</button>
    </div>
  );
};

export default Voting;
