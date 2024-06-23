import {Component} from "react"

import Header from "../Header"

import './index.css'
import ProductItem from "../ProductItem"
import Footer from "../Footer"

const productsList = [{
    id : 1,
    imageUrl : "https://res.cloudinary.com/dchxbofyt/image/upload/v1719050790/Beej-Patakha_3_1_5_omfl5r.png",
    name : "Raju",
    patakaName : "Raju Rassibomb"
},
{
    id : 2,
    imageUrl : "https://res.cloudinary.com/dchxbofyt/image/upload/v1719050790/Beej-Patakha_3_1_5_omfl5r.png",
    name : "Rani",
    patakaName : "Ladiyon ki Rani Chani"
}]
class Firefly extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="background-image-container">
                   <Header />
                   <div className="content">
                    <h1 className="main-heading">
                    The choice is yours.<br/>
                    Because they don’t have one.
                    </h1>
                    <button type="button" className="quick-view-btn">QUICK VIEW</button>

                   </div>

                </div>
                <div className="about">
                <div className="heading-frame">
                <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719045938/Frame_j9qbct.png" alt="frame"/>
                <h2 className="heading">About</h2>
                <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719045938/Frame_j9qbct.png" alt="frame"/>
                </div>
                <div className="about-content">
                <p className="about-description">
              
                Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
                The choice is yours. Because they don’t have one.<br/>
                <span>
                The choice is yours. Because they don’t have one.
              </span>
                </p>
                </div>
                </div>
                <div className="products">
                <div className="heading-frame">
                <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719045938/Frame_j9qbct.png" alt="frame"/>
                <h2 className="heading">Our products</h2>
                <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719045938/Frame_j9qbct.png" alt="frame"/>
                </div>
                <ul className="products-list">
                {productsList.map((each)=> (
                    <ProductItem productDetails = {each} key = {each.id}/>
                ))}
                </ul>
                <img src = "https://res.cloudinary.com/dchxbofyt/image/upload/v1719045938/Frame_j9qbct.png" alt="frame" style={{width: "85%",height:"9px"}}/>

                </div>
                    <Footer />
            </div>
        )
    }
}

export default Firefly