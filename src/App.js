import { useEffect, useState } from "react";

function App() {
  const [memes,setMemes] = useState([])


	useEffect(() => {
    const fetchMemeData = async() => {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const respData = await response.json();
        setMemes(respData.data.memes);
    }
    fetchMemeData();
  }, []);
  {memes.length !=0 && console.log(memes[0]);}
	return (
    <div>
      <h1>Meme Generator</h1>
      <ul>
        {memes.map(meme => (
          <li key={meme.id}>
            <p>{meme.name}</p>
            <img src={meme.url} width='100px'/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
