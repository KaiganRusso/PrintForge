import { useProductStore } from "../../store/productStore";

export default function ProductList() {
  const products = useProductStore((state) => state.products);

  return (
    <div className="pf-card">
      <h3>Produtos Cadastrados</h3>

      {products.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Peso</th>
              <th>Custo</th>
              <th>Venda</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>

                <td>{product.weight} g</td>

                <td>R$ {product.totalCost.toFixed(2)}</td>

                <td>R$ {product.idealPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}