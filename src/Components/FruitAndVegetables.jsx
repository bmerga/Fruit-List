import React from "react";
// import FruitList from "./FruitList";

function FruitAndVegetables({items}) {
  
    return (
<div>
    {items.map((item) => (<p>
        {item.name} {item.price}
    </p>    
))}
</div>

    );

}

export default FruitAndVegetables;