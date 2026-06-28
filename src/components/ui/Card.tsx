import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <section className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>

      <div className="card-body">
        {children}
      </div>
    </section>
  );
}