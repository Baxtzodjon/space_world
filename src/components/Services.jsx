import React from "react";
import wave from "/images/wave.gif";

const ServiceData = [
    {
        title: "HST",
        content: "300-1500km",
        description: "Используется для астрономических наблюдений, получения потрясающих изображений Вселенной.",
        icon: "https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/apps/katomic.png",
    },
    {
        title: "ISS",
        content: "500-1500km",
        description: ", это обитаемый искусственный спутник Земли, вращающийся вокруг Земли и служащий лабораторией.",
        icon: "https://cdn1.iconfinder.com/data/icons/space-ultra-color/60/013_-_Space_Shuttle-128.png",
    },
    {
        title: "GPS",
        content: "300-1500km",
        description: "Часть глобальной системы позиционирования (GPS), используемая для навигации.",
        icon: "https://cdn0.iconfinder.com/data/icons/transportation-vol-2-13/512/rocket_launch_shuttle_space-128.png",
    },
];

const Services = () => {
    return (
        <>

            <div className="bg-black text-white relative z-50">

                <div className="container">

                    <div className="min-h-[400px]">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-50">

                            {ServiceData.map((data, index) => (
                                <div key={index} className="min-h-[180px] flex flex-col items-center justify-center gap-2 bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto hover:scale-105 duration-200">

                                    <img src={data.icon} alt="" />

                                    <h1>{data.title}</h1>

                                    <p>{data.content}</p>

                                    <p className="text-sm">{data.description}</p>

                                </div>
                            ))}

                        </div>

                        <img src={wave} alt="" className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]" />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Services;