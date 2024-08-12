import React from "react";
import MountainPng from "/icons/moon-surface-hd.png";

const Hero = () => {
    return (
        <>

            <div className="bg-black/20 h-full text-white relative z-50">

                <div className="h-full flex justify-center items-center p-4">

                    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="space-y-4 lg:pr-36">

                            <h1 className="text-5xl font-bold uppercase">Вращаться Вокруг Земли</h1>

                            <p>Космос - бескрайняя вселанная, где звезды и планеты вращаются в гармонии. Интересно, что конкретно о космосе вас интересует?</p>

                            <button className="primary-btn">Узнать Больше</button>

                        </div>

                        <div></div>

                    </div>

                </div>

                <img src={MountainPng} alt="" className="absolute right-0 bottom-0 w-full h-[200px] brightness-50 z-10" />

                <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>

            </div>

        </>
    )
}

export default Hero;