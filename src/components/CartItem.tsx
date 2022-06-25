import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {item && (
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex align-items-center"
        >
          <img
            src={item.images[0]}
            alt="Cart Item"
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
          <div className="me-auto">
            {item.title}
            {quantity > 1 ? (
              <span
                className="text-muted"
                style={{ fontSize: "0.7rem", marginLeft: "0.3rem" }}
              >
                x{quantity}
              </span>
            ) : null}
          </div>
          <div className="text-muted" style={{ fontSize: "0.7rem" }}>
            {formatCurrency(item.price)}
          </div>
          <div>{formatCurrency(item.price * quantity)}</div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromCart(item.id)}
          >
            &times;
          </Button>
        </Stack>
      )}
    </>
  );
};

export default CartItem;
