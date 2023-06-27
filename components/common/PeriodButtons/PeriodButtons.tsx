import Button from "./Button";
import Layout from "./layout";

export default function PeriodButtons() {
  const days = [1, 3, 7];
  const months = [1, 3, 6, 12];

  return (
    <Layout title="기간별 검색">
      <div className="flex flex-wrap gap-3 ">
        {days.map((e) => (
          <Button key={`${e} days`} value={`${e}일`} period={`${e}days`} />
        ))}
        {months.map((e) => (
          <Button key={`${e} months`} value={`${e}개월`} period={`{e}months`} />
        ))}
      </div>
    </Layout>
  );
}
