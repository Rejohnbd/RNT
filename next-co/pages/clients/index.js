import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "rahat", name: "Rahat" },
    { id: "rejohn", name: "Rejohn" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
