import './App.css';
import totalSoldTVs from './helpers/soldTVs.js'
import purchasedTVs from "./helpers/purchasedTVs.js";
import tvsToSell from "./helpers/tvsToSell.js";

function App() {


    return (
        <>
            <article className="sold-tvs-container">Aantal verkochte producten {totalSoldTVs()} </article>
            <article className="original-stock-container">Aantal ingekochte producten {purchasedTVs()}</article>
            <article className="to-sell-container">Aantal te verkopen producten {tvsToSell()}</article>
        </>
  )

}



export default App
