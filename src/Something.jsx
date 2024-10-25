//Як можна зробити так щоб функція сама по собі (без зовнішніх змінних чи функцій) зберігала кількість її викликів?

const Something = () => {
  function countCalls() {
    let call = 0;
    return function () {
      call++;
      console.log(call);
    };
  }
  const count = countCalls();
  count();
  count();
  count();
  return <div>Something</div>;
};

export default Something;
