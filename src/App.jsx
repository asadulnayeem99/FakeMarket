import { useState } from "react";
import fakedata from "./components/Fake/fakedata.json";
import Nav from "./components/Nav";
import Product from "./components/Product";
const App = () => {
  // const first = fakedata.slice(0, 10);
  const [products, setProducts] = useState(fakedata);
  const [search, setSearch] = useState(fakedata);
  console.log(products);

  const filter = (e) => {
    const val = e.target.value;
    const filterData = products.filter((product) =>
      product.name.toLowerCase().includes(val.toLowerCase())
    );
    setSearch(filterData);
    return filterData;
  };

  return (
    <>
      <Nav filter={filter} />
      <div className=" p-10 flex flex-wrap gap-x-[2rem] gap-y-[2rem] bg-gray-950">
        {search.length <= 0 ? (
          <h1 className="text-red-700 m-auto">Not FOund</h1>
        ) : (
          <Product search={search} />
        )}
      </div>
    </>
  );
};

export default App;
