import './App.css';

function App() {
  function Exhibit(){
    return <h2>Children</h2>;
  }
  function Banner(){
    return <h1>Title of Page</h1>;
  }
  return (
    <div className="App">
      <Banner/>
      <Exhibit/>
      <div>Hello World</div>
    </div>
  );
}

export default App;
