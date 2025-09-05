import { Trophy, Lightbulb, BarChart3 } from "lucide-react";
import MetricCard from "@/component/metric-card";
// import { ModeToggle } from "@/component/mode-toggle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const DefensiveEfficiencyDashboard = () => {
  return (
    <>
      <div className="min-h-screen p-6 flex justify-center items-center">
        <div className="max-w-5xl w-full">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="text-base text-primary font-semibold dark:text-white">
                  🛡️ Defensive Efficiency
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* Info Box */}
              <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg p-3 mb-5 text-sm dark:text-slate-300 flex items-start gap-2">
                <Lightbulb className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                <span className="text-md leading-relaxed">
                  Strong defense prevents runs and creates opportunities. Better
                  fielding teams make fewer mistakes and turn more double plays,
                  directly impacting game outcomes.
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <MetricCard
                  title="Defensive Runs Saved (DRS)"
                  seaValue="+4"
                  seaLabel="SEA"
                  tbValue="+14"
                  tbLabel="TB"
                  context="Higher is better - runs saved vs average"
                  seaWidth={22}
                  tbWidth={78}
                />

                <MetricCard
                  title="Ultimate Zone Rating (UZR)"
                  seaLabel="SEA"
                  seaValue="+2.1"
                  tbLabel="TB"
                  tbValue="+6.9"
                  context="Runs above average by defense"
                  seaWidth={23}
                  tbWidth={77}
                />

                <MetricCard
                  title="Fielding Percentage"
                  seaLabel="SEA"
                  seaValue=".978"
                  tbLabel="TB"
                  tbValue=".989"
                  seaDisplayValue=".978"
                  tbDisplayValue=".989"
                  context="Successful plays without errors"
                  seaWidth={49.7}
                  tbWidth={50.3}
                />

                <MetricCard
                  title="Team Errors"
                  seaLabel="SEA"
                  seaValue="60"
                  tbLabel="TB"
                  tbValue="46"
                  context="Lower is better - season total"
                  seaWidth={56.6}
                  tbWidth={43.4}
                  higherIsBetter={false}
                />
              </div>

              {/* Advantage Section */}
              <div className="bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 rounded-lg p-5 text-center mb-5">
                <div className="text-sm font-semibold text-emerald-400 mb-3 flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>Defensive Advantage</span>
                </div>
                <div className="text-2xl font-bold dark:text-white mb-3">
                  TAMPA BAY RAYS
                </div>
                <div className="text-sm dark:text-slate-300 leading-relaxed">
                  <strong>
                    TB defense significantly better across all metrics.
                  </strong>
                  <br />
                  They save 10 more runs than SEA (+14 vs +4 DRS), commit 14
                  fewer errors (46 vs 60), and have superior fielding percentage
                  (.989 vs .978). This defensive edge could limit opponent
                  scoring opportunities and provide extra outs in crucial
                  situations.
                </div>
              </div>

              {/* Breakdown Section */}
              <div className="dark:bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 mb-4">
                <div className="text-sm font-semibold dark:text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>What This Means</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "TB turns more batted balls into outs",
                    "SEA more prone to defensive mistakes",
                    "TB's +14 DRS is elite level defense",
                    "Could impact close, low-scoring games",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm dark:text-slate-300"
                    >
                      <span className="text-emerald-400">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 sm:gap-5 justify-start sm:justify-center pt-4 border-t border-slate-700/50 text-xs dark:text-slate-400">
                <div>
                  <strong>DRS:</strong> Defensive Runs Saved (above average)
                </div>
                <div>
                  <strong>UZR:</strong> Ultimate Zone Rating (fielding range)
                </div>
                <div>
                  <strong>Fielding %:</strong> Plays made without errors
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </>
  );
};

export default DefensiveEfficiencyDashboard;
