import React, { useEffect, useState } from 'react';

const API = 'https://icanhazdadjoke.com/';
const useDad = () => {
    const [data, setData] = useState({});    
    async function fetchJoke() {
        const res = await fetch(API, {
            headers : {
                Accept : 'application/json'
            }
        });
        const data = await res.json();
        setData(data);
    }
    useEffect(() => {
        fetchJoke();
    }, [])
    return [data, setData];
}

const Joke = (props) => {
    const [data, setData] = useDad();
    console.log(data);
   
    return (
        <div>
            <p><b><i>{data.joke}</i></b></p>
        </div>
    )
}

export default Joke;