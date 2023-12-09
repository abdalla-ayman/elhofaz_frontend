import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const ReportCard = ({ title, subtitle, content, btnText, btnLink }) => {
  return (
    <div class=" rounded-2xl report-card" style={{ marginBottom: 10 }}>
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-center">
          <div>
            <h2 class="text-lg font-medium text-gray-600 lg:text-3xl">
              {title}
            </h2>
            <p class="mt-2 text-sm text-gray-500">{subtitle}</p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl font-light tracking-tight text-black">
                {content}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex px-6 pb-8 sm:px-8">
        <Link
          aria-describedby="tier-company"
          class=" report_btn flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href={`${btnLink}`}>
          <ArrowForwardIcon /> {btnText}
        </Link>
      </div>
    </div>
  );
};

export default ReportCard;
