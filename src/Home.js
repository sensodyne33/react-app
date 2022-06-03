import { useState } from "react";


const Home = () => {
    const [name, setName] = useState('Mula');
    const [age, setAge] = useState(20)

    const handleClick = () => {
        setName('Popo')
        setAge('78')
    }

    return ( 
        <div className="home">
            <h2>Home</h2>
            <p> { name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;