import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

// get cart in local storage

// let getLocalCartData = () => {
//   let localCartData = localStorage.getItem("ImranStore_Cart");
//   if (localCartData == []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// }
let getLocalCartData = () => {
  let localCartData = localStorage.getItem("ImranStore_Cart");
  // Check if localCartData is null or undefined and return an empty array in that case
  // return localCartData ?  [] : JSON.parse(localCartData);
  return localCartData ? JSON.parse(localCartData) : [];
}


const initialState = { 
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

// increment and decrement the quantity

const setDecrease = (id) => {
  dispatch({ type: "SET_DECREMENT", payload: id });
}
const setIncrease = (id) => {
  dispatch({ type: "SET_INCREMENT", payload: id });
}


// to remove the individually item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

// to clear cart

const clearCart = () => {
  dispatch({ type: "CLEAR_CART"});
}



// to add the data in localStorage
// get vs set

useEffect(() => {
  // dispatch({ type: "CART_TOTAL_ITEM" });
  // dispatch({ type: "CART_TOTAL_PRICE" });
  dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
  localStorage.setItem("ImranStore_Cart", JSON.stringify(state.cart))
},[state.cart]) // if the state.cart changes, then it will update the localStorage

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem ,clearCart , setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };