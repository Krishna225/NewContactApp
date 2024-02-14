import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <h1 style={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Contact Manager
      </h1>
      <Link to="/add" className="add">
        <button>Add Contact</button>
      </Link>
      <Link to="/contactlist" className="contactlist">
        <button>ContactList</button>
      </Link>
    </div>
  );
}
export default Home;
