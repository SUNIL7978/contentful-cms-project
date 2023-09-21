import hero from './assets/Hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>CMS contentful</h1>
          <p>
            Sartorial whatever pug tbh mixtape raclette tacos taxidermy art
            party listicle semiotics slow-carb marfa. Activated charcoal tumblr
            keffiyeh fashion axe, twee YOLO normcore schlitz gentrify
            lumbersexual. Master cleanse vibecession pok pok hashtag
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="cms contentful" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
