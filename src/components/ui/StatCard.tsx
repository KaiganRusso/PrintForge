type StatCardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        {icon}
      </div>

      <h2>{value}</h2>
    </div>
  );
}