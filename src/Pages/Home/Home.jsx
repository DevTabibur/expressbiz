import BookShipping from "./BookShipping";
import "./Home.css";
import Services from '../Services/Services';
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
    <Services/>
      <BookShipping />
      <Contact/>
    </>
  );
};

export default Home;
