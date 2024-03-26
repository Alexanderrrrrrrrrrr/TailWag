import React, { useState } from 'react';
import styles from './styles.module.scss';


function Card({id, name, img, character, price, onFavorite, onPlus, favorited = false}) {
    const[isAdd, setIsAdd] = useState(false)
    const[isfavorite, setfavorite] = useState(favorited)
    
    const onClickPlus = () => {
        onPlus({id, name, img, character, price})
        setIsAdd(!isAdd)
    }

    const onClickFavorite = ()=> {
        setfavorite(!isfavorite)
        onFavorite({id, name, img, character, price })
    
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.favarit} onClick={onFavorite}>
                <img onClick={onClickFavorite} src={isfavorite ? "https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/liked.svg" : "https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/unliked.svg"} alt="unliked"></img>
            </div>
            <img src={img} alt="foto" style={{ width: '200px', height: '200px', borderRadius: '20px' }}></img>
            <h5>{name}</h5>
            <p>{character}</p>
            <div className={styles.cardButton}>
                <div className={styles.cardButtonPrice}>
                    <span>Цена:</span>
                    <b>{price}р/день</b>
                </div>
                    <img className={styles.button} onClick={onClickPlus} src={isAdd ?  'https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/btn-checked.svg' : 'https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/btn-remove.svg'}  alt="plusButton" ></img>
            </div>
        </div>
    )
}

export default Card