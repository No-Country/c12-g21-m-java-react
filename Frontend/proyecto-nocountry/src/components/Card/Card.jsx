import './card-style.css'
const Card = ({title, description, img}) => {
  return (
      <div className="card-container mb-5">
          <div className="card-text">
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