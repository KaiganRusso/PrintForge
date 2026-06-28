type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>

      <strong>{value}</strong>
    </div>
  );
}