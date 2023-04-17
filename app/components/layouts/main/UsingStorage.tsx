function UsingStorage() {
  return (
    <div className="flex lg:col-span-2 items-center justify-between rounded-md shadow-xl bg-white px-6 py-8 border-[1px] border-gray-200">
      <div className="space-y-4 w-full">
        <p className="text-sm">
          Using Storage <span className="font-semibold">1775.06 MB</span> of 2GB
        </p>
        <div className="relative bg-blue-100 w-full h-2 rounded-full">
          <div className="absolute top-0 left-0 w-full h-2 flex space-x-1">
            <span className="bg-blue-500 w-[40%] h-2 rounded-l-full"></span>
            <span className="bg-cyan-500 w-[20%] h-2"></span>
            <span className="bg-green-500 w-[20%] h-2"></span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="flex rounded-full w-[10px] h-[10px] bg-blue-500"></span>
            <span>Regular</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex rounded-full w-[10px] h-[10px] bg-cyan-500"></span>
            <span>System</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex rounded-full w-[10px] h-[10px] bg-green-500"></span>
            <span>Shared</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex rounded-full w-[10px] h-[10px] bg-blue-100"></span>
            <span>Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsingStorage;
