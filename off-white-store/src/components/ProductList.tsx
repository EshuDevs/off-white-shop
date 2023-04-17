interface Product {
    id: number;
    name: string;
    price: string;
  }
  interface ProductWithImageProps extends Product {
    image: string;
  }
  
  interface ProductListProps extends React.PropsWithChildren<{}> {
    products: ProductWithImageProps[];
  }

const ProductList = (props: ProductListProps) =>{
const products = props.products;


return(
    <>
        <div className="font-kanit pb-4 text-5xl font-bold mt-14 mx-44">Shoes</div>
        <div className="flex flex-wrap gap-12 justify-center my-10">
            {products.map((products) =>(
                <div key={products.id} className="p-6 mx-7 border-2 bg-gray-100 border-gray-600 border-solid w-1/6">
                    <div className="flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400 via-gray-900 to-black align-center justify-center">
                        <img src={products.image}/>
                    </div>
                    <h2 className="mt-12">{products.name}</h2>
                    <p className="mb-4">{products.price}</p>
                    <button className="my-4 rounded-lg p-2 font-inter bg-black font-semibold text-white border border-black">Add to Cart</button>
                </div>
            ))}
        </div>
    </>
)
}
export default ProductList