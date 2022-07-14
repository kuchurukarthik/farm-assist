import { useEffect, useState } from "react";
import { RESPONSE_CODES } from "../../Constants";
import { farmerColumns, traderColumns } from "../../RenderableData";
import { getAllTraders } from "../../RestCalls";
import BasicTable from "../generic/Table";

function ViewAllFarmers(props) {
  const [farmers, setFarmers] = useState([]);
 
  const fetchFarmers = async () => {
    const result = await getAllTraders();
    if (result.status === RESPONSE_CODES.SUCCESS) {
      setFarmers(result.data);
    }
  };
  useEffect(() => {
    fetchFarmers();
  }, []);

  console.log(farmers);

  return (
    <div>
      <BasicTable columns={farmerColumns} data={farmers} />
    </div>
  );
}

export default ViewAllFarmers;
