import { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("Home");
  const news = {
  Home: {
    title: "Technology is Changing the Future",
    text: "Discover the latest developments in technology, innovation and digital transformation.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
  },

  World: {
    title: "Global News Updates",
    text: "Important events and updates from around the world.",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=900",
  },

  Technology: {
    title: "Latest Technology Trends",
    text: "Explore new technologies, artificial intelligence and digital innovations.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=900",
  },

  Sports: {
    title: "Latest Sports News",
    text: "Get the latest scores, matches and sports updates.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900",
  },

  Health: {
    title: "Health & Wellness",
    text: "Latest information about health, nutrition and healthy living.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900",
  },
};
  

  return (
    <div className="news-app">
      <header className="header">
        <h1>Daily News</h1>
        <p>Latest News & Updates</p>
      </header>

      <nav className="navbar">
        {Object.keys(news).map((item) => (
          <button key={item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </nav>

      <main className="main-content">
        <section className="featured">
          <h2>{category} News</h2>

          <article className="main-news">
            <div className="news-image">NEWS</div>

            <div className="news-content">
              <h2>{news[category].title}</h2>

              <p>{news[category].text}</p>

              <button>Read More</button>
            </div>
          </article>
        </section>

        <section className="news-grid">
          <article className="news-card">
            <div className="card-image">WORLD</div>
            <h3>Global News Updates</h3>
            <p>Important events and updates from around the world.</p>
            <button>Read More</button>
          </article>

          <article className="news-card">
            <div className="card-image">SPORTS</div>
            <h3>Latest Sports News</h3>
            <p>Get the latest scores, matches and sports updates.</p>
            <button>Read More</button>
          </article>

          <article className="news-card">
            <div className="card-image">HEALTH</div>
            <h3>Health & Wellness</h3>
            <p>Latest information about health and healthy living.</p>
            <button>Read More</button>
          </article>

          <article className="news-card">
            <div className="card-image">TECH</div>
            <h3>Technology Trends</h3>
            <p>Explore new technologies and digital innovations.</p>
            <button>Read More</button>
          </article>
        </section>
      </main>

      <footer>
        <p>© 2026 Daily News | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
