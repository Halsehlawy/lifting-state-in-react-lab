// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <li key={idx} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={()=>props.function(idx)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
