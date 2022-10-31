import { useEffect, useState } from "react";

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-89834-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const tranformedSales = [];

        for (const key in data) {
          tranformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(tranformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - Tk. {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
