import { Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function MinimumSupportPrice(props) {
  const [val, setVal] = useState("");
  return (
    <div>
      <Typography style={{ padding: "16px" }}>
        Date: {new Date().toDateString()}
      </Typography>
      <Typography style={{ padding: "16px" }}>
        Minimum Support Price: {localStorage.getItem("msp")} Rs
      </Typography>
      {localStorage.getItem("role")?.toLowerCase() === "admin" && (
        <>
          <TextField
            type="number"
            label="Min Support Price"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            size="small"
          />
          <Button variant="contained" onClick={(e) => localStorage.setItem(val)}>Update</Button>
        </>
      )}
    </div>
  );
}

export default MinimumSupportPrice;
