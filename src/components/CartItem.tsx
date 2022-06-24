import React from "react";
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();

  return (
    <>
      <Stack direction="horizontal"></Stack>
    </>
  );
};

export default CartItem;
