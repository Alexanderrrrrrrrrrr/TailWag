import '../index.scss'


function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img src="https://cdn.icon-icons.com/icons2/644/PNG/512/green_pets_icon-icons.com_59415.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                <div className="headerInfo">
                    <h3 className="headerInfo_title">TailWag Rentals</h3>
                    <p className="headerInfo_text">Хвостатая Аренда</p>
                </div>
            </div>
            <ul className="headerRight">
                <li className="headerRightItem">
                    <img className="headerRightImg" src="https://cdn.icon-icons.com/icons2/1570/PNG/512/3507742-cart-ecommerce-grocery-iconoteka-shop-shopping-store_107693.png" alt="Bear" style={{ width: '18px', height: '18px' }} />
                    <span className="prise">1205 руб</span>
                </li>
                <li>
                    <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="Bear" style={{ width: '18px', height: '18px' }} />
                </li>
            </ul>
        </header>
    )
}
export default Header