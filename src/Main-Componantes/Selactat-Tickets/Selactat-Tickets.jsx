import ResolvedTask from "./ResolvedTask";
import StatusTask from "./StatusTask";

export default function SelactatTickets({
  resolvedTickets,
  selectedTickets,
  handleCompleteTicket,
}) {
  return (
    <div className="lg:w-1/3 md:w-1/3">
      <StatusTask
        selectedTickets={selectedTickets}
        handleCompleteTicket={handleCompleteTicket}
      ></StatusTask>
      <ResolvedTask resolvedTickets={resolvedTickets}></ResolvedTask>
    </div>
  );
}
