import './card-style.css'
const Card = ({title, description, img}) => {
  return (
      <div className="main-container">
          <div className="main-description">
              <h1>{title}</h1>
              <p>{description}</p>
          </div>
          <div className="main-image">
              <img src={img} alt="FOTO"></img>
          </div>
      </div>
  )
}

export default Card