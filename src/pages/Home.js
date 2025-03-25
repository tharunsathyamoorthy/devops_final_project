import React from 'react';

function Home() {
  const styles = {
    homeContainer: {
      fontFamily: 'Roboto, sans-serif',
    },
    heroSection: {
      backgroundImage: 'url("/hero_image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
    },
    heroContent: {
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '50px',
      marginBottom: '20px',
      color: 'brown ',
      
    },
    heroDescription: {
      fontSize: '20px',
      marginBottom: '30px',
      color: 'brown ',
    },
    shopNowBtn: {
      padding: '15px 30px',
      backgroundColor: '#ff5722',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    shopNowBtnHover: {
      backgroundColor: '#e64a19',
    },
    aboutSection: {
      backgroundColor: '#f4f4f4',
      padding: '40px',
      textAlign: 'center',
    },
    aboutTitle: {
      fontSize: '30px',
      marginBottom: '20px',
    },
    aboutDescription: {
      fontSize: '18px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    visionSection: {
      padding: '40px',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
    },
    visionContent: {
      maxWidth: '800px',
      textAlign: 'center',
    },
    visionTitle: {
      fontSize: '28px',
      marginBottom: '15px',
    },
    visionDescription: {
      fontSize: '18px',
      color: '#666',
    },
    missionContent: {
      maxWidth: '800px',
      textAlign: 'center',
    },
    missionTitle: {
      fontSize: '28px',
      marginBottom: '15px',
    },
    missionDescription: {
      fontSize: '18px',
      color: '#666',
    },
    ctaSection: {
      backgroundColor: '#031624',
      color: 'white',
      padding: '60px',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    ctaDescription: {
      fontSize: '20px',
      marginBottom: '30px',
    },
    ctaShopNowBtn: {
      backgroundColor: '#ffc107',
      color: '#031624',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    ctaShopNowBtnHover: {
      backgroundColor: '#e6a700',
    }
  };

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Britannia</h1>
          <p style={styles.heroDescription}>Baked Goodness for Every Generation</p>
          <button 
            style={styles.shopNowBtn} 
            onMouseOver={(e) => e.target.style.backgroundColor = styles.shopNowBtnHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.shopNowBtn.backgroundColor}
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* About the Brand */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>About Britannia</h2>
        <p style={styles.aboutDescription}>
          Britannia Industries is one of India’s leading food companies with a rich heritage spanning over a century. 
          We are known for our premium biscuits, cakes, and dairy products that deliver taste and nutrition to millions.
        </p>
      </section>

      {/* Vision & Mission */}
      <section style={styles.visionSection}>
        <div style={styles.visionContent}>
          <h2 style={styles.visionTitle}>Our Vision</h2>
          <p style={styles.visionDescription}>
            To be the most trusted and loved food brand, providing a wide range of delicious, high-quality, and 
            affordable products for every generation.
          </p>
        </div>
        <div style={styles.missionContent}>
          <h2 style={styles.missionTitle}>Our Mission</h2>
          <p style={styles.missionDescription}>
            To create innovative and nutritious products that cater to the evolving tastes and health needs of our consumers.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Join the Britannia Family</h2>
        <p style={styles.ctaDescription}>
          From humble beginnings to becoming a household name, our journey has been shaped by a commitment to quality, 
          innovation, and care for our customers. Explore our offerings today!
        </p>
        <button 
          style={styles.ctaShopNowBtn} 
          onMouseOver={(e) => e.target.style.backgroundColor = styles.ctaShopNowBtnHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.ctaShopNowBtn.backgroundColor}
        >
          Discover Our Products
        </button>
      </section>
    </div>
  );
}

export default Home;
