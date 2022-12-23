import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort } from "../components";
import Product from "../components/Product";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <Wrapper className="page">
      <div className="products section-center">
        <ProductList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ProductsPage;
