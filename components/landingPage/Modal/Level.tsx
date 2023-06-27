export default function Level() {
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2">레벨</h2>
      <ul className="text-lg leading-5 pb-3 font-medium">
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="semi-pro"
            id="semi-pro"
            className="scale-150 mr-4"
          />
          <label htmlFor="semi-pro">세미 프로</label>
        </li>
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="amateur"
            id="amateur"
            className="scale-150 mr-4"
          />
          <label htmlFor="amateur">아마추어</label>
        </li>
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="general"
            id="general"
            className="scale-150 mr-4"
          />
          <label htmlFor="general">일반</label>
        </li>
      </ul>
    </>
  );
}
