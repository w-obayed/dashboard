import DefensiveEfficiencyDashboard from "@/page/defensive-efficiency";
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
];
export default publicRoters;
