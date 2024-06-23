import { Component } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import './index.css'

class Modal extends Component {
    
    render() {
        const {productDetails,onClickOfClose} = this.props 
            const {name,imageUrl,patakaName} = productDetails
            return(
                <div className="modal-container">
                            <button type='button' className='close-btn-mobile' onClick={onClickOfClose}><AiOutlineClose size={20}/></button>
        
                <div className="images-container">
                    <img src={imageUrl} className="pataka-image" alt = "pataka"/>
                    <div>
                    <img src={imageUrl} alt = "pataka"/>
                    <img src={imageUrl} alt = "pataka"/>
                    <img src={imageUrl} alt = "pataka"/>
                    <img src={imageUrl} alt = "pataka"/>
        
                    </div>
                    </div>
                    <div className='product-details-container'>
                        <h3 className='name'>{patakaName}</h3>
                        <p className='mrp'>MRP:</p>
                        <h3 className='name' style={{fontWeight : "700"}}>{`${name}'s Dreams`}</h3>
                        <hr/>
                        <h4>Product Description:</h4>
                        <p>This product packs an extra punch, thanks to the literal blood,
                        sweat and tears of a young boy.</p>
                        <hr/>
                        <h4>Product Contents:</h4>
                        <p>10 hand-hurting pieces of rassi bombs</p>
                        <p>Jilled with great pain</p>
                        <p>Raju’s hopes</p>
                        <hr/>
                        <h4>Shipping Time:</h4>
                        <p>{`Before ${name} understands that his dreams do not matter.`}</p>
                        <button type='button' className='choose-now-btn'>Choose Now</button>
                    </div>
                    <button type='button' className='close-btn' onClick={onClickOfClose}><AiOutlineClose size={30}/></button>
                </div>
        )
    }
}

export default Modal