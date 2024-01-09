import React from 'react';
import { useProductContext } from "../Context/ProductContaxt";
import { HashLoader } from "react-spinners";

const Cart = () => {

  
  const { isLoading } = useProductContext();

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
    <div style={{height:'100vh'}}>Cart</div>
  )
}

export default Cart