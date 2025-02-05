import { useState } from 'react'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadProducts from './components/load-products'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <>
          <Accordian/>
          <RandomColor/>
          <StarRating starsnum={'10'}/>
          <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/>
          <LoadProducts url={'https://dummyjson.com/products'}/>

        </>

      </div>
  );
}

export default App
