import PropTypes from 'prop-types'
const Card = ({bikeData}) => {
const {type, modale, image, price} = bikeData || {};
console.log(bikeData);
    return (
        <>
<div className="card bg-base-100 w-fit shadow-xl mx-5">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{type}</h2>
    <h3 className="card-title font-thin">{modale}</h3>
    <p>Smart Meets Style</p>
    <p>price:${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    );
};

Card.Proptypes ={
    bikeData: PropTypes.object.isRequired,
}
export default Card;