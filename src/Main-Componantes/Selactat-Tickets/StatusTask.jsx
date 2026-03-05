export default function StatusTask({ handleCompleteTicket, selectedTickets }) {
  return (
    <div>
      <h3 className="font-bold mb-4">
        Selected Tickets ({selectedTickets.length})
      </h3>
      <div className="space-y-3">
        {selectedTickets.map((t, index) => (
          <div key={index} className="p-3 border rounded-lg shadow-sm">
            <h4 className="text-sm font-bold mb-2">{t.title}</h4>
            <button
              onClick={() => handleCompleteTicket(t)}
              className="btn w-full bg-[#02A53B] text-white text-xs"
            >
              Complete
            </button>
          </div>
        ))}
        {selectedTickets.length === 0 && (
          <p className="text-gray-400 text-sm italic">
            No tickets selected yet.
          </p>
        )}
      </div>
    </div>
  );
}
