import './App.css';
import totalSoldTVs from './helpers/soldTVs.js'
import purchasedTVs from "./helpers/purchasedTVs.js";
import tvsToSell from "./helpers/tvsToSell.js";
import productName from "./helpers/productName.js";
import formattedPrice from "./helpers/formattedPrice.js";
import screenSizeString from "./helpers/screenSizeString.js";
import {bestSellingTv} from "./constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";


function App() {

    function bestSoldFirst() {
        console.log("Meest verkocht eerst");
    }

    function cheapestFirst() {
        console.log("Goedkoopste eerst");
    }

    function mostSuitableForSports() {
        console.log("Meest geschikt voor sport eerst");
    }

    return (
        <>
            <div className="outer-container-api">
                <article className="sold-tvs-container">Aantal verkochte producten {totalSoldTVs()} </article>
                <article className="original-stock-container">Aantal ingekochte producten {purchasedTVs()}</article>
                <article className="to-sell-container">Aantal te verkopen producten {tvsToSell()}</article>
            </div>
            <div className="outer-container-productcard">
                <img className="samsung-crystal-img" src="https://image.coolblue.nl/max/2048xauto/products/2020321" alt="samsung crystal tv"/>
                <article className="product-tile">
                    <p>{productName()}</p>
                    <p>{formattedPrice(bestSellingTv.price)}</p>
                    <p>{screenSizeString(bestSellingTv.availableSizes)}</p>
                    <div className="tv-options">
                        <span className="image-wrapper">
                            <img className="icon" src={check} alt="check"/>
                        </span>
                        <p>Wifi</p>
                        <span className="image-wrapper">
                            <img className="icon" src={minus} alt="not checked"/>
                        </span>
                        <p>Speech</p>
                        <span className="image-wrapper">
                            <img className="icon" src={check} alt="check"/>
                        </span>
                        <p>HDR</p>
                        <span className="image-wrapper">
                            <img className="icon" src={check} alt="check"/>
                        </span>
                        <p>Bluetooth</p>
                        <span className="image-wrapper">
                            <img className="icon" src={minus} alt="not checked"/>
                        </span>
                        <p>Ambilight</p>
                    </div>
                </article>
            </div>
            <div className="outer-container-buttons">
            <button type="button" onClick={bestSoldFirst}>Meest verkocht eerst</button>
            <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
            <button type="button" onClick={mostSuitableForSports}>Meest geschikt voor sport eerst</button>
            </div>


                {/*// 'Meest verkocht eerst'*/}
        </>
  )


}



export default App
