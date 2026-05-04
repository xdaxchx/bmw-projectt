import { NavLink } from "react-router-dom";
import { links } from "./data/links";
export default function Links() {
  return (
    <div className="nav-left">
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
