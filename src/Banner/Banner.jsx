import vector1 from "../Assets/vector1.png";
import vector2 from "../Assets/vector2.png";
export default function Banner({ selectedTickets, resolvedTickets }) {
  return (
    <div className="w-11/12 mt-8 mx-auto grid gap-5 lg:grid-cols-2 md:grid-cols-2">
      <div
        className="relative w-full h-48 rounded-md overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `
             linear-gradient(to right, #632EE3, #9F62F2),
             url(${vector2})
           `,
        }}
      >
        <img
          className="absolute left-0 bottom-0 w-1/2"
          src={vector1}
          alt="left vector"
        />
        <img
          className="absolute right-0 bottom-0 w-1/2 scale-x-[-1]"
          src={vector1}
          alt="right vector"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <h2 className="text-lg">In-Progress</h2>
          <p className="text-4xl font-bold">{selectedTickets.length}</p>
        </div>
      </div>
      <div
        className="relative w-full h-48 rounded-md overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `
             linear-gradient(to right, #54CF68, #00827A),
             url(${vector2})
           `,
        }}
      >
        <img
          className="absolute left-0 bottom-0 w-1/2"
          src={vector1}
          alt="left vector"
        />
        <img
          className="absolute right-0 bottom-0 w-1/2 scale-x-[-1]"
          src={vector1}
          alt="right vector"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <h2 className="text-lg">Resolved</h2>
          <p className="text-4xl font-bold">{resolvedTickets.length}</p>
        </div>
      </div>
    </div>
  );
}
