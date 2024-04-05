import React from "react";
import Card from "../components/card";
import { AppContext } from '../App';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onFavorite, onAddToCart, favorite, isLoading }) {

    const { isItemAdded } = React.useContext(AppContext)

    const renderItems = () => {

        const filterItems = items.filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(7)] : filterItems).map((item, index) => {
            console.log('ing', isLoading)
            // if (!item) return null;
            const test = favorite.find((favoriteItem) => favoriteItem.id === item.id)
            const isFavorite = test?.id ? true : false


            return (
                <Card
                    id={item?.id}
                    key={index}
                    name={item?.name}
                    character={item?.character}
                    price={item?.price}
                    img={item?.img}
                    onFavorite={(obj) => onFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    favorite={isFavorite}
                    loading={isLoading}
                    added={isItemAdded(item?.id)}
                />
            );
        })
    }

    return (
        <div className="content">
            <div className="titleSearch">
                <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все животные`}</h1>
                <div className="search">
                    <img src={'https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/search.svg'} alt="img"></img>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
                    {searchValue && <img className="remove" onClick={() => setSearchValue('')} src='https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/btn-remove.svg' alt="img"></img>}
                </div>
            </div>
            <div className="cardList">
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;