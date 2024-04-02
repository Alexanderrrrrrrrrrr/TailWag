import React from 'react'
import styles from './styles.module.scss';
import { AppContext } from '../../App';


const Info = ({ img, title, description, }) => {
    const { setCardOpened } = React.useContext(AppContext)
    return (
        <div className={styles.empty}>
            <img src={img} alt='img'></img>
            <h2>{title}</h2>
            <p>{description}</p>
            <button className={styles.greenButton} onClick={() => setCardOpened(false)}>
                <img src='https://raw.githubusercontent.com/Archakov06/react-sneakers/019a5194ed0e93295298a624ba3aa222ee617533/public/img/arrow.svg' alt='img'></img>
                Вернуться назад</button>
        </div>
    )
}
export default Info