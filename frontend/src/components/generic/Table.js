import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { RETAILER_SEED } from "../../Constants";

export default function BasicTable(props) {
  const rows = props.data;

  const handleClick = async (row)=> {
    console.log('update user',row);
    let body = {...row};
    body.verified = true;
    body.id = body.id - RETAILER_SEED;
   const result = await axios.put('http://localhost:8080/traders/update',body);
   if(result.status === 200){
    //alert('update success');
    console.log('update success');
    await props.updateData();
   } else{
    alert('Update operation failed, check console for logs');
   }

  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column) => (
              <TableCell>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {props.columns.map((column) => (
                <TableCell>{"" + row[column.columnId]}</TableCell>
              ))}
              {props.renderButtons && row.verified === false && (
                <TableCell>
                  <Button variant="contained" onClick={()=>handleClick(row)}>Verify</Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
