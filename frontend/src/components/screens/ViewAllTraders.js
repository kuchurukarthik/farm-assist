import { useEffect, useState } from "react";
import { RESPONSE_CODES } from "../../Constants";
import { traderColumns } from "../../RenderableData";
import { getAllTraders } from "../../RestCalls";
import BasicTable from "../generic/Table";

function ViewAllTraders(props) {
  const [traders, setTraders] = useState([]);
  const fetchTraders = async () => {
    const result = await getAllTraders();
    if (result.status === RESPONSE_CODES.SUCCESS) {
      setTraders(result.data);
    }
  };
  useEffect(() => {
    fetchTraders();
  }, []);

  console.log(traders);

  return (
    <div>
      <BasicTable columns={traderColumns} data={traders} />
    </div>
  );
}

export default ViewAllTraders;
