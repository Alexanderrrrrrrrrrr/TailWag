import React from 'react';
import Card from "../../components/card";
import styles from "./styles.module.scss";

function Favorites({ items, onFavorite }) {
    const handleFavorite = (id) => {
        onFavorite(id);
    };
    console.log(items)
    return (
        <div>
            <h1 className={styles.title}>Мои закладки</h1>
            <div className={styles.list}>
                {items && items.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            id={item.id}
                            name={item.name}
                            character={item.character}
                            price={item.price}
                            img={item.img}
                            onFavorite={() => handleFavorite(item.id)}
                            favorited={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Favorites;