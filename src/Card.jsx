import './Card.css'

function Card(props) {
    return (
        <div className='column'>
            <img className='card-img' src={props.avatar} alt='article' width={200} height={200} />
            <h3>{props.name} </h3>
            <p> {props.description}</p>
            <p>{props.rating}</p>
        </div>
    )
}

export default Card