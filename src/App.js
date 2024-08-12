import { useState, useEffect } from 'react';
// ------------------------------------------1------------------------------
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div style={{ position: 'relative' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.value)}
          />
        </label>
        <br />
        <label>
          Возраст:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Готово</button>
      </form>

      {submitted && (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <h3>Вывод:</h3>
          <p>Имя: {name}</p>
          <p>Возраст: {age}</p>
        </div>
      )}
    </div>
  );
}




//----------------------------------------------------2-----------------------------------------------

// const products = [
//   { name: 'Товар 1', price: 5600, count: 525},
//   { name: 'Товар 2', price: 23240, count: 355 },
//   { name: 'Товар 3', price: 76064, count: 31254 },
// ];

// function App() {
//   return (
//     <div>
//       {products.map((e) => (
//         <div
//           style={{
//             background: 'purple',
//             border: '10px solid black',
//             margin: '10px',
//             padding: '10px',
//             width: '150px',
//           }}

//         >
//           <h4>{e.name}</h4>
//           <p>Price: ${e.price}</p>
//           <p>Count: {e.count}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

//------------------------------------------------3------------------------------------------------

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('darkMode');
//     if (storedTheme === 'true') {
//       setDarkMode(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.style.backgroundColor = 'black';
//       document.body.style.color = 'snow';
//     } else {
//       document.body.style.backgroundColor = 'snow';
//       document.body.style.color = 'black';
//     }
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <div>
//       <button onClick={() => setDarkMode(!darkMode)}>
//         Тыкни
//       </button>
//     </div>
//   );
// }




//-----------------------------------------------------4-------------------------
// function App() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Время: {time.toLocaleTimeString()}</h2>
//       <p>!Время на экране берется с вашего компа!</p>
//     </div>
//   );
// }

//----------------------------------------------5------------------------------

// function App() {
//   const getDayInfo = () => {
//     const date = new Date();
//     const day = date.getDate();
//     const daysOfWeek = [
//       'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
//     ];    
//     if (day % 2 === 0) {
//       return `Четное число, Месяц:${date.getMonth() + 1},Год:${date.getFullYear()}`;
//     } else {  
//       return `Нечетное число,День недели: ${daysOfWeek[date.getDay()]}, ЧИсло:${day}`;
//     }
//   };

//   return (
//     <div>
//       <h2>Сегодня:</h2>
//       <p>{getDayInfo()}</p>
//     </div>
//   );
// }





export default App;
