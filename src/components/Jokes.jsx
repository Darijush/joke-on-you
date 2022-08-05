import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Jokes(){
    
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setJokes(res.data.jokes));
    }, []);

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

        function refreshPage() {
          window.location.reload(false);
        }

    return(
        <div>
        <ul>
        {
            jokes.map(u => u.joke? <li style={{color:"#"+randomColor}} key={u.id}>{u.joke}</li>:<li style={{color: "#"+randomColor}} key={u.id}>{u.setup}  {"\n"} {u.delivery}</li>)
        }
        </ul>
    <button onClick={refreshPage}className='button' style={{color:"#"+randomColor}}>New portion?</button>
    </div>
    )

}
export default Jokes;