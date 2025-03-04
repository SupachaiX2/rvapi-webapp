import ProductList from "./components/ProductList";

function App(){
  return(
    <div>
      <h1>ร้านค้า</h1>
      <ProductList apiUrl={"http://localhost:5142/"}/>
    </div>
  )
}