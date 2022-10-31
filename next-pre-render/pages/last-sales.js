import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data, error } = useSWR(
  //   "https://nextjs-course-89834-default-rtdb.firebaseio.com/sales.json",
  //   fetcher
  // );

  // useEffect(() => {
  //   if (data) {
  //     const tranformedSales = [];

  //     for (const key in data) {
  //       tranformedSales.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }

  //     setSales(tranformedSales);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-course-89834-default-rtdb.firebaseio.com/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const tranformedSales = [];

  //       for (const key in data) {
  //         tranformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSales(tranformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (error) {
  //   return <p>Failed to load.</p>;
  // }

  if (!sales) {
    return <p>Loading...</p>;
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

export async function getStaticProps(context) {
  const response = await fetch(
    "https://nextjs-course-89834-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const tranformedSales = [];

  for (const key in data) {
    tranformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: tranformedSales } };
}

export default LastSalesPage;
