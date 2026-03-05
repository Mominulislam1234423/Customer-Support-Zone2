import { useState } from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Tickets from "./Main-Componantes/Tickets/Tickets";
import Navber from "./Navbar/Navber";
import "./styles.css";

export default function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleSelectTicket = (t) => {
    setSelectedTickets([...selectedTickets, t]);
  };

  const handleCompleteTicket = (tickat) => {
    const remainingSelected = selectedTickets.filter((t) => t.id !== tickat.id);
    setSelectedTickets(remainingSelected);

    setResolvedTickets([...resolvedTickets, tickat]);
  };

  return (
    <div className="App">
      <Navber></Navber>
      <Banner
        resolvedTickets={resolvedTickets}
        selectedTickets={selectedTickets}
      ></Banner>
      <Tickets
        resolvedTickets={resolvedTickets}
        handleSelectTicket={handleSelectTicket}
        selectedTickets={selectedTickets}
        handleCompleteTicket={handleCompleteTicket}
      ></Tickets>
      <Footer></Footer>
    </div>
  );
}
