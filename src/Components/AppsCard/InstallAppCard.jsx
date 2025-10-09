import { Download } from "lucide-react";
import React from "react";
import { removeLocalStorageInstallApp } from "../../Utils/LocalStorage";

const InstallAppCard = ({ installApps }) => {
  const { image, size, ratingAvg, shortDescription, title, downloads, id } =
    installApps;
  console.log(installApps);

  const handleRemoveInstallApp = (id) => {
    removeLocalStorageInstallApp(id);
  };

  return (
    <>
      <div className="my-5 border border-primary flex  p-2 rounded-sm  gap-5">
        <div>
          <figure className="w-24 h-auto overflow-hidden rounded-sm">
            <img src={image} alt="install apps" />
          </figure>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold text-lg md:text-2xl ">{title}</h2>
              <p className="text-base text-gray-500">{shortDescription}</p>

              <div className="flex items-center gap-5 ">
                <span className="flex items-center gap-1 text-purple-600">
                  <Download size={18} /> {downloads}
                </span>
                <span className="flex items-center gap-1 text-yellow-400">
                  <Download size={18} /> {ratingAvg}
                </span>
                <span className="flex items-center gap-1 text-green-500">
                  <Download size={18} /> {size} MB
                </span>
              </div>
            </div>
            <button
              onClick={() => handleRemoveInstallApp(id)}
              className="btn capitalize bg-red-200 text-red-500"
            >
              uninstall
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallAppCard;
