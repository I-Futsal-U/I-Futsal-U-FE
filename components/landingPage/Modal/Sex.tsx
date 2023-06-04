function Sex() {
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2">성별</h2>
      <ul className="text-lg pb-3 font-medium">
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="male"
            id="male"
            className="scale-150 mr-4"
          />
          <label htmlFor="male">남자</label>
        </li>
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="female"
            id="female"
            className="scale-150 mr-4"
          />
          <label htmlFor="female">여자</label>
        </li>
        <li className="border-solid border-b px-3 pb-3 py-2 my-5">
          <input
            type="checkbox"
            name="all"
            id="all"
            className="scale-150 mr-4"
          />
          <label htmlFor="all">남녀 모두</label>
        </li>
      </ul>
    </>
  );
}

export default Sex;
