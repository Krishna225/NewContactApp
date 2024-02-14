import { Link, useLocation } from "react-router-dom";
import user from "../images/user.png";

function ContactDetail() {
  const location = useLocation();
  const { name, email } = location.state;
  return (
    <div>
      <div>
        <img src={user} alt="users" />
      </div>
      <div>
        <div>{name}</div>
        <div>{email}</div>
      </div>
      <Link to="/contactlist">
        <button>Back to Contactlist</button>
      </Link>
    </div>
  );
}
export default ContactDetail;
