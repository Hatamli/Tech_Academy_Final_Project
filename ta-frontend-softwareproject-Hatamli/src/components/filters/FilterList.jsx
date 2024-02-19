export const FilterList = ({ items, bold }) => (
    <ul className={`space-y-2 ${bold ? "font-bold" : ""}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );