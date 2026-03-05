import { useEffect, useState } from "react";
import Ticke from "./Ticket";

export default function CustomerTickets({ handleSelectTicket }) {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    fetch("customer.json")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);
  return (
    <div className="lg:w-2/3 md:w-2/3">
      <h3 className="text-xl font-bold">Customer Tickets</h3>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 md:grid-cols-2">
        {ticket.map((t) => (
          <Ticke handleSelectTicket={handleSelectTicket} ticket={t}></Ticke>
        ))}
      </div>
    </div>
  );
}
