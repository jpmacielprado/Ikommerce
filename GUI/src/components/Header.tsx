import type { FC } from "react";
import { FaSun, FaHeart, FaShoppingCart, FaUser, FaTags, FaUsers, FaGift, FaHeadphones, FaBars, FaSearch } from "react-icons/fa";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Header: FC = () => {
  // state da busca. Substituir isso depois pelo java samu 
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // função para enviar a busca
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">
          <div className="logo">
            <img src="/ikommerce.png" alt="Logo" className="logo" />
          </div>
        </Link>

        {/* Conectar com Java */}
         <form onSubmit={handleSearch} className="search-box">
          <input 
            type="text"
            className="input-busca"
            placeholder="Buscar Produtos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </form>

        <div className="top-icons">
          <button className="icon-btn">
            <FaSun className="icon" />
          </button>
          <button className="icon-btn">
            <FaHeart className="icon" />
          </button>
          <button className="icon-btn">
            <FaShoppingCart className="icon" />
          </button>

          <Link to="/login" className="login-btn">
            <FaUser /> Entrar
          </Link>
        </div>
      </div>

      <nav className="bottom-bar">
        <button className="nav-btn"><FaBars />Categorias</button>
        <button className="nav-btn"><FaTags />Promoções</button>
        <button className="nav-btn"><FaUsers />Parcerias</button>
        <button className="nav-btn"><FaGift />Fornecedores</button>
        <button className="nav-btn"><FaGift />Sobre Nós</button>
        <button className="nav-btn"><FaHeadphones />Atendimento</button>
      </nav>
    </header>
  );
};

export default Header;
