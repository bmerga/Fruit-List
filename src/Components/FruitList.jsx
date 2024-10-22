import React, {useState} from "react";
import FruitAndVegetables from "./FruitAndVegetables";



function FruitList() {
    const initialData = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ];
     const [fruitList, setFruitList] = useState(initialData);
    return (
        <div>
            <h1>Fruit List</h1>
            <FruitAndVegetables items={fruitList} />
           
        </div>
    )
}

export default FruitList;