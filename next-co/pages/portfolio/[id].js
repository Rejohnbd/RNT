import { useRouter } from "next/router";

function PortfoliProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.id

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfoliProjectPage;
