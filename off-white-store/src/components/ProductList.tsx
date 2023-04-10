interface Product {
    id: number;
    name: string;
    price: string;
  }
  
  interface ProductListProps extends React.PropsWithChildren<{}> {
    products: Product[];
  }

const ProductList = (props: ProductListProps) =>{
    const products = props.products;


return(
    <>
        <div className="flex justify-evenly">
            {products.map((products) =>(
                <div key={products.id}>
                    <h2>{products.name}</h2>
                    <p>{products.price}</p>
                </div>
            ))}
        </div>
    </>
)
}
export default ProductList