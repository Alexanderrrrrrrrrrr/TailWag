import React from 'react';
import styles from './styles.module.scss';
import remove from '../../img/btn-remove.svg';
import Info from '../info/info';
import { useState } from 'react';
import { AppContext } from '../../App';


function Drawer({ onClose, items = [], onRemove }) {
    const { setCartItems, cartItems, setOrder } = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    const[isOrderComplite, setIsOrderComplite] = useState(false);

    const {onRemoveItem}= React.useContext(AppContext)

    const onClickOrder = ()=> {
        setIsOrderComplite(true) 
        setOrder(cartItems)
        setCartItems([])
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
                                <b>{totalPrice}р</b>
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
                    <Info title={isOrderComplite ? "Заказ оформлен" : "Корзина пустая"} 
                    description={isOrderComplite ? "Ваш заказ №18 уже собираеться к вам " : "Добавьте хотябы одну позицию для оформления заказа"} 
                    img={isOrderComplite ? "https://github.com/Archakov06/react-sneakers/blob/master/public/img/complete-order.jpg?raw=true" : "https://github.com/Archakov06/react-sneakers/blob/master/public/img/empty-cart.jpg?raw=true"} />
                )
                
            }
                
            </div>
        </div>
    )
}
export default Drawer