// import React from 'react';

const Product = ({ search }) => {
  const NameP = search;
  console.log(NameP);
  return (
    <>
      {search?.map((product, index) => (
        <div
          className="w-[250px] h-auto hover:box hover:duration-200 cursor-pointer rounded-sm text-white bg-gray-900"
          key={index}
        >
          <div className="flex mt-5 items-center justify-center country_img">
            <img src={product.img} />
          </div>
          <div className="p-[20px]">
            <h3>{product.name.split(" ").slice(0, 10).join(" ")}</h3>
            <h6 className="mt-3">Price : ${product.price}</h6>
            <h6>Category :{product.category} </h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
