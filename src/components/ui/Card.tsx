type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <section className="pf-card">
      <header className="pf-card-header">
        <h3>{title}</h3>
      </header>

      <div className="pf-card-content">
        {children}
      </div>
    </section>
  );
}