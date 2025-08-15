import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- Type Definitions ---

interface Notification {
  id: number;
  message: string;
}

interface SidebarSport {
  id: number;
  icon: string;
  name: string;
  status: string;
  value: string;
  positive: boolean;
  active?: boolean;
}

interface TrendingItem {
  id: number;
  icon: string;
  name: string;
  status: string;
  value: string;
  positive: boolean;
}

interface KpiData {
  id: number;
  title: string;
  icon: string;
  value: string;
  change: string;
  positive: boolean;
}

interface Team {
  name: string;
  record: string;
  logo: string;
  score?: string;
}

interface Game {
  id: number;
  status: "live" | "scheduled";
  time: string;
  team1: Team;
  team2: Team;
  odds: string[];
  badge?: string;
}

interface WatchlistItem {
  id: number;
  name: string;
  details: string;
  odds: string;
}

const WiseSportsAIDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("🟢 Games");
  const [currentDate, setCurrentDate] = useState<string>("Mon, Jul 28");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Notification system
  const showNotification = (message: string): void => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 2500);
  };

  // Live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live updates (placeholder for actual implementation)
    }, 5000);

    // Welcome notification
    setTimeout(() => {
      showNotification("🚀 WiseSportsAI Pro dashboard loaded");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sidebarSports: SidebarSport[] = [
    {
      id: 1,
      icon: "⚾",
      name: "MLB",
      status: "15 games live",
      value: "+2.3%",
      positive: true,
      active: true,
    },
    {
      id: 2,
      icon: "🏀",
      name: "NBA",
      status: "Preseason",
      value: "-0.8%",
      positive: false,
    },
    {
      id: 3,
      icon: "🏈",
      name: "NFL",
      status: "Week 2",
      value: "+5.7%",
      positive: true,
    },
    {
      id: 4,
      icon: "🏒",
      name: "NHL",
      status: "Preseason",
      value: "+1.2%",
      positive: true,
    },
  ];

  const trendingItems: TrendingItem[] = [
    {
      id: 1,
      icon: "🏆",
      name: "World Series",
      status: "Futures",
      value: "+12.4%",
      positive: true,
    },
    {
      id: 2,
      icon: "⭐",
      name: "MVP Odds",
      status: "Player props",
      value: "+3.1%",
      positive: true,
    },
  ];

  const kpiData: KpiData[] = [
    {
      id: 1,
      title: "Games Today",
      icon: "🎮",
      value: "15",
      change: "+2 from yesterday",
      positive: true,
    },
    {
      id: 2,
      title: "Live Now",
      icon: "🔴",
      value: "2",
      change: "Active markets",
      positive: true,
    },
    {
      id: 3,
      title: "AI Confidence",
      icon: "🤖",
      value: "94%",
      change: "+3% accuracy",
      positive: true,
    },
    {
      id: 4,
      title: "Volume",
      icon: "📊",
      value: "$2.4M",
      change: "+18% volume",
      positive: true,
    },
  ];

  const games: Game[] = [
    {
      id: 1,
      status: "live",
      time: "6:35 PM",
      team1: {
        name: "Toronto Blue Jays",
        record: "62-61",
        logo: "🔷",
        score: "4",
      },
      team2: {
        name: "Baltimore Orioles",
        record: "67-58",
        logo: "🟠",
        score: "2",
      },
      odds: ["ML -145", "O 8.5", "-1.5"],
      badge: "AI Pick",
    },
    {
      id: 2,
      status: "scheduled",
      time: "6:40 PM",
      team1: { name: "Arizona Diamondbacks", record: "51-55", logo: "🔶" },
      team2: { name: "Detroit Tigers", record: "61-46", logo: "⭕" },
      odds: ["ML +120", "U 9.0", "+1.5"],
    },
    {
      id: 3,
      status: "live",
      time: "6:40 PM",
      team1: {
        name: "Colorado Rockies",
        record: "47-78",
        logo: "⚫",
        score: "1",
      },
      team2: {
        name: "Cleveland Guardians",
        record: "72-54",
        logo: "🔴",
        score: "3",
      },
      odds: ["ML -240", "O 7.5", "-2.5"],
    },
    {
      id: 4,
      status: "scheduled",
      time: "7:05 PM",
      team1: { name: "Tampa Bay Rays", record: "59-66", logo: "💙" },
      team2: { name: "New York Yankees", record: "71-54", logo: "🟦" },
      odds: ["ML +165", "O 8.5", "+1.5"],
      badge: "Hot Pick",
    },
    {
      id: 5,
      status: "scheduled",
      time: "7:10 PM",
      team1: { name: "Los Angeles Dodgers", record: "73-52", logo: "💙" },
      team2: { name: "Cincinnati Reds", record: "58-67", logo: "🔴" },
      odds: ["ML -175", "O 9.5", "-1.5"],
    },
    {
      id: 6,
      status: "scheduled",
      time: "7:40 PM",
      team1: { name: "Boston Red Sox", record: "63-62", logo: "🔴" },
      team2: { name: "Minnesota Twins", record: "68-57", logo: "⚪" },
      odds: ["ML +115", "O 8.0", "+1.5"],
    },
  ];

  const watchlistItems: WatchlistItem[] = [
    { id: 1, name: "Dodgers ML", details: "vs Padres • Tonight", odds: "-145" },
    {
      id: 2,
      name: "Yankees O 8.5",
      details: "vs Red Sox • 7:05 PM",
      odds: "+105",
    },
    {
      id: 3,
      name: "Braves -1.5",
      details: "vs Marlins • 7:20 PM",
      odds: "+115",
    },
    { id: 4, name: "World Series", details: "Dodgers Future", odds: "+275" },
  ];

  const tabs: string[] = [
    "🟢 Games",
    "🎯 Predictions",
    "🌤️ Weather",
    "📊 Props",
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans overflow-x-hidden">
      {/* Notifications */}
      <div className="fixed top-[70px] right-4 z-[1001] space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white/5 backdrop-blur-[20px] border border-green-400/20 rounded-md px-3 py-2 text-white text-xs font-medium shadow-lg animate-in slide-in-from-right-full duration-300 max-w-[250px]"
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="bg-white/5 backdrop-blur-[20px] border-b border-white/10 p-3 sticky top-0 z-[1000]">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-base font-bold text-white">
              <span className="text-xl text-green-400">⚡</span>
              WiseSportsAI Pro
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              Live Markets
            </div>
          </div>

          <nav className="hidden md:flex gap-1.5">
            {["Dashboard", "Analytics", "Portfolio", "Research", "Tools"].map(
              (item, idx) => (
                <div
                  key={item}
                  className={`px-3 py-1.5 rounded-md cursor-pointer text-xs font-medium transition-all ${
                    idx === 0
                      ? "bg-white/5 text-white border border-white/10"
                      : "text-white/70 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-xs hidden sm:block text-white/60 bg-white/5 px-2 py-1 rounded border border-white/10">
              Market Open • 15:42 EST
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center font-semibold border border-white/10 text-xs">
              JD
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white text-xl p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 bg-[#1a1f2e] backdrop-blur-[20px] border-b border-white/10 p-4 -m-3 mt-3">
            {["Dashboard", "Analytics", "Portfolio", "Research", "Tools"].map(
              (item, idx) => (
                <div
                  key={item}
                  className={`px-3 py-1.5 rounded-md cursor-pointer text-xs font-medium transition-all ${
                    idx === 0
                      ? "bg-white/5 text-white"
                      : "text-white/70 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </nav>
        )}
      </header>

      {/* Page Layout: Left Sidebar, Main Content, Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_300px] h-[calc(100vh-60px)] max-w-screen-2xl mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden lg:block bg-[#1a1f2e] border-r border-[#2a3441] overflow-y-auto p-5">
          <div className="space-y-6">
            {/* Live Markets */}
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-3">
                Live Markets
              </div>
              {sidebarSports.map((sport) => (
                <div
                  key={sport.id}
                  className={`flex justify-between items-center p-2.5 rounded-lg mb-1.5 cursor-pointer transition-all bg-white/5 border border-transparent hover:bg-white/8 hover:border-white/10 ${
                    sport.active ? "bg-green-400/10 border-green-400/20" : ""
                  }`}
                  onClick={() =>
                    showNotification(`Switched to ${sport.name} markets`)
                  }
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xs">
                      {sport.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-0.5">
                        {sport.name}
                      </h4>
                      <p className="text-xs text-white/60">{sport.status}</p>
                    </div>
                  </div>
                  <div
                    className={`text-xs font-semibold ${
                      sport.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {sport.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Trending */}
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-3">
                Trending
              </div>
              {trendingItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2.5 rounded-lg mb-1.5 cursor-pointer transition-all bg-white/5 border border-transparent hover:bg-white/8 hover:border-white/10"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xs">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-0.5">
                        {item.name}
                      </h4>
                      <p className="text-xs text-white/60">{item.status}</p>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-green-400">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="bg-[#0a0e1a] overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800 scrollbar-w-3 scrollbar-track-rounded-full scrollbar-thumb-rounded-full p-5">
          {/* Dashboard Header */}
          <Card className="bg-white/5 backdrop-blur-[10px] border-white/10 mb-5">
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <h1 className="text-lg font-bold text-white">
                  ⚾ MLB Dashboard
                </h1>
                <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:bg-white/8 hover:text-white p-1 h-auto"
                    onClick={() => {
                      setCurrentDate("Sun, Jul 27");
                      showNotification("Viewing yesterday's games");
                      setTimeout(() => setCurrentDate("Mon, Jul 28"), 3000);
                    }}
                  >
                    ‹
                  </Button>
                  <span className="text-xs font-semibold text-white min-w-[100px] text-center">
                    {currentDate}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:bg-white/8 hover:text-white p-1 h-auto"
                    onClick={() => {
                      setCurrentDate("Tue, Jul 29");
                      showNotification("Viewing tomorrow's games");
                      setTimeout(() => setCurrentDate("Mon, Jul 28"), 3000);
                    }}
                  >
                    ›
                  </Button>
                </div>
              </div>

              <div className="flex gap-1.5 flex-wrap">
                {tabs.map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "secondary"}
                    size="sm"
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-green-400 text-black border-green-400 hover:bg-green-500"
                        : "bg-white/5 text-white/70 border-white/10 hover:bg-white/8 hover:text-white"
                    }`}
                    onClick={() => {
                      setActiveTab(tab);
                      showNotification(`Switched to ${tab.split(" ")[1]} view`);
                    }}
                  >
                    {tab}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {kpiData.map((kpi) => (
              <Card
                key={kpi.id}
                className="bg-white/5 py-0 backdrop-blur-[10px] border-white/10 hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-400/20 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                      {kpi.title}
                    </div>
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-xs">
                      {kpi.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-white mb-1.5 font-mono">
                    {kpi.value}
                  </div>
                  <div
                    className={`text-xs font-semibold flex items-center gap-1 ${
                      kpi.positive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {kpi.change}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {games.map((game) => (
              <Card
                key={game.id}
                className="bg-white/5 backdrop-blur-[10px] border-white/10 hover:translate-y-[-4px] hover:shadow-2xl hover:border-green-400/20 transition-all duration-300 cursor-pointer relative"
              >
                {game.badge && (
                  <div className="absolute top-2 right-2 bg-green-400 text-black text-xs font-bold px-1.5 py-0.5 rounded text-[8px] uppercase">
                    {game.badge}
                  </div>
                )}
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase ${
                        game.status === "live"
                          ? "bg-red-400/10 text-red-400 border border-red-400/20"
                          : "bg-green-400/10 text-green-400 border border-green-400/20"
                      }`}
                    >
                      {game.status}
                    </div>
                    <div className="text-white/60 text-xs font-medium">
                      {game.time}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm flex-shrink-0">
                        {game.team1.logo}
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-white mb-0.5">
                          {game.team1.name}
                        </h3>
                        <div className="text-xs text-white/60">
                          {game.team1.record}
                        </div>
                      </div>
                    </div>
                    <div className="text-white/70 font-bold text-base mx-4 flex-shrink-0">
                      {game.status === "live"
                        ? `${game.team1.score}-${game.team2.score}`
                        : "VS"}
                    </div>
                    <div className="flex items-center gap-2 flex-1 flex-row-reverse text-right">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm flex-shrink-0">
                        {game.team2.logo}
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-white mb-0.5">
                          {game.team2.name}
                        </h3>
                        <div className="text-xs text-white/60">
                          {game.team2.record}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    {game.odds.map((odd) => (
                      <div
                        key={odd}
                        className="bg-white/5 border border-white/10 rounded px-1.5 py-1 text-xs font-semibold text-white/70"
                      >
                        {odd}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-1.5">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-green-400 to-green-500 text-black border-green-400 hover:translate-y-[-1px] hover:shadow-[0_4px_12px_rgba(0,255,136,0.3)] transition-all text-xs font-semibold"
                      onClick={() =>
                        showNotification("⚡ Quick bet terminal opening...")
                      }
                    >
                      Quick Bet
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1 bg-white/5 text-white border-white/10 hover:bg-white/8 text-xs font-semibold"
                      onClick={() =>
                        showNotification("📊 Loading advanced analytics...")
                      }
                    >
                      Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="xl:bg-[#1a1f2e] lg:col-start-2 xl:col-start-3 border-l border-[#2a3441]  overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-800 scrollbar-w-3 scrollbar-track-rounded-full scrollbar-thumb-rounded-full p-5">
          {/* Portfolio Card */}
          <Card className="bg-white/5 border-white/10 mb-5">
            <CardContent className="p-4">
              <div className="text-xs font-semibold text-white/70 mb-3">
                Portfolio Performance
              </div>
              <div className="text-center mb-3">
                <div className="text-xl font-extrabold text-white mb-1">
                  $24,847.62
                </div>
                <div className="text-xs text-green-400 font-semibold">
                  +$1,847.62 (8.05%)
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center bg-white/5 rounded-md p-2">
                  <span className="text-sm font-bold text-white block mb-0.5">
                    73.2%
                  </span>
                  <span className="text-xs text-white/60 uppercase">
                    Win Rate
                  </span>
                </div>
                <div className="text-center bg-white/5 rounded-md p-2">
                  <span className="text-sm font-bold text-white block mb-0.5">
                    +18.7%
                  </span>
                  <span className="text-xs text-white/60 uppercase">
                    30D ROI
                  </span>
                </div>
                <div className="text-center bg-white/5 rounded-md p-2">
                  <span className="text-sm font-bold text-white block mb-0.5">
                    247
                  </span>
                  <span className="text-xs text-white/60 uppercase">
                    Total Bets
                  </span>
                </div>
                <div className="text-center bg-white/5 rounded-md p-2">
                  <span className="text-sm font-bold text-white block mb-0.5">
                    $127
                  </span>
                  <span className="text-xs text-white/60 uppercase">
                    Avg Bet
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <div className="space-y-3 mb-6">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wide">
              AI Insights
            </div>

            <div className="bg-green-400/10 border border-green-400/20 rounded-md p-3">
              <div className="text-xs font-bold text-green-400 uppercase mb-1.5">
                🤖 AI Recommendation
              </div>
              <div className="text-xs text-white/70 leading-relaxed">
                High confidence bet detected:
                <br />
                <strong>Yankees -1.5 @ +110</strong>
                <br />
                94% model accuracy
              </div>
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-3">
              <div className="text-xs font-bold text-yellow-400 uppercase mb-1.5">
                ⚠️ Line Movement
              </div>
              <div className="text-xs text-white/70 leading-relaxed">
                Tigers -1.35 → -1.5
                <br />
                Sharp money detected
                <br />
                Volume: +47%
              </div>
            </div>

            <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-3">
              <div className="text-xs font-bold text-blue-400 uppercase mb-1.5">
                📈 Market Trend
              </div>
              <div className="text-xs text-white/70 leading-relaxed">
                Live betting volume up 23%
                <br />
                MLB totals trending over
                <br />
                Weather factor: Neutral
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-3">
              Watchlist
            </div>
            {watchlistItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 rounded-md mb-1.5 bg-white/5 border border-white/10 cursor-pointer hover:bg-white/8 transition-all"
                onClick={() =>
                  showNotification(`Added ${item.name} to quick bet slip`)
                }
              >
                <div>
                  <h4 className="text-xs font-semibold text-white mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-white/60">{item.details}</p>
                </div>
                <div className="text-xs font-bold text-white/70">
                  {item.odds}
                </div>
              </div>
            ))}
          </div>

          {/* System Status */}
          <Card className="bg-white/5 border-white/10 mt-5">
            <CardContent className="p-3">
              <div className="text-xs text-white/60 mb-2 font-semibold uppercase">
                System Status
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-xs text-white/60">Data Feed</span>
                  <span className="text-green-400 text-xs font-semibold">
                    ● Live
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/60">AI Models</span>
                  <span className="text-green-400 text-xs font-semibold">
                    ● Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/60">Market Sync</span>
                  <span className="text-yellow-400 text-xs font-semibold">
                    ● Updating
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/60">Last Update</span>
                  <span className="text-white/70 text-xs">0.7s ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default WiseSportsAIDashboard;
