import styles from './styles.module.scss';
import remove from '../../img/btn-remove.svg';

function Drawer({ onClose, items = [], onRemove }) {
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
                        <button>Оформить заказ</button>
                    </div>
                        </div>
                    )
                : (
                    <div className={styles.empty}>
                    <img src='https://github.com/Archakov06/react-sneakers/blob/master/public/img/empty-cart.jpg?raw=true' alt='img'></img>
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотябы одну позицию для оформления заказа</p>
                    <button className={styles.greenButton} onClick={onClose}>
                        <img src='https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/arrow.svg' alt='img'></img>
                        Вернуться назад</button>
                </div>
                )
                
            }
                
            </div>
        </div>
    )
}
export default Drawer