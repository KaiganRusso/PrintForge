type Props = {
  title: string;
  value: string;
};

export default function ResultCard({
  title,
  value,
}: Props) {
  return (
    <div className="result-card">
      <span>{title}</span>

      <strong>{value}</strong>
    </div>
  );
}