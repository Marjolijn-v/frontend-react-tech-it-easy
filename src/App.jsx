import './App.css';
import totalSoldTVs from './helpers/soldTVs.js'
import purchasedTVs from "./helpers/purchasedTVs.js";
import tvsToSell from "./helpers/tvsToSell.js";
import productName from "./helpers/productName.js";
import formattedPrice from "./helpers/formattedPrice.js";
import screenSizeString from "./helpers/screenSizeString.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import showOutcomeInConsole from './constants/oefenbestand.js';



function App() {

    showOutcomeInConsole();


    function bestSoldFirst() {
        console.log("Meest verkocht eerst");
        console.log(inventory.sort((a, b) => b.sold - a.sold));
    }

    function cheapestFirst() {
        console.log("Goedkoopste eerst");
        console.log(inventory.sort((a, b) => a.price - b.price));
    }

    function mostSuitableForSports() {
        console.log("Meest geschikt voor sport eerst");
        console.log(inventory.sort((a, b) => b.refreshRate - a.refreshRate));
    }

    function biggestScreen() {
        console.log("Grootste scherm eerst");
        // Eerst availableSizes arrays sorteren van groot naar klein
        // Dan inventory array sorteren aan de hand van 1e getal in gesorteerde availableSizes array?
    }



    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <div className="outer-container-api">

                <article className="sold-tvs-container">
                    <p>Aantal verkochte producten</p>
                    <p className="number">{totalSoldTVs()}</p>
                </article>
                <article className="original-stock-container">
                    <p>Aantal ingekochte producten</p>
                    <p className="number">{purchasedTVs()}</p>
                </article>
                <article className="to-sell-container">
                    <p>Aantal te verkopen producten</p>
                    <p className="number">{tvsToSell()}</p>
                </article>
            </div>

            <h2>Best verkochte tv</h2>
            <div className="outer-container productcard">

                <img className="tv-img" src={bestSellingTv.sourceImg} alt="image of tv"/>
                <article className="product-tile">
                    <h3>{productName(bestSellingTv)}</h3>
                    <p className="price">{formattedPrice(bestSellingTv.price)}</p>
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
            <div className="outer-container buttons">
                <button type="button" onClick={bestSoldFirst}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
                <button type="button" onClick={mostSuitableForSports}>Meest geschikt voor sport eerst</button>
                <button type="button" onClick={biggestScreen}>Grootste schermgroottes eerst</button>
            </div>

            <div >
                <ul>
                    {inventory.map((stock) => {
                        return <li key = {stock.type} className="outer-container productcard">
                            <span className="image-wrapper">
                                <img className="tv-img" src={stock.sourceImg} alt="image of tv"/>
                            </span>
                            <div className="product-tile">
                                <h3>{productName(stock)}</h3>
                                <p className="price">{formattedPrice(stock.price)}</p>
                                <p>{screenSizeString(stock.availableSizes)}</p>
                                <ul className="tv-options">
                                    {stock.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={option.name} className="option"><img className="icon" src={check}
                                                                              alt="check"/> {option.name}</li>
                                        } else {
                                            return <li key={option.name} className="option"><img className="icon" src={minus}
                                                                              alt="not checked"/> {option.name}</li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </li>


                    })}
                </ul>
            </div>

        </>
  )


}



export default App
