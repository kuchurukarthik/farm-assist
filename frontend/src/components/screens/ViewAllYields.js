import { useEffect, useState } from "react";
import { FARMER_SEED, PRODUCT_SEED, RESPONSE_CODES, RETAILER_SEED } from "../../Constants";
import { farmerColumns, traderColumns, yieldColumns } from "../../RenderableData";
import { getAllTraders, getAllYields } from "../../RestCalls";
import BasicTable from "../generic/Table";

function ViewAllYields(props) {
  const [yields, setYields] = useState([]);
  
  const formatYields = (data) => {
    let rows = data;
    for(let i=0; i<rows.length; i++){
      let row = rows[i];
      row.productid = row.productid + PRODUCT_SEED;
      row.seller = row.seller + FARMER_SEED;
      row.buyer = row.buyer + RETAILER_SEED;
      row.available = row.available?"Available":"Sold";
    }
    return data;
  }
  const fetchYields = async () => {
    const result = await getAllYields();
    if (result.status === RESPONSE_CODES.SUCCESS) {

      setYields(formatYields(result.data));
    }
  };
  useEffect(() => {
    fetchYields();
  }, []);

  console.log(yields);

  return (
    <div>
      <BasicTable columns={yieldColumns} data={yields} />
    </div>
  );
}

export default ViewAllYields;
