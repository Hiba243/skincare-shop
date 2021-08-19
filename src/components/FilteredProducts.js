import './FilteredProducts.css'
import Product from './Product'
import { useParams } from "react-router-dom";
import useProducts from './use-products';

function FilteredProducts() {
  const params = useParams();
  const products = useProducts();

  let filteredList;
  filteredList = products.filter((product) => product.category.toLowerCase().includes(params.filterTag));

  return (
    <div className="filteredProducts section-padding">
      <div className="filteredProducts__heading">Search results for "{params.filterTag}"</div>
      <div className="home__row">
        {filteredList?.map(item => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            amount={item.amount}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default FilteredProducts
