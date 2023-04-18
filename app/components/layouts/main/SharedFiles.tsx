import ShareFilesItem from "./ShareFilesItem";
import sharedImage1 from '../../../assets/images/5.png'
import sharedImage2 from '../../../assets/images/2.png'
import sharedImage3 from '../../../assets/images/zip.png'
import sharedImage4 from '../../../assets/images/3.png'
import sharedImage5 from '../../../assets/images/docs.png'


function SharedFiles() {
  return (
    <div className="flex mt-4 lg:mt-0 rounded-md overflow-hidden shadow-xl bg-white dark:bg-[#162231] border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-sm font-medium">Shared Files</h3>
          <button className="text-sm  text-blue-500 hover:underline hover:text-blue-600">View All</button>
        </div>
        <div className="bg-white dark:bg-[#121E2D] cursor-pointer space-y-4">
          <ShareFilesItem title="apple-smart" image={sharedImage1} subtitle="Antony" />
          <ShareFilesItem title="iphone.jpg" image={sharedImage4} subtitle="Antony" />
          <ShareFilesItem title="Falcon v1.8.2" image={sharedImage3} subtitle="Jane" />
          <ShareFilesItem title="iMac.jpg" image={sharedImage2} subtitle="Rowen" />
          <ShareFilesItem title="functions.php" image={sharedImage5} subtitle="John" />
        </div>
      </div>
    </div>
  );
}

export default SharedFiles;
