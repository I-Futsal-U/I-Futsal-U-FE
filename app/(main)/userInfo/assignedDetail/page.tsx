import Result from "@/components/assignedDetailPage/Result";
import Calendar from "@/components/common/Calendar/Calendar";

function AssignedMatchPage() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Calendar />
      <Result />
    </div>
  );
}

export default AssignedMatchPage;
