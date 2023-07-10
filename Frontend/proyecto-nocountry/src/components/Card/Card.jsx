import './card-style.css'
const Card = ({title, description, img}) => {
  return (
      <div className="card-container">
          <div className="card-description">
              <h2 className='card-title'>{title}</h2>
              <p className='card-description'>{description}</p>
          </div>
          <div className="card-image">
              <img src={img} alt="FOTO"></img>
          </div>
      </div>
  )
}

export default Card