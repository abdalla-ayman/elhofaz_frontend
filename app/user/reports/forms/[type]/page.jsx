import Link from "next/link";
import Daily from "../../../../components/ui/forms/Daily";
import BeginnerDailyForm from "../../../../components/ui/forms/Daily_Beginner";
import Ard from "../../../../components/ui/forms/Ard";
import Repeats from "../../../../components/ui/forms/Repeats";

export default async function ReportForm({ params: { type } }) {
  const forms = {
    daily: Daily,
    daily_beginer: BeginnerDailyForm,
    repeated: Repeats,
    ard: Ard,
  };

  const ReportForm = forms[type];
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <div style={{ padding: "50px" }}>
        <ReportForm />
      </div>
    </div>
  );
}
