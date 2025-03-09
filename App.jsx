import Header from "./components/Header";
import Body from "./components/Body";
import useGoogleAnalytics from "./components/GoogleAnalytics";
import "./App.css";

const App = () => {
  useGoogleAnalytics("G-3QJJ2L7MVD");

  return (
    <>
      <Header />
      <Body className="m-0 bg-[url('https://firebasestorage.googleapis.com/v0/b/mazjid-a37fd.appspot.com/o/mazjid-a37fd%2Fassets%2Fimg%2Ftile1.svg?alt=media')] p-0" />
    </>
  );
};

export default App;
