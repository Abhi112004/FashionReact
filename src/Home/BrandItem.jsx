import React from "react";
const BrandItem=(prop)=>{
    return(
        <>

<div className="brand-item">
              <div className="brand-item-inner">
                <img src={prop.img} alt="1" />
              </div>
            </div>
        </>
    );
}
export default BrandItem;