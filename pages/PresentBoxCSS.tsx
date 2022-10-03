import React from "react";
import PresentBox from "./components/presentBox";
export default function PresentBoxCSS() {
    return (
        <div className=" animate-bounce shadow-black drop-shadow-xl">
            <div className=" scale-50">
                <button>
                    <PresentBox></PresentBox>
                </button>
            </div>
        </div>
    );
}
