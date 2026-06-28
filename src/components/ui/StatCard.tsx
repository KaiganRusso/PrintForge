import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <Card>
      <div className="stat-card">

        <span className="stat-title">
          {title}
        </span>

        <h2 className="stat-value">
          {value}
        </h2>

        {subtitle && (
          <small className="stat-subtitle">
            {subtitle}
          </small>
        )}

      </div>
    </Card>
  );
}