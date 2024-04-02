import React from 'react';
import styles from './styles.module.scss';
import remove from '../../img/btn-remove.svg';
import Info from '../info/info';
import { useState } from 'react';


function Drawer({ onClose, items = [], onRemove }) {
    const[isOrderComplite, setIsOrderComplite] = useState(false);

    const onClickOrder = ()=> {
        setIsOrderComplite(true) 
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.title}>
                    <h2>Корзина</h2>
                    <img className={styles.btnRemuve} onClick={onClose} src={remove} alt="btn-remove" />
                </div>
                {
                    items.length > 0 ? (
                        <div>
                            <div className={styles.items}>
                            {items.map((obj, index) => (
                                <div key={index} className={styles.cartItem}>
                                    <img src={obj.img} alt="img" style={{ width: '100px', height: '100px', borderRadius: '20px' }}></img>
                                    <div>
                                        <p>{obj.name}</p>
                                        <b>{obj.price}р/день</b>
                                    </div>
                                    <img className={styles.btnRemuve} onClick={()=>onRemove(obj.id)} src={remove} alt="btn-remove" />
                                </div>
                            ))}
                        </div>
                        <div className={styles.itemsButton}>
                        <ul className={styles.cardTotalBlok}>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>500р</b>
                            </li>
                            <li>
                                <span>Доставка:</span>
                                <div></div>
                                <b>1000р</b>
                            </li>
                        </ul>
                        <button onClick={onClickOrder}>Оформить заказ</button>
                    </div>
                        </div>
                    )
                : (
                    <Info title="Корзина пустая" description="Добавьте хотябы одну позицию для оформления заказа" img="https://github.com/Archakov06/react-sneakers/blob/master/public/img/empty-cart.jpg?raw=true" />
                )
                
            }
                
            </div>
        </div>
    )
}
export default Drawer