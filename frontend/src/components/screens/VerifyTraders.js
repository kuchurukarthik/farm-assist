import { useEffect, useState } from "react";
import { RESPONSE_CODES, RETAILER_SEED } from "../../Constants";
import { traderColumns, verifyTraderColumns } from "../../RenderableData";
import { getAllTraders } from "../../RestCalls";
import BasicTable from "../generic/Table";

function VerifyTraders(props) {
  const [traders, setTraders] = useState([]);

  const getUnverifiedUsers = (users) => {
    let unverified = users.filter((user) => user.verified === false);
    for (let i = 0; i < unverified.length; i++) {
      unverified[i] = {
        ...unverified[i],
        id: RETAILER_SEED + unverified[i].id,
        name: unverified[i].firstName + unverified[i].lastName,
      };
    }
    return unverified;
  };

  const fetchTraders = async () => {
    const result = await getAllTraders();
    if (result.status === RESPONSE_CODES.SUCCESS) {
      setTraders(getUnverifiedUsers(result.data));
    }
  };
  useEffect(() => {
    fetchTraders();
  }, []);

  console.log(traders);

  return (
    <div>
      <BasicTable columns={verifyTraderColumns} data={traders} renderButtons updateData={fetchTraders}/>
    </div>
  );
}

export default VerifyTraders;
