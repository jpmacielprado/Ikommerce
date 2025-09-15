import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import axios from "axios";
import "../components/ProductPage.css";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
  seller: string;
}

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      api
        .get<Product>(`products/${id}`)
        .then((res) => setProduct(res.data))
        .catch(() => setProduct(null));
    }
  }, [id]);

  // Função para buscar CEP na API ViaCEP
  const calcularFrete = async () => {
    if (cep.length !== 8) {
      setFrete("Digite um CEP válido.");
      return;
    }

    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (res.data.erro) {
        setFrete("CEP não encontrado.");
      } else {
        // Frete fake fixo só para exemplo
        setFrete(
          `Entrega para ${res.data.localidade} - ${res.data.uf}: R$ 20,00 (5 dias úteis)`
        );
      }
    } catch (err) {
      setFrete("Erro ao buscar o CEP.");
    }
  };

  if (!product) return <h2> Produto não encontrado</h2>;

  return (
    <div className="product-page">
      <div className="gallery">
        <img src={product.image} alt={product.name} className="main-image" />
      </div>
      <div className="detils">
        <h1>{product.name}</h1>
        <p className="old-price">De: R${product.oldPrice.toFixed(2)}</p>
        <h2 className="price">Por: R${product.oldPrice.toFixed(2)}</h2>
        <span className="discount">-{product.discount}%</span>
        <p className="seller">Fornecedor: {product.seller}</p>
        <button className="buy-btn">Comprar 🛒</button>
        <button className="cart-btn">Adicionar ao carrinho</button>

        <div className="frete">
          <p>Consultar Frete:</p>
          <input
            type="text"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <button onClick={calcularFrete}>Calcular</button>
          {frete && <p className="frete-result">{frete}</p>}
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
