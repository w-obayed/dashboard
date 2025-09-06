import { Card, CardContent } from "@/components/ui/card";

interface TeamRecord {
  tbWins: number;
  seaWins: number;
  title: string;
  context: string;
  seaIsWinner?: boolean;
  tbIsWinner?: boolean;
}

const RecordCard: React.FC<{ record: TeamRecord }> = ({ record }) => (
  <Card>
    <CardContent className="flex flex-col items-center space-y-4">
      <div className="text-md text-muted-foreground uppercase tracking-wider">
        {record.title}
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <div className="flex flex-col items-center">
          <span className="text-base text-muted-foreground mb-1">TB</span>
          <span
            className={`text-3xl font-bold ${
              record.tbIsWinner ? "text-emerald-400" : "dark:text-white"
            }`}
          >
            {record.tbWins}
          </span>
        </div>
        <span className="text-lg text-muted-foreground mt-6">-</span>
        <div className="flex flex-col items-center">
          <span className="text-base text-muted-foreground mb-1">SEA</span>
          <span
            className={`text-3xl font-bold ${
              record.seaIsWinner ? "text-emerald-400" : "dark:text-white"
            }`}
          >
            {record.seaWins}
          </span>
        </div>
      </div>
      <div className="text-base text-slate-500">{record.context}</div>
    </CardContent>
  </Card>
);
export default RecordCard;
