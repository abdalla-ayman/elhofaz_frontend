import Link from "next/link";
import { getReports } from "../../../application-api/http/reports";
import ReportStatusIcon from "../../components/ui/ReportStatusIcon";
import ReportsTableOptions from "../../components/ui/ReportsTableOptions";
import AddReportOptions from "../../components/ui/AddReportOptions";
import SortReportOptions from "../../components/ui/SortReportOptions";
import FilterReportOptions from "../../components/ui/FilterReportOptions";
import { reportTypes } from "../../constants";

export default async function ReportsTable({ searchParams }) {
	const {
		page = 1,
		page_size = 5,
		sort_by = "created_at",
		sort_direction = "desc",
		status,
		type,
	} = searchParams;

	const params = {
		page,
		page_size,
		sort_by,
		sort_direction,
		status,
		type,
	};
	const data = await getReports(params);
	const { list: reports, total } = data;
	const hasPrev = page > 1;
	const pagesCount = Math.ceil(total / page_size);
	const hasNext = page < pagesCount;

	const headers = ["التاريخ", "الحالة", "المعلم", "النوع", "الخيارات"];
	return (
		<div>
			<div className="mt-14 p-4 bg-white dark:bg-gray-900 flex justify-start">
				<div className="ml-2">
					<AddReportOptions />
				</div>
				<div className="ml-2">
					<SortReportOptions params={params} />
				</div>
				<div className="ml-2">
					<FilterReportOptions params={params} />
				</div>
			</div>
			<table className="w-full text-sm text-center dark:text-gray-400" dir="rtl">
				<thead className="text-xs uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{headers.map((header) => (
							<th key={header} scope="col" className="py-3 px-6">
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{reports.map((report) => (
						<tr key={report.id} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200">
							<th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
								{new Date(report.reported_at).toISOString().substring(0, 10)}
							</th>
							<td className="py-3 px-6 flex justify-center justify-items-center content-center text-center">
								<ReportStatusIcon status={report.status} />
							</td>
							<td className="py-4 px-6">{report.teacher}</td>
							<td className="py-4 px-6">{reportTypes[report.type]}</td>
							<td className="py-4 px-6 cursor-pointer flex justify-center justify-items-center content-center text-center">
								<ReportsTableOptions report={report} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<nav className="m-1">
				<ul className="flex justify-center items-center w-full inline-flex -space-x-px text-base h-10">
					<li>
						<Link
							href={hasPrev ? `/user/reports?${new URLSearchParams({ ...params, page: +page - 1 })}` : "#"}
							className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg ${
								hasPrev
									? "text-gray-500 bg-white hover:bg-gray-700"
									: "cursor-not-allowed text-black bg-gray-500 hover:bg-gray-100"
							}`}
						>
							السابق
						</Link>
					</li>
					{Array.from({ length: pagesCount }).map((_, pageNumber) => (
						<li key={pageNumber}>
							<Link
								href={`/user/reports?${new URLSearchParams({ ...params, page: pageNumber + 1 })}`}
								className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>
								{pageNumber + 1}
							</Link>
						</li>
					))}
					<li>
						<Link
							href={hasNext ? `/user/reports?${new URLSearchParams({ ...params, page: +page + 1 })}` : "#"}
							className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg ${
								hasNext
									? "text-gray-500 bg-white hover:bg-gray-700"
									: "cursor-not-allowed text-black bg-gray-500 hover:bg-gray-100"
							}`}
						>
							التالي
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
