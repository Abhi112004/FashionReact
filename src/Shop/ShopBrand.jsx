import React from "react";

const ShopBrand=(prop)=>{
    return(
        <>
        <div className="ShopBrand-outer">
            <div className="ShopBrand-inner">
                <img src="assets/image/Shop-top.png" alt="" />
                <div className="ShopBrand-text">
                    <h2>{prop.title}</h2>
                    <p>{prop.Ptext}</p>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default ShopBrand;