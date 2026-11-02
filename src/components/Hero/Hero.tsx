import './Hero.scss';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Venha conhecer nossas promoções</h1>
        <p className="hero__subtitle"><strong>50% Off</strong> nos produtos</p>
        <a className="hero__button" href="#produtos">Ver produto</a>
      </div>
    </section>
  );
}