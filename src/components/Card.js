import unlikedImage from '../img/unlikedImage.svg';
import plusButton from '../img/btn-plus.svg';
import '../index.scss'

function Card (props){
    return(
<div className="card">
    <div className="favarit">
        <img src={unlikedImage} alt="unliked"></img>
    </div>
    <img src={props.img} alt="foto" style={{ width: '200px', height: '200px', borderRadius: '20px' }}></img>
    <h5>{props.name}</h5>
    <p>{props.character}</p>
    <div className="cardButton">
        <div className="cardButtonPrice">
            <span>Цена:</span>
            <b>{props.price}р/день</b>
        </div>
        <button className="button">
            <img src={plusButton} style={{ width: '11px', height: '11px' }} alt="plusButton" ></img>
        </button>
    </div>
</div>
    )
}

export default Card