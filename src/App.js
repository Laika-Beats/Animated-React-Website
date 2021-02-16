import AboutPage from "./pages/AboutPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutPage />
    </div>
  );
}

export default App;
