
function ProductCard({img, name, price, children}) {
  return (
  <div>
   <img src={img} alt={name} />
   <h2>{name}</h2>
   <p>{price}</p>
   <div> {children} </div>

  </div>


);


}

export default ProductCard;