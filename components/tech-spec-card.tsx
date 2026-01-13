import { LucideIcon} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the shape of the data rows
interface SpecDataPoint {
  label: string;
  value: string;
}

// Define the component Props
interface TechSpecCardProps {
  title: string;
  systemLabel: string;
  description: string;
  icon: LucideIcon;
  dataPoints: SpecDataPoint[];
  statusLabel?: string; // Optional: Defaults to "Shovel-Ready: Operational"
}

const TechSpecCard: React.FC<TechSpecCardProps> = ({
  title,
  systemLabel,
  description,
  icon: Icon,
  dataPoints,
//   statusLabel = "Shovel-Ready: Operational"
}) => {
  return (
    <Card className="group relative overflow-hidden rounded-sm border-2 border-slate-800 bg-slate-950 transition-all hover:border-amber-500/50">
      
      {/* HUD Corner Accents (Visible on Hover) */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {/* Icon Container */}
          <div className="rounded-full bg-slate-900 p-2 ring-1 ring-slate-800 group-hover:ring-orange-500/50 transition-all">
            <Icon className="h-5 w-5 text-orange-500" />
          </div>
          
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
              SYSTEM: {systemLabel}
            </span>
            <CardTitle className="text-xl font-bold tracking-tight text-slate-100">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-slate-200 min-h-10">
          {description}
        </p>

        {/* Dynamic HUD Data Points */}
        <div className="space-y-2 border-t border-slate-900 pt-4">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-[11px] font-medium uppercase text-slate-300 text-left">
                {point.label}
              </span>
              <span className="font-mono text-sm font-bold text-slate-200 text-right">
                {point.value}
              </span>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        {/* <div className="flex items-center gap-2 rounded-sm bg-emerald-500/5 px-2 py-1 ring-1 ring-emerald-500/20">
          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
            {statusLabel}
          </span>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default TechSpecCard;