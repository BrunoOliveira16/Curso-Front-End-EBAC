const CarDetails = ({brand, color, km}) => {
  return (
    <div>
        <ul class="list">
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>KM: {km}</li>
        </ul>
    </div>
  );
};

export default CarDetails;