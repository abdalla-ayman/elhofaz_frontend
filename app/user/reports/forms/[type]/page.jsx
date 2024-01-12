import Link from "next/link";
import Daily from "../../../../components/ui/forms/Daily";
import Ard from "../../../../components/ui/forms/Ard";
import Repeats from "../../../../components/ui/forms/Repeats";

export default async function ReportForm({ params: { type } }) {
	const forms = {
		daily: Daily,
		annual: Ard,
		intense: Repeats,
		repeated: Repeats,
	};

	const ReportForm = forms[type];
	return (
		<div className="container flex justify-center items-center text-center">
			<ReportForm />
		</div>
	);
}
