import './App.css';
import CarDetails from './Components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelha", km: 10000},
    {id: 2, brand: "KIA", color: "Branco", km: 25000},
    {id: 3, brand: "Renault", color: "Azul", km: 70000},
    {id: 4, brand: "GM Chevrolet", color: "Prata", km: 100000},
    {id: 5, brand: "Audi", color: "Preto", km: 0},
    {id: 6, brand: "Toyota", color: "Bege", km: 0},
  ]

  return (
    <div className="App">
      <header className="App-header">
      <h2>Estudo de caso react</h2> 
      <h3>Aplicação e manipulação de array de objetos com react</h3>
      </header>
      <div class="container">
        <h2>Lista de Carros</h2>
        <div class="nav-list">
          {cars.map((car) => (
            <CarDetails 
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
