import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading= ({loading})=>{
        return(
            <>
            <div className="flex justify-center p-5 h-full">
                <RingLoader className='align-self-center' color="#141b2d"
                    size={150} loading={loading} aria-label="Loading Spinner"
                    data-testid="loader" 
                />
      </div>
            </>
        )
}

export default Loading;