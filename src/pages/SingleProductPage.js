import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { Loading, Error, ProductImages, AddToCart, Stars } from "../components";
import { Wrapper } from "../styles/SingleProductPage.styles";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const url = "https://course-api.com/react-store-single-product?id=";
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  if (singleProductLoading) {
    return <Loading />;
  }
  if (singleProductError) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;
  return (
    <div>
      <Wrapper>
        <div className="section section-center page">
          <Link to="/products" className="btn">
            Back to products
          </Link>
          <div className="product-center ">
            <ProductImages images={images} />
            <section className="content">
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className="price">{price}</h5>
              <p className="desc">{description}</p>
              <p className="info">
                <span>Available: </span>
                {stock > 0 ? stock : "out of stock"}
              </p>
              <p className="info">
                <span>SKU: </span>
                {sku}
              </p>
              <p className="info">
                <span>Brand: </span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </section>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SingleProductPage;
