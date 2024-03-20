import React, { useEffect } from 'react';


const LoaderComponent = () => {
    useEffect(()=>{
        
            const loader_parent = document.getElementById("loader");
            setTimeout(() => {
              var loader = document.getElementsByClassName("body_loader_item");
        
              for (let i = 0; i < loader.length; i++) {
                const element = loader[i];
                element.classList.add("abc");
              }
            }, 200);
            setTimeout(() => {
              loader_parent.classList.add("abc");
            }, 500);
          
    },[])
  return (
    <div id="loader" className="customo_body_laoder">
      <div className="body_loader_item"></div>
      <div className="body_loader_item"></div>
      <div className="body_loader_item"></div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
