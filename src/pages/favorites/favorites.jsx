import Card from "../../components/card";
import styles from "./styles.module.scss";

function Favorits({ items, onFavorite }) {
    const handleFavorite = (id) => {
        const existingIndex = items.findIndex(item => item.id === id);
        if (existingIndex !== -1) {
            const updatedItems = [...items];
            updatedItems.splice(existingIndex, 1);
            onFavorite(updatedItems);
        }
    };

    return (
        <div>
            <h1 className={styles.title}>Мои закладки</h1>
            <div className={styles.list}>
                {items.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            id={item.id}
                            name={item.name}
                            character={item.character}
                            price={item.price}
                            img={item.img}
                            onFavorite={() => handleFavorite(item.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default Favorits;