import React from "react";
import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container";
import useProduct from "../../Hook/useProduct";
import AppsCard from "../../Components/AppsCard/AppsCard";
import { Link } from "react-router";
import Skeleton from "../../Components/LoadingSpiner/Skeleton";

const Home = () => {
  const { product, loading, error } = useProduct();

  const featuredProduct = product.slice(0, 8);

  return (
    <div>
      <Banner />

      <Container>
        <div className="mt-10 md:mt-20">
          <div className="space-y-4  text-center ">
            <h2 className="text-5xl font-bold text-zinc-900"> Trending Apps</h2>
            <p className="text-[#627382] text-lg font-normal">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
        </div>

        {/* trending app container */}

        {loading ? (
          <Skeleton />
        ) : (
          <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {featuredProduct.map((singProduct) => (
              <AppsCard key={singProduct.id} singProduct={singProduct} />
            ))}
          </div>
        )}

        <div className="my-5 md:my-10 flex items-center justify-center">
          <Link to={"apps"}>
            <h2 className="text-lg capitalize text-center btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none ">
              show all
            </h2>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
