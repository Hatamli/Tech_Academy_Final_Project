import { Link } from "react-router-dom";

export const FooterNavList = ({ title, links }) => (
  <ul className="flex flex-col gap-2">
    <li className="mb-2 font-montserrat font-bold text-[16px]">{title}</li>
    {links.map((link) => (
      <li key={link.text} className="text-[14px] font-libre">
        <Link to={link.path}>{link.text}</Link>
      </li>
    ))}
  </ul>
);
