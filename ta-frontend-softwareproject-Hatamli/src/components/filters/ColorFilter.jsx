export const ColorFilter = ({ colors }) => (
    <ul className="space-y-2">
      {colors.map((color, index) => (
        <li key={index} className="flex gap-4 items-center font-bold font-montserrat">
          <div className={`rounded-full w-[20px] h-[20px]`} style={{backgroundColor:color.code}}></div>
          {color.name}
        </li>
      ))}
    </ul>
  );
  