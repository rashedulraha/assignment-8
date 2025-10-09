import React, { useState } from "react";
import Container from "../../Components/Container";
import useProduct from "../../Hook/useProduct";
import AppsCard from "../../Components/AppsCard/AppsCard";
import Skeleton from "../../Components/LoadingSpiner/Skeleton";

const Apps = () => {
  const { product, loading, error } = useProduct();
  const [searchApp, setSearchApps] = useState("");

  const readyToSearch = searchApp.trim().toLocaleLowerCase();

  const searchProducts = readyToSearch
    ? product.filter((singApps) =>
        singApps.title.toLocaleLowerCase().includes(readyToSearch)
      )
    : product;

  return (
    <Container>
      <div className="my-8 sm:my-10 md:my-12 lg:my-16">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center space-y-3 sm:space-y-4">
          <h2>Our All Applications</h2>
          <p className="text-zinc-500 font-normal text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 sm:mt-8 md:mt-10 lg:mt-12 gap-4 sm:gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold capitalize">
              Apps Found{" "}
              <span className="font-normal">({searchProducts.length})</span>
            </h3>
          </div>
          <div className="w-full sm:w-auto">
            <label className="input flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 w-full max-w-md">
              <svg
                className="h-4 sm:h-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={searchApp}
                onChange={(e) => setSearchApps(e.target.value)}
                type="search"
                className="grow text-sm sm:text-base bg-transparent focus:outline-none"
                placeholder="Search Apps"
              />
              <kbd className="kbd kbd-sm hidden sm:inline-flex">⌘</kbd>
              <kbd className="kbd kbd-sm hidden sm:inline-flex">K</kbd>
            </label>
          </div>
        </div>

        {/* All product container */}
        {loading ? (
          <Skeleton count={20} />
        ) : (
          <div className="mt-5 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {searchProducts.map((singProduct) => (
              <AppsCard key={singProduct.id} singProduct={singProduct} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Apps;
