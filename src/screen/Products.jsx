import React from 'react';
import styled from "styled-components";
import{ FilterSection, ProductList, Sort } from "../Components";
import { useProductContext } from "../Context/ProductContaxt";
import { HashLoader } from "react-spinners";
// import { useFilterContext } from "./context/filter_context";
// import { useFilterContext } from "../Context/filter_context";


const Products = () => {
  const { isLoading} = useProductContext();

  // const { filter_products } = useFilterContext();
  // console.log('first', filter_products)
  if (isLoading) {
    return (
      <HashLoader
        color="#CDCBCF"
        size={70}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      />
    );
  }
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;