import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

type MetricCardProps = {
  title: string;
  seaValue: string;
  tbValue: string;
  seaLabel?: string;
  tbLabel?: string;
  context: string;
  seaWidth: number; // Percentage width for SEA bar (0-100)
  tbWidth: number; // Percentage width for TB bar (0-100)
  higherIsBetter?: boolean; // Default true
  seaDisplayValue?: string; // Optional display value for SEA
  tbDisplayValue?: string; // Optional display value for TB
};

const MetricCard = ({
  title,
  seaValue,
  tbValue,
  seaLabel,
  tbLabel,
  context,
  seaWidth,
  tbWidth,
  higherIsBetter,
  seaDisplayValue,
  tbDisplayValue,
}: MetricCardProps) => {
  const seaBetter = higherIsBetter
    ? parseFloat(seaValue) > parseFloat(tbValue)
    : parseFloat(seaValue) < parseFloat(tbValue);
  const tbBetter = !seaBetter;

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <CardContent>
        <div className="text-xl font-semibold font-[--inter-font] dark:text-white mb-4 text-center">
          {title}
        </div>

        <div className="flex justify-center items-center gap-5 mb-3">
          <div className="flex-1">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              {seaLabel}
            </div>
            <div
              className={`text-2xl font-bold font-[--inter-font] ${
                seaBetter
                  ? "text-emerald-400"
                  : tbBetter
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {seaDisplayValue || seaValue}
            </div>
          </div>
          <span className="text-xl text-muted-foreground font-semibold font-[--inter-font]">
            vs
          </span>
          <div className="flex-1 text-end">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-normal font-[--inter-font]">
              {tbLabel}
            </div>
            <div
              className={`text-2xl font-bold font-[--inter-font] ${
                tbBetter
                  ? "text-emerald-400"
                  : seaBetter
                  ? "text-red-400"
                  : "text-white"
              }`}
            >
              {tbDisplayValue || tbValue}
            </div>
          </div>
        </div>

        <div className="h-6 bg-slate-800/50 rounded overflow-hidden flex mt-3">
          <div
            className={`h-full bg-gradient-to-r from-teal-700 to-teal-500 flex items-center justify-center text-white text-xs font-semibold transition-all duration-500 ease-out ${
              animated ? `w-[${seaWidth}%]` : "w-0"
            }`}
            style={{ width: animated ? `${seaWidth}%` : "0%" }}
          >
            {seaWidth > 20 && (seaDisplayValue || seaValue)}
          </div>
          <div
            className={`h-full bg-gradient-to-r from-blue-800 to-blue-500 flex items-center justify-center text-white text-xs font-semibold transition-all duration-500 ease-out ${
              animated ? `w-[${tbWidth}%]` : "w-0"
            }`}
            style={{ width: animated ? `${tbWidth}%` : "0%" }}
          >
            {tbWidth > 20 && (tbDisplayValue || tbValue)}
          </div>
        </div>

        <div className="text-base text-muted-foreground font-normal font-[--inter-font] mt-2 text-center ">
          {context}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
