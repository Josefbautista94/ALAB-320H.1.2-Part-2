import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          image="public/blog-image-1.jpg"
          alt="Fashion on street in Brooklyn"
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          image="public/blog-image-2.jpg"
          alt="Vintage fashion"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
