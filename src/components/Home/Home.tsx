import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Body></Body>
      <Footer year={new Date().getFullYear()}/>
    </>
  );
};
export default Home;
