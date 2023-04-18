import React from "react";
import BestSellingProductsList from "./BestSellingProductsList";
import BestSellingProductsItem from "./BestSellingProductsItem";
import productImage1 from '../../../../assets/images/12.png'
import productImage2 from '../../../../assets/images/10.png'
import productImage3 from '../../../../assets/images/11.png'
import productImage4 from '../../../../assets/images/14.png'
import productImage5 from '../../../../assets/images/13.png'

function BestSellingProducts() {
  return (
    <div className="flex col-span-2 items-center justify-between  rounded-md shadow-xl bg-gray-100 border-[1px] border-gray-200">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-sm font-medium">Best Selling Products</h3>
          <h4 className="text-sm font-normal">Revenue ($3333)</h4>
          <h4 className="text-sm font-normal">Revenue ($)</h4>
        </div>
        <div className="bg-white cursor-pointer">
         <BestSellingProductsItem title="Raven Pro" image={productImage1} subtitle="Landing" price="$1311" percent="39%" />
         <BestSellingProductsItem title="Boots4" image={productImage2} subtitle="Portfolio" price="$860" percent="26%" />
         <BestSellingProductsItem title="Falcon" image={productImage3} subtitle="Admin" price="$539" percent="16%" />
         <BestSellingProductsItem title="Slick" image={productImage4} subtitle="Builder" price="$343" percent="10%" />
         <BestSellingProductsItem title="Reign Pro" image={productImage5} subtitle="Agency" price="$280" percent="8%" />
        </div>
        <div className="flex items-center justify-between px-6 p-1 cursor-pointer">
          <BestSellingProductsList />
          <button className="bg-white text-sm p-1 px-3 border-2 border-gray-200 hover:shadow-lg shadow-black font-medium rounded-md">View All</button>
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
