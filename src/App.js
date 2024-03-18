import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import search from './img/search.svg';
import Drawer from './components/Drawer';

const arr = [
  {id: 1, name: 'Маруся',character: "Ласковый любит есть ",priсe: 500, img: "./img/enimals/beer.jpeg"},
  {id: 2, name: 'Глубокослав Черноходов', character: "Тактильный, грызет пятки", priсe: 1000, img: "./img/enimals/cat.jpeg"},
  {id: 3, name: 'Бэти', character: "Много играет", priсe: 1500, img: "./img/enimals/chiraf.jpeg"},
  {id: 4, name: 'Марго', character: "Ленивый ,много спит", priсe: 300, img: "./img/enimals/dog.jpeg"},
  {id: 5, name: 'Трандуил', character: "Много говорит,и материться", priсe: 2000, img:"./img/enimals/enot.webp"},
  {id: 6, name: 'Маша', character: "Смотрит в окно по вечерам", priсe: 200, img: "./img/enimals/igyana.jpeg"},
  {id: 7, name: 'Луна', character: "Ласковый любит есть ", priсe: 700, img: "./img/enimals/limyr.webp"}
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="titleSearch">
          <h1>Все питомцы</h1>
          <div className="search">
            <img src={search} alt="serg"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="cardList">
          {arr.map((obj)=> {
            return (
              <Card 
                key={obj.id}
                name={obj.name}
                character={obj.character}
                price={obj.priсe} 
                img={obj.img}
              />
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default App;
