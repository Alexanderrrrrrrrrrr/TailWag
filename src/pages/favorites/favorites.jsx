import React from 'react';
import Card from "../../components/card";
import styles from "./styles.module.scss";
import { AppContext } from '../../App';



function Favorites({ onFavorite }) {

    const {favorite}= React.useContext(AppContext)
    
    const handleFavorite = (item) => {
        onFavorite(item);
    };
    
    return (
        <div>
            <h1 className={styles.title}>Мои закладки</h1>
            <div className={styles.list}>
                {favorite && favorite.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            id={item.id}
                            name={item.name}
                            character={item.character}
                            price={item.price}
                            img={item.img}
                            onFavorite={() => handleFavorite(item)}
                            favorited={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Favorites;
