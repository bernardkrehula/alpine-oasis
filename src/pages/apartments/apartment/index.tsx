import "./index.css";

const Apartment = ({ apartment }) => {
  const { id, capacity, price, discount, img } = apartment;
  
  return (
    <div className="apartment" id={id}>
      <div className="apartment-block">
        <img src={img}/>
        <span>{id}</span>
      </div>
      <div className="capacity">
        <span>Fits up to {capacity} guests</span>
      </div>
      <div className="price">
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="discount">
        <span>${discount.toFixed(2)}</span>
      </div>
    </div>
  );
};
export default Apartment;
