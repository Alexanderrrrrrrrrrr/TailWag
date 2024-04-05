import React, { useState } from 'react';
import styles from './styles.module.scss';
import ContentLoader from "react-content-loader"


function Card({ id, name, img, character, price, onFavorite, onPlus, favorited, loading }) {
    const [isAdd, setIsAdd] = useState(false)
    const [isfavorite, setfavorite] = useState(favorited)
    
    const onClickPlus = () => {
        onPlus({ id, name, img, character, price })
        setIsAdd(!isAdd)
    }

    const onClickFavorite = () => {
        setfavorite(!isfavorite)
        onFavorite({ id, name, img, character, price })

    }
    
    return (
        <div className={styles.card}>
            {
                loading ? (<ContentLoader
                    speed={2}
                    width={260}
                    height={370}
                    viewBox="0 0 260 370"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="361" y="162" rx="3" ry="3" width="52" height="6" />
                    <rect x="0" y="-1" rx="3" ry="3" width="189" height="0" />
                    <rect x="38" y="302" rx="0" ry="0" width="79" height="8" />
                    <rect x="39" y="321" rx="0" ry="0" width="119" height="12" />
                    <rect x="40" y="343" rx="0" ry="0" width="78" height="32" />
                    <rect x="173" y="343" rx="10" ry="10" width="31" height="27" />
                    <rect x="34" y="96" rx="20" ry="20" width="200" height="198" />
                </ContentLoader>) : (<>
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
                        <img className={styles.button} onClick={onClickPlus} src={isAdd ? 'https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/btn-checked.svg' : 'https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/btn-remove.svg'} alt="plusButton" ></img>
                    </div>
                </>)
            }

        </div>
    )
}

export default Card