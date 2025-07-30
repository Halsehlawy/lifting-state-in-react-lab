const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.function(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
