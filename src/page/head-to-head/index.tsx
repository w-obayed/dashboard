import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lightbulb, BarChart3, Calendar } from "lucide-react";
import RecordCard from "@/component/head-to-head-component/team-record";

// TypeScript interfaces
interface TeamRecord {
  tbWins: number;
  seaWins: number;
  title: string;
  context: string;
  seaIsWinner?: boolean;
  tbIsWinner?: boolean;
}

interface VenueRecord {
  name: string;
  icon: string;
  tbWins: number;
  seaWins: number;
  avgRuns: number;
  gamesPlayed: number;
}

interface TotalStat {
  label: string;
  value: string;
  context: string;
}

interface RecentGame {
  date: string;
  tbScore: number;
  seaScore: number;
  winner: "TB" | "SEA";
  totalRuns: number;
  overUnder: "O" | "U";
}

interface Insight {
  value: string;
  label: string;
}

const HeadToHeadHistoryDashboard: React.FC = () => {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const teamRecords: TeamRecord[] = [
    {
      tbWins: 1,
      seaWins: 3,
      title: "2025 Season",
      context: "Seattle leading current season",
      seaIsWinner: true,
    },
    {
      tbWins: 13,
      seaWins: 11,
      title: "Last 3 Years",
      context: "TB slight edge historically",
      tbIsWinner: true,
    },
  ];

  const venueRecords: VenueRecord[] = [
    {
      name: "George M. Steinbrenner Field (TB)",
      icon: "🏟️",
      tbWins: 1,
      seaWins: 0,
      avgRuns: 12.0,
      gamesPlayed: 1,
    },
    {
      name: "T-Mobile Park (SEA)",
      icon: "🏟️",
      tbWins: 5,
      seaWins: 8,
      avgRuns: 9.4,
      gamesPlayed: 13,
    },
  ];

  const totalStats: TotalStat[] = [
    {
      label: "Avg Total Runs",
      value: "9.0",
      context: "Per game",
    },
    {
      label: "O/U Record (9.0)",
      value: "11-11",
      context: "50% Over",
    },
    {
      label: "Extra Innings",
      value: "1",
      context: "Out of 24 games",
    },
  ];

  const recentGames: RecentGame[] = [
    {
      date: "Sep 01",
      tbScore: 10,
      seaScore: 2,
      winner: "TB",
      totalRuns: 12,
      overUnder: "O",
    },
    {
      date: "Aug 10",
      tbScore: 3,
      seaScore: 6,
      winner: "SEA",
      totalRuns: 9,
      overUnder: "O",
    },
    {
      date: "Aug 10",
      tbScore: 4,
      seaScore: 7,
      winner: "SEA",
      totalRuns: 11,
      overUnder: "O",
    },
    {
      date: "Aug 09",
      tbScore: 2,
      seaScore: 3,
      winner: "SEA",
      totalRuns: 5,
      overUnder: "U",
    },
  ];

  const insights: Insight[] = [
    {
      value: "42%",
      label: "High Scoring (11+ runs)",
    },
    {
      value: "29%",
      label: "Low Scoring (≤6 runs)",
    },
    {
      value: "3-1",
      label: "Last 4 went OVER 8.5",
    },
  ];

  const VenueCard: React.FC<{ venue: VenueRecord }> = ({ venue }) => {
    const tbLeader = venue.tbWins > venue.seaWins;
    const seaLeader = venue.seaWins > venue.tbWins;

    return (
      <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-5 text-center backdrop-blur-sm">
        <div className="text-2xl mb-2">{venue.icon}</div>
        <div className="text-xs font-semibold text-white mb-4">
          {venue.name}
        </div>
        <div className="flex justify-center items-center gap-6 mb-3">
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">
              TB
            </span>
            <span
              className={`text-3xl font-bold ${
                tbLeader ? "text-emerald-400" : "text-white"
              }`}
            >
              {venue.tbWins}
            </span>
          </div>
          <span className="text-lg text-slate-500">-</span>
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">
              SEA
            </span>
            <span
              className={`text-3xl font-bold ${
                seaLeader ? "text-emerald-400" : "text-white"
              }`}
            >
              {venue.seaWins}
            </span>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-700/50">
          <div className="text-sm text-slate-300 mb-1">
            Avg:{" "}
            <span className="font-semibold text-white">{venue.avgRuns}</span>{" "}
            runs/game
          </div>
          <div className="text-xs text-slate-400">
            {venue.gamesPlayed} game{venue.gamesPlayed !== 1 ? "s" : ""} played
          </div>
        </div>
      </div>
    );
  };

  const GameItem: React.FC<{ game: RecentGame }> = ({ game }) => (
    <div className="flex justify-between items-center p-2.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/8 transition-colors">
      <span className="text-xs text-slate-400 min-w-12">{game.date}</span>
      <span className="flex-1 text-sm text-slate-300 mx-3 font-medium">
        {game.winner === "TB" ? (
          <>
            <span className="text-emerald-400 font-semibold">
              TB {game.tbScore}
            </span>
            , SEA {game.seaScore}
          </>
        ) : (
          <>
            TB {game.tbScore},{" "}
            <span className="text-emerald-400 font-semibold">
              SEA {game.seaScore}
            </span>
          </>
        )}
      </span>
      <span className="text-xs text-slate-400 min-w-20 text-right">
        {game.totalRuns} runs
      </span>
      <span
        className={`w-6 h-6 rounded ml-2 flex items-center justify-center text-xs font-bold ${
          game.overUnder === "O"
            ? "bg-emerald-400 text-slate-950"
            : "bg-red-500 text-white"
        }`}
      >
        {game.overUnder}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen  dark:text-white p-10 flex justify-center items-center">
      <div className="max-w-5xl w-full">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-base font-semibold dark:text-white">
                🤝 Head-to-Head History
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Info Box */}
            <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg p-3 mb-5 text-sm dark:text-slate-300 flex items-start gap-2">
              <Lightbulb className="text-emerald-400 w-5 h-5 flex-shrink-0" />
              <span className="text-base leading-relaxed">
                Historical matchups reveal patterns. Seattle leads 3-1 in 2025,
                but the series is nearly even over 3 years (13-11 TB). Games
                average exactly 9.0 runs.
              </span>
            </div>

            {/* Records Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {teamRecords.map((record, index) => (
                <RecordCard key={index} record={record} />
              ))}
            </div>

            {/* Venue Records */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {venueRecords.map((venue, index) => (
                <VenueCard key={index} venue={venue} />
              ))}
            </div>

            {/* Totals Section */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-5 mb-5">
              <div className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Betting Totals Analysis</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {totalStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                      {stat.label}
                    </div>
                    <div
                      className={`text-2xl font-bold text-white mb-1 transition-all duration-300 ${
                        animated
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-80"
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500">{stat.context}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Games */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-5 mb-5">
              <div className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Recent Matchups</span>
              </div>
              <div className="flex flex-col gap-2">
                {recentGames.map((game, index) => (
                  <GameItem key={index} game={game} />
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 border border-emerald-400/20 rounded-lg p-4">
              <div className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Key Insights</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {insights.map((insight, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-xl font-bold text-white mb-1 transition-all duration-300 ${
                        animated
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-80"
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {insight.value}
                    </div>
                    <div className="text-xs text-slate-300">
                      {insight.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeadToHeadHistoryDashboard;
