import React from "react";
const bgImage = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80'

const BackgroundMain: React.FC = () => {
    return (
        <div className="relative block h-48 w-screen">
            <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
    )
}


export default BackgroundMain;