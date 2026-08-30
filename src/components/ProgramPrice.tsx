import { REVIEW_PROGRAMS, type ReviewProgramKey } from "@/seo/schema";

type ProgramPriceProps = {
  program: ReviewProgramKey;
  className?: string;
};

const formatPhp = (price: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);

const ProgramPrice = ({ program, className = "" }: ProgramPriceProps) => {
  const details = REVIEW_PROGRAMS.find((item) => item.key === program);
  if (!details) return null;

  return (
    <p
      className={`mx-auto flex w-fit items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur-sm ${className}`}
    >
      <span className="text-white/75">Program fee</span>
      <strong className="font-display text-base">{formatPhp(details.price)}</strong>
    </p>
  );
};

export default ProgramPrice;
