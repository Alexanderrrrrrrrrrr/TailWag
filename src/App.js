import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Drawer from './components/drawer';
import Home from './pages/Home';
import Favorites from './pages/favorites/favorites';

function App() {
  const [cartOpened, setCardOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favorite, setFavorite] = useState([])

  console.log(favorite)
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

  const onFavorite = (id) => {
    if (favorite.find((favObj) => Number(favObj.id) === Number(id))) {
        setFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } else {
        const item = items.find((item) => Number(item.id) === Number(id));
        if (item) {
            setFavorite(prev => [...prev, item]);
        }
    }
};

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
              items={items}
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
            <Favorites
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