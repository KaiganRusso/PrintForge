import { useMemo, useState } from "react";
import { Trash2, Search } from "lucide-react";
import { useProductStore } from "../../store/productStore";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore(
    (state) => state.removeProduct
  );

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="pf-card">
      <div className="product-header">
        <h3>Produtos Cadastrados</h3>

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Peso</th>
              <th>Custo</th>
              <th>Venda</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>

                <td>{product.weight} g</td>

                <td>
                  R$ {product.totalCost.toFixed(2)}
                </td>

                <td>
                  R$ {product.idealPrice.toFixed(2)}
                </td>

                <td>
                  {new Date(
                    product.createdAt
                  ).toLocaleDateString("pt-BR")}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      removeProduct(product.id)
                    }
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}