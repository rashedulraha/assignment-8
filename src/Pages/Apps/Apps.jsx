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
      <div className="my-8 md:my-11">
        <div className="text-lg md:text-2xl lg:text-4xl font-semibold text-center space-y-3">
          <h2>Our All Applications</h2>
          <p className="text-zinc-500 font-normal text-lg  ">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex items-center justify-between mt-5 md:mt-11">
          <div>
            <h3 className=" text-lg capitalize font-bold">
              apps found{" "}
              <span className="font-normal"> ( {searchProducts.length})</span>
            </h3>
          </div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
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
                className="grow"
                placeholder="Search Apps"
              />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
        </div>

        {/*  all product container */}

        {loading ? (
          <Skeleton count={20} />
        ) : (
          <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
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
