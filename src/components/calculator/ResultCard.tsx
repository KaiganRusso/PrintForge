type ResultCardProps = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: ResultCardProps) {
  return (
    <div className="result-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}