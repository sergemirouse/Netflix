import "./App.css";
import data from "./data.json";
import Section from "./components/Section";
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={Logo} />
      </header>
      <main>
        {data.map((item, index) => {
          return (
            <Section
              key={index}
              category={item.category}
              images={item.images}
            />
          );
        })}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
