import CustomerTickets from "../Customer-Tickets/Customer-Tickets";
import SelactatTickets from "../Selactat-Tickets/Selactat-Tickets";

export default function Tickets({
  resolvedTickets,
  handleSelectTicket,
  selectedTickets,
  handleCompleteTicket,
}) {
  return (
    <div className="w-11/12 mx-auto my-8 gap-4 flex">
      <CustomerTickets
        handleSelectTicket={handleSelectTicket}
      ></CustomerTickets>
      <SelactatTickets
        resolvedTickets={resolvedTickets}
        handleCompleteTicket={handleCompleteTicket}
        selectedTickets={selectedTickets}
      ></SelactatTickets>
    </div>
  );
}
