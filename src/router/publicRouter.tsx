import DefensiveEfficiencyDashboard from "@/page/defensive-efficiency";
import MlbDashboard from "@/page/mlb";

const publicRoters = [
  {
    path: "/",
    element: <MlbDashboard />,
  },
  {
    path: "/defensive-efficiency",
    element: <DefensiveEfficiencyDashboard />,
  },
];
export default publicRoters;
