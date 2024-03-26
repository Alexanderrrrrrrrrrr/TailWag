import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link className={styles.blockLogo} to="/">
            <div className={styles.headerLeft}>
                <img src="https://cdn.icon-icons.com/icons2/644/PNG/512/green_pets_icon-icons.com_59415.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                <div className={styles.headerInfo}>
                    <h3 className={styles.headerInfo_title}>TailWag Rentals</h3>
                    <p className={styles.headerInfo_text}>Хвостатая Аренда</p>
                </div>
            </div>
            </Link>
            <ul className={styles.headerRight}>
                <li className={styles.headerRightItem} onClick={props.onClickCard}>
                    <img className={styles.headerRightImg} src="https://cdn.icon-icons.com/icons2/1570/PNG/512/3507742-cart-ecommerce-grocery-iconoteka-shop-shopping-store_107693.png" alt="Bear" style={{ width: '18px', height: '18px' }} />
                    <span className={styles.prise}>1205 руб</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img className={styles.headerRightImg} src="https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/heart.svg" alt="hard" style={{ width: '18px', height: '18px' }} />
                    </Link>
                </li>
                <li>
                    <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="Bear" style={{ width: '18px', height: '18px' }} />
                </li>
            </ul>
        </header>
    )
}
export default Header