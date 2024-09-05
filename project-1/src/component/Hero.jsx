import amazon from '../assets/Amazon logo.png';
import flipkart from '../assets/flipkart-logo.png';
import shoe from '../assets/shoe_image.png';

const Hero = () => {
  return (
    <main className="container">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">YOUR FEET DESERVE THE BEST</h1>
          <p className="hero-description">
            We offer a wide range of high-quality shoes to keep your feet comfortable and stylish. Explore our collection and give your feet the care they deserve.
          </p>
          <div className="hero-btns">
            <button className="btn shop-btn">Shop Now</button>
            <button className="btn category-btn">Category</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={shoe} alt="shoe" className="shoe-img" />
        </div>

        <div className="shopping">
          <p className="availability-text">Also Available On</p>
          <div className="brand-icons">
            <img src={amazon} alt="Amazon logo" className="brand-icon" />
            <img src={flipkart} alt="Flipkart logo" className="brand-icon" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
