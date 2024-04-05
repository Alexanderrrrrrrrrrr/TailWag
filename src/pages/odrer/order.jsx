import React, { useContext } from 'react';
import Card from "../../components/card";
import styles from "./styles.module.scss";
import { AppContext } from '../../App';

function Order() {
    const { cartItems } = useContext(AppContext);

    return (
        <div>
            <h1 className={styles.title}>Мои покупки</h1>
            <div className={styles.list}>
                {[].map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
                        name={item.name}
                        character={item.character}
                        price={item.price}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Order;