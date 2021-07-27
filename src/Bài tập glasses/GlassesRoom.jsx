import React, { Component } from 'react';
import './GlassesRoom.css'
import data from './dataGlasses.json'
class GlassesRoom extends Component {
    state = {
        imgName: '',
        productName: '',
        introProduct: ''
    }
    handleChangeProduct = (imgName, productName, introProduct) =>{
        this.setState({
            imgName,
            productName,
            introProduct
        })
        document.getElementById('bodyCard').style.display = 'block'
    }
    renderGlasses = (dataProduct) => {
        return dataProduct.map((product, index) => {
            const { id, price, name, url, desc} = product
            return(
                <li className="col-2 list-group-item" key={index} onClick={()=>this.handleChangeProduct(url,name,desc)}>
                    <img src={url} width="100px" />
                </li>
            )
        })
    }
    render() {
        let dataProduct = data
        const {imgName,productName, introProduct} = this.state
        return (
            <div className="container-fluid model__main">
                <div className="row py-5 justify-content-around">
                    <div className="card card__glasses col-3" style={{ width: '18rem' }}>
                        <img src={imgName} className="card-img-top img-fluid img__glass" alt="" />
                        <div className="card-body card__body" id="bodyCard">
                            <h5 className="card-title">{productName}</h5>
                            <p className="card-text">{introProduct}</p>
                        </div>
                    </div>
                </div>
                <ul className="row wrap d-inline-flex flex-row justify-content-start list-group list-group-flush container">
                    
                        {this.renderGlasses(dataProduct)}
                    
                </ul>
            </div>
        );
    }
}

export default GlassesRoom;