export const RadioButtonFilter = ({ items }) => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="font-bold font-montserrat flex gap-4">
          <input className="scale-150" type="radio" name="category" />
          {item}
        </li>
      ))}
    </ul>
  );