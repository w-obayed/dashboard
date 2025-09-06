import DefensiveEfficiencyDashboard from "@/page/defensive-efficiency";
import HeadToHeadHistoryDashboard from "@/page/head-to-head";
import MlbDashboard from "@/page/mlb";

const publicRoters = [
  {
    path: "/defensive-efficiency",
    element: <MlbDashboard />,
  },
  {
    path: "/",
    element: <DefensiveEfficiencyDashboard />,
  },
  {
    path: "/head-to-head",
    element: <HeadToHeadHistoryDashboard />,
  },
];
export default publicRoters;
