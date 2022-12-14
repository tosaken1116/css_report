import { useState } from "react";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import TopPanel from "./topPanel";
export default function PresentBox() {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=""
        >
            <div className="">
                <div
                    className={
                        " absolute  right-[501.5px] scale-x-1416 scale-y-51 " +
                        (hover
                            ? "top-[100px] delay-700 duration-300"
                            : "top-[140px] duration-300")
                    }
                >
                    <div className=" origin-center rotate-45">
                        <TopPanel propsHover={hover}></TopPanel>
                    </div>
                </div>
                <div className="absolute right-[501.5px] top-[229px] z-0 flex">
                    <div className=" mt-[2.5px]  skew-y-20">
                        <LeftPanel propsHover={hover}></LeftPanel>
                    </div>
                    <div className=" mt-[95.5px] ml-64 -skew-y-20">
                        <RightPanel propsHover={hover}></RightPanel>
                    </div>
                </div>
                <div className="absolute top-[275px] right-[503px] -z-10 flex">
                    <div className=" -mt-[43px] ml-[20px] -skew-y-20">
                        <LeftPanel propsHover={hover}></LeftPanel>
                    </div>
                    <div className="-mt-[136px] ml-64 skew-y-20">
                        <RightPanel propsHover={hover}></RightPanel>
                    </div>
                </div>
                {/* <div className="  absolute ml-60 -skew-y-12  transform-cpu bg-black p-24"></div>
                <div className="  absolute z-10 ml-60  mt-20 w-[192px] -skew-y-12 transform-cpu bg-yellow-200">
                    ???
                </div>
                <div className="  absolute z-10 ml-80  h-[192px] -skew-y-12 transform-cpu bg-yellow-200"></div>
                ???
            </div>
            <div>
                <div className="  absolute skew-y-12  transform-cpu bg-black p-24"></div>
                <div className="  absolute z-10  mt-20 w-[192px] skew-y-12 transform-cpu bg-yellow-200">
                    ???
                </div>
                <div className="  ml-2- absolute z-10 ml-20 h-[192px] skew-y-12 transform-cpu bg-yellow-200">
                    ???
                </div> */}
            </div>
            ???
            {/* <div className="before:content-['Not_Hovering'] hover:before:content-['Hovering']"></div> */}
        </div>
    );
}
