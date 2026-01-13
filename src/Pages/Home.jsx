import Searchbar from "../Components/Searchbar";
import "./Home.css";
import Logo from "../Assets/Movie_Database-Cropped.png"
import SearchbarHome from "../Components/SearchbarHome"

function Home() {
  return (
    <section id="home">

      <img src={Logo} alt="" className="homeLogo" />
      <h2>
        Explore a vast collection of movies, read reviews, and find your next
        favorite film!
      </h2>

    </section>
    
  );
}

export default Home;
