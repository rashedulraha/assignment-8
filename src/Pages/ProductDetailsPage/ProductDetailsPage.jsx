import React from "react";
import { useParams } from "react-router";
import useProduct from "../../Hook/useProduct";
import Container from "../../Components/Container";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product } = useProduct();
  const findProduct = product.find(
    (singProduct) => String(singProduct.id) === id
  );

  return (
    <>
      <Container>
        <div className="py-10 md:py-14">
          <ProductDetails findProduct={findProduct} />
        </div>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
