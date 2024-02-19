import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
} from "../../redux/features/indexSlice";
import { TableHead } from "@mui/material";

export default function Cart() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  function parsePrice(priceStr) {
    return parseFloat(priceStr.replace("$", ""));
  }
  const getItems = () => {
    setOrders(
      JSON.parse(
        localStorage.getItem("products")
          ? localStorage.getItem("products")
          : "[]"
      )
    );
    setTotalPrice(
      orders.reduce((acc, product) => {
        const price = parsePrice(product.price);
        const quantity = product.quantity;
        return acc + price * quantity;
      }, 0)
    );
  };
  useEffect(() => {
    getItems();
  }, []);

  const incrementQuantity = (item) => {
    dispatch(addToCart(item));
    getItems();
  };

  const decrementOrderQuantity = (item) => {
    console.log(item);
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
    getItems();
  };
  const removeOrder = (item) => {
    dispatch(removeFromCart(item.id));
    getItems();
  };
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ maxWidth: 1050, margin: "50px auto" }}
        aria-label="cart table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length > 0 ? (
            <>
              {orders.map((item) => (
                <TableRow
                  key={item.uniqueId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => decrementOrderQuantity(item)}>
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => incrementQuantity(item)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="text-red-600"
                      onClick={() => removeOrder(item)}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Total price: ${totalPrice.toFixed(2)}
                </TableCell>
              </TableRow>
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Your cart is empty.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
