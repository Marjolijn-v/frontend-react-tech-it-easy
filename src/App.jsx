import './App.css';
import totalSoldTVs from './helpers/soldTVs.js'

function App() {


    return (
        <>
        <article className="sold-tvs-container">Aantal verkochte producten {totalSoldTVs()} </article>
        </>
  )

}



export default App
