import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './index.css'
import Modal from '../Modal';

const ProductItem = (props) => {
    const {productDetails} = props
    const {imageUrl,patakaName} = productDetails
    return  (
        <li className="product-item">
            <img src = {imageUrl} className="product-image" alt="product" />
            <div className="flex">
            <p className="pataka-name">{patakaName}</p>
            <Popup contentStyle={{width : "85%",minHeight: "60vh"}}
     trigger={
       <button className="view-btn" type="button">
        QUICK VIEW
       </button>
     }
   modal>
   {close =>(
   
      <Modal productDetails = {productDetails} onClickOfClose = {close}/>
  

   )}
   </Popup>
            </div>
        </li>
    )
}

export default ProductItem