export default function ResolvedTask({ resolvedTickets }) {
  return (
    <div className="mt-8">
      <h3 className="font-bold mb-4 text-gray-700">Resolved Task</h3>
      <div className="space-y-2">
        {resolvedTickets.map((t, index) => (
          <div
            key={index}
            className="p-4 bg-blue-50 rounded-lg font-medium shadow-sm"
          >
            {t.title}
          </div>
        ))}
        {resolvedTickets.length === 0 && (
          <p className="text-gray-400 italic">No tasks resolved yet.</p>
        )}
      </div>
    </div>
  );
}
