import DotsMenu from "../../common/DotsMenu";

function TopProducts() {
  return (
    <div className="flex h-60 mt-4 lg:mt-0 rounded-md overflow-hidden shadow-xl bg-white dark:bg-[#162231] border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-sm font-medium">Top Products</h3>
          <div className="flex space-x-4">
            <button className="text-sm  text-blue-500 hover:underline hover:text-blue-600">
              View Details
            </button>
            <DotsMenu />
          </div>
        </div>
        <div className="bg-white dark:bg-[#121E2D] cursor-pointer space-y-4 flex items-center justify-center h-full">نمودار</div>
      </div>
    </div>
  );
}

export default TopProducts;
