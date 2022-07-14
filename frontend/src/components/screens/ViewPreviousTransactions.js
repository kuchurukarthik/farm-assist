import { useEffect, useState } from "react";
import { RESPONSE_CODES, RETAILER_SEED } from "../../Constants";
import { farmerTransactionsColumns } from "../../RenderableData";
import { getAllYields } from "../../RestCalls";
import BasicTable from "../generic/Table";

function ViewPreviousTransactions(props) {
  const [transactions, setTransactions] = useState([]);

  const getSaleValue = (yData) => {
    let quantity = yData.quantity;
    if (yData.quotes) {
      let quote = yData.quotes?.filter(
        (quote) => yData.buyer === quote.retailerId
      );
      if (quote.length > 0) {
        let price = quote[0].price;
        return price * quantity;
      }
    }

    return "Data Not Available";
  };

  const getYields = async () => {
    const result = await getAllYields();
    if (result.status === RESPONSE_CODES.SUCCESS) {
      let data = result.data.filter(
        (yields) =>
          yields.seller === Number(localStorage.getItem("sellerId")) &&
          !yields.available
      );
      console.log("yields", result.data);
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          data[i] = {
            ...data[i],
            buyer: RETAILER_SEED + data[i].buyer,
            saleValue: getSaleValue(data[i]),
          };
        }
        setTransactions(data);
      }
      console.log("filtered", data);
    }
  };

  useEffect(() => {
    getYields();
  }, []);
  return (
    <div>
      <BasicTable columns={farmerTransactionsColumns} data={transactions} />
    </div>
  );
}

export default ViewPreviousTransactions;
