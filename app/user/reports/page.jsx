import Link from "next/link";
import { getReports } from "../../../application-api/http/reports";
import ReportStatusIcon from "../../components/ui/ReportStatusIcon";
import ReportsTableOptions from "../../components/ui/ReportsTableOptions";
import AddReportOptions from "../../components/ui/AddReportOptions";
import SortReportOptions from "../../components/ui/SortReportOptions";
import FilterReportOptions from "../../components/ui/FilterReportOptions";
import { reportTypes } from "../../constants";

export default async function ReportsTable({ searchParams }) {
	const { page = 1, page_size = 5, sort_by = "created_at", sort_direction = "desc", status, type } = searchParams;

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
			<div className="mt-14 p-4 bg-white flex justify-start">
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
			<table className="w-full text-sm text-center" dir="rtl">
				<thead className="text-xs uppercase bg-[#53421F] text-white">
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
						<tr key={report.id} className="bg-[#B5AA9D] border-b border-[#53421F] hover:bg-gray-200">
							<th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
								{new Date(report.reported_at).toISOString().substring(0, 10)}
							</th>
							<td className="py-3 px-6 flex justify-center justify-items-center content-center text-center">
								<ReportStatusIcon status={report.status} />
							</td>
							<td className="py-4 px-6">{report.teacher}</td>
							<td className="py-4 px-6 text-white">{reportTypes[report.type]}</td>
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
									? "text-white bg-[#53421F] hover:bg-white hover:text-[#53421F]"
									: "cursor-not-allowed text-white bg-gray-400"
							}`}
						>
							{hasPrev ? (
								"السابق"
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="text-white w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							)}
						</Link>
					</li>
					{Array.from({ length: pagesCount }).map((_, pageNumber) => (
						<li key={pageNumber}>
							<Link
								href={`/user/reports?${new URLSearchParams({ ...params, page: pageNumber + 1 })}`}
								className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-[#53421F] hover:bg-white hover:text-[#53421F] border border-gray-300"
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
									? "text-white bg-[#53421F] hover:bg-white hover:text-[#53421F]"
									: "cursor-not-allowed text-black bg-gray-500 hover:bg-gray-100"
							}`}
						>
							{hasNext ? (
								"التالي"
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="text-white w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							)}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
