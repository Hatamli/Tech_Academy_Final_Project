import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  removeLike
} from "../../redux/features/indexSlice";
import { TableHead } from "@mui/material";

export default function Likes() {
  const dispatch = useDispatch();
  const [likes, setlikes] = useState([]);
  const getItems = () => {
    setlikes(
      JSON.parse(
        localStorage.getItem("likes")
          ? localStorage.getItem("likes")
          : "[]"
      )
    );
  };
  useEffect(() => {
    getItems();
  }, []);

  const removeOrder = (item) => {
    dispatch(removeLike(item.id));
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
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {likes.length > 0 ? (
            likes.map((item) => (
              <TableRow
                key={item.uniqueId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <button
                    className="text-red-600"
                    onClick={() => removeOrder(item)}
                  >
                    <DeleteForeverIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Your didn't like any products.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
