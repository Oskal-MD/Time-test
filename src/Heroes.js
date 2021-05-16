import { useState } from "react";


function Heroes(props) {


    const [names, setNames] = useState([
        "Шерлок Холмс", 
        "Доктор Ватсон", 
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"]);
      

      const nickName = names.map((item, index) => {
        return <li onClick={ () => handleDelete(index)} key={index}>
            {item}
        </li>})
      

      const handleDelete = (i) => {
        const filter = nickName.filter((item, index) => {
          if(i === index){
            return false
          } return true
        })
        setNames(filter)}
      


    return (
        <div>
            <ul>
                {nickName}
            </ul>
        </div>)};

export default Heroes;