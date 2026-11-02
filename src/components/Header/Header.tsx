import './Header.scss';

const MENU = ['Todos os departamentos', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia'];

export function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <p>Compra 100% segura</p>
        <p>Frete grátis acima de R$ 200</p>
        <p>Parcele suas compras</p>
      </div>

      <div className="header__main">
        <a className="header__logo" href="/">econverse</a>

        <form className="header__search" role="search">
          <label className="visually-hidden" htmlFor="search">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Favoritos">♡</button>
          <button type="button" aria-label="Minha conta">☺</button>
          <button type="button" aria-label="Carrinho">🛒</button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Menu principal">
        <ul>
          {MENU.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}