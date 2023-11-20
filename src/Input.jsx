import { useState, useEffect } from "react";

const Input = () => {

    const [name, setName] = useState("");
    const [spisok, setSpisok] = useState(localStorage.getItem('spisok') 
    ? JSON.parse(localStorage.getItem('spisok')) 
    :[]
    );

    const addName = () => {
        setSpisok(prevSpisok => [...prevSpisok, name]);
    }

    useEffect(() => {
        localStorage.setItem('spisok', JSON.stringify(spisok));
    }, [spisok]);

    return (
        <div>

            <input value={name} onChange={(e) =>
                setName(e.target.value)
            } type="text" />

            <button onClick={() => {
                addName();
                console.log(spisok);
            }}>Add name</button>

            {spisok.map((item, index) => (
                <p key={index}>{item}</p>
            ))}

        </div>
    );
}

export default Input;

