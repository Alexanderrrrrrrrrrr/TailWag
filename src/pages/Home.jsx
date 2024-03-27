import Card from "../components/card";

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onFavorite, onAddToCart }) { 
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
                {items && items.filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => {
                    return (
                        <Card
                            key={index}
                            name={item.name}
                            character={item.character}
                            price={item.price}
                            img={item.img}
                            onFavorite={(obj) => onFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                        
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Home;