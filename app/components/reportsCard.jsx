import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ReportCard = ({ title, subtitle, content, btnText }) => {
  return (
    <div class="flex flex-col rounded-3xl report-card">
      <div class="px-6 py-8 sm:p-10 sm:pb-6">
        <div class="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 class="text-lg text-center font-medium tracking-tighter text-gray-600 lg:text-3xl">
              {title}
            </h2>
            <p class="mt-2 text-center text-sm text-gray-500">{subtitle}</p>
          </div>
          <div class="mt-6">
            <p>
              <span class="text-5xl text-center font-light tracking-tight text-black">
                {content}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex px-6 pb-8 sm:px-8">
        <a
          aria-describedby="tier-company"
          class=" report_btn flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          href="#">
          <ArrowForwardIcon /> {btnText}
        </a>
      </div>
    </div>
  );
};

export default ReportCard;
