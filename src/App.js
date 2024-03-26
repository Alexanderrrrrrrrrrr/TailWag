import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Drawer from './components/drawer';
import Home from './pages/Home';
import Favorits from './pages/favorites/favorites';

// const arr = [
//   {name: 'Тор',character: "Ласковый любит есть ",priсe: 500, img: "https://as2.ftcdn.net/v2/jpg/01/02/40/87/1000_F_102408723_7QwK6aPAuPpEOB0a5kx2BeiUj5Apipqf.jpg"},
//   {name: 'Гора', character: "Тактильный, грызет пятки", priсe: 1000, img: "https://as2.ftcdn.net/v2/jpg/01/03/38/97/1000_F_103389700_dwCubYO5C6xgq7QYHAkZHSDKtW0rU2vx.jpg"},
//   {name: 'Бэти', character: "Много играет", priсe: 1500, img: "https://as2.ftcdn.net/v2/jpg/01/05/69/65/1000_F_105696528_mcfLRp3M8TeeCsKkAwGsBv0SXCTRVj27.jpg"},
//   {name: 'Квентин', character: "Ленивый ,много спит", priсe: 300, img: "https://as1.ftcdn.net/v2/jpg/01/05/82/90/1000_F_105829061_eb6IoMdotejIKwPNg7lSSGVDK058rjRL.jpg"},
//   {name: 'Юра', character: "Много говорит,и материться", priсe: 2000, img: "https://as2.ftcdn.net/v2/jpg/01/01/92/99/1000_F_101929915_3Gu9yguO4bF3lEDpvRdQKSjaPp0EBi25.jpg"},
//   {name: 'Минерва', character: "Смотрит в окно по вечерам", priсe: 200, img: "https://as2.ftcdn.net/v2/jpg/01/05/52/81/1000_F_105528134_FQLRdIRrZHoINZcTllWCXTKmwJYMm7Jr.jpg"},
//   {name: 'Луна', character: "Ласковый любит есть ", priсe: 700, img: "https://as2.ftcdn.net/v2/jpg/01/19/97/91/1000_F_119979108_gxVQMgdFVhOqenTX270asJCHQuNyqR8M.jpg"},
// ]

function App() {
  const [cartOpened, setCardOpened] = useState(false)
  const [itens, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    axios.get('https://65fa97dd3909a9a65b1ad3ad.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://65fa97dd3909a9a65b1ad3ad.mockapi.io/card').then((res) => {
      setCartItems(res.data)
    });
  }, [])

  const onAddToCart = (obj) => {
    const { id } = obj;
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      axios.delete(`https://65fa97dd3909a9a65b1ad3ad.mockapi.io/card/${id}`);
    } else {
      axios.post('https://65fa97dd3909a9a65b1ad3ad.mockapi.io/card', obj);
      setCartItems(prev => [...prev, obj]);
    }
  }

  const onFavorite = (obj) => {
    const { id } = obj;
    if (favorite.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      setFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      setFavorite(prev => [...prev, obj]);
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65fa97dd3909a9a65b1ad3ad.mockapi.io/card/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCard={() => setCardOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={itens}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
        <Route
          path="/favorites"
          element={
            <Favorits
              items={favorite}
              onFavorite={onFavorite}
            />
          }
          exact
        />
      </Routes>
    </div >
  );
}

export default App;
