import { useEffect, useState } from "react";
import { RESPONSE_CODES } from "../../Constants";
import { farmerYieldColumns } from "../../RenderableData";
import { getAllYields } from "../../RestCalls";
import BasicTable from "../generic/Table";

function ViewYields(props) {
  const [yields, setYields] = useState([]);
  useEffect(() => {
    getYields();
  }, []);

  const getYields = async () => {
    const result = await getAllYields();
    if (result.status === RESPONSE_CODES.SUCCESS) {
      let rows = result.data;
      if (localStorage.getItem("role").toLowerCase() === "farmer") {
        rows = result.data.filter(
          (yields) =>
            yields.seller === Number(localStorage.getItem("sellerId")) &&
            yields.available === true
        );
      }
      console.log("yields", result.data);
      let data=rows;
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i] = {
            ...data[i],
            available: data[i].available ? "Available" : "Sold",
          };
        }
        setYields(data);
      }
      console.log("filtered", data);
    }
  };

  return (
    <div>
      <BasicTable columns={farmerYieldColumns} data={yields} />
    </div>
  );
}

export default ViewYields;
