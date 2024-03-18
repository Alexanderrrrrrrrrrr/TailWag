import '../index.scss'
import remove from '../img/btn-remove.svg';
function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина</h2>
                <div className="items">
                    <div className="cartItem">
                        <img src="https://img.freepik.com/premium-photo/a-hairless-cat-with-a-gray-hairless-mane-and-a-black-background_31965-76822.jpg" alt="" style={{ width: '100px', height: '100px', borderRadius: '20px' }}></img>
                        <div>
                            <p>Кошка Луна</p>
                            <b>500р/день</b>
                        </div>
                        <img className="btnRemuve" src={remove} alt="btn-remove" />
                    </div>
                    <div className="cartItem">
                        <img src="https://img.freepik.com/premium-photo/a-hairless-cat-with-a-gray-hairless-mane-and-a-black-background_31965-76822.jpg" alt="" style={{ width: '100px', height: '100px', borderRadius: '20px' }}></img>
                        <div>
                            <p>Кошка Луна</p>
                            <b>500р/день</b>
                        </div>
                        <img className="btnRemuve" src={remove} alt="btn-remove" />
                    </div>
                </div>
                <div className="itemsButton">
                    <ul className="cardTotalBlok">
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
        </div>
    )
}
export default Drawer