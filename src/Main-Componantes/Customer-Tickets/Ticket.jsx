export default function Ticke({ ticket, handleSelectTicket }) {
  return (
    <div>
      <div
        onClick={() => handleSelectTicket(ticket)}
        className="shadow-md cursor-pointer border p-2 space-y-1 rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="text-md font-bold">{ticket.title}</h1>
          <button
            className={`rounded-full text-white px-2 text-xs ${
              ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            }`}
          >
            {ticket.status}
          </button>
        </div>
        <p className="text-xs text-gray-400">{ticket.description}</p>
        <div className="flex justify-between items-center text-xs">
          <h6>{ticket.id}</h6>
          <h4
            className={`${
              ticket.priority === "High"
                ? "text-red-500"
                : ticket.priority === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {ticket.priority}
          </h4>
          <h5>{ticket.customerName}</h5>
          <span>
            <i class="fa-regular fa-calendar"></i>
            {ticket.date}
          </span>
        </div>
      </div>
    </div>
  );
}
