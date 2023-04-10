import { useState } from "react";
import ProductList from "./ProductList"

const Products = () => {
    const [products] = useState([
        { id: 1, name: "OFF-WHITE x NIKE Jordan 4 White Sail", price: "299.99$" },
        { id: 2, name: "Product",price: "299.99$"},

    ])


return(
    <div>
        <ProductList products={products}/>
    </div>
)
}

export default Products;