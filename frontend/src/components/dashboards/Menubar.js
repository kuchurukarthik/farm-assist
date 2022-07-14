import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultRoutes } from "../../AppRoutes";
import { menubar } from "../../Styles";
import { createYieldFields } from "../../RenderableData";
import axios from "axios";
import { RESPONSE_CODES } from "../../Constants";

function Menubar(props) {
  console.log("menu ", props);
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate(DefaultRoutes[0].path);
  };

  const createYield = async () => {
    let body = {
      productName,
      quantity,
      postedPrice: price,
      seller: localStorage.getItem('sellerId'),
      available: true,

    }
    const response = await axios.post('http://localhost:8080/yield/create', body);
    if(response.status === RESPONSE_CODES.SUCCESS){
      console.log('created successfully');
      alert('yeild created, check your yield list for product');
      setOpenDialog(false);
    }else{
      alert('Failed to create yield, check browser logs for issue');
      console.log(response.statusText, response.status);
    }
  }

  return (
    <div style={menubar.layout}>
      {props.user.role === "farmer" && (
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Add Yield
        </Button>
      )}
      <IconButton onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          Name: {props.user.name ? props.user.name : ""}
        </MenuItem>
        <MenuItem onClick={handleClose}>Email: {props.user.email}</MenuItem>
        <MenuItem onClick={handleClose}>Role: {props.user.role}</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Add Yield</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="productName"
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            style={{margin:'8px 0px'}}
          />
          <TextField
            id="postedPrice"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{margin:'8px 0px'}}
            type="number"
          />
          <TextField
            id="quantity"
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{margin:'8px 0px'}}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => createYield()}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Menubar;
