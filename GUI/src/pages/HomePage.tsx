import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "./ProductCard";
import "./HomePage.css"

interface Product {
  
    id: number;
    name: string;
    price:number;
    oldPrice:number;
    discount:number;
    image:string;
    seller:string;
}
const HomePage: React.FC = () => {
    const [products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
        api.get<Product[]>("products") //rota da api
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err));
    }, []);

    return (
        <div className="homepage">
            {/*banner de promoção*/}
            <section className="promo-banner">
                <div className="promo-left">
                    <h2>
                        OFERTA DE LANÇAMENTO <span>IKOMMERCY</span>
                    </h2>
                    <p>
                        <strong>Os menores preços <br /></strong>teste o nosso site e <strong>COMPRE JÁ!</strong>
                    </p>
                </div>
                <div className="promo-center">
                    IK <span style={{ fontWeight: 300}}>ommercy</span>
                </div>
                <div className="promo-right">
                    <div className="promo-box-a">
                        Produtos com até <span>35%</span>de desconto
                    </div>
                     <div className="promo-box-b">
                        Produtos com até <span>65%</span>de desconto
                    </div>
                </div>
            </section>

            {/* produtps*/}
            <section className="products-section">
                <h2>Mais Vendidos</h2>
                <div className="products-grid">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p}/>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage