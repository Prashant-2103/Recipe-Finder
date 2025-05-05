import { useState } from 'react';
import Getrecipe from './components/Recipe';
import './index.css';

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');


  function handleSubmit(e)
{
  e.preventDefault();
  if(input.trim())
  {
    console.log(`Searching for: ${input}`);
    setQuery(input);
  }
  setInput('');
}
function handleInput(e){
  setInput(e.target.value);
}
  return (
    
    <> <header class="text-center mb-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Recipe Finder</h1>
    <p class="text-gray-600">Discover delicious recipes for your next meal</p>
</header>
    <form onSubmit={handleSubmit} className='class="mb-8 flex"'>
      <input 
      type="text"
      placeholder='search for cakes'
      value={input} 
      onChange={handleInput}
      className='flex-1 p-2 border rounded-l'
      />
      <button className="bg-blue-500 text-white p-2 rounded-r" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
      </button>
    </form>
    {/* <Getrecipe query="Biryani" />
    <Getrecipe query="Roll" />
    <Getrecipe query="Pasta" /> */}
    {query && <Getrecipe query={query}/>} 
    </>
  );
}

export default App;
