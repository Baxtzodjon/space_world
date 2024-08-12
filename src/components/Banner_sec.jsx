import React from "react";
import sateliteImgSec from "/images/satelite_sec.jpeg"

const Banner_sec = () => {
    return (
        <>

            <div className="bg-black text-white pb-12 relative z-50">

                <div className="container">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">

                        <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-sky-800">

                            <p className="text-sky-800 uppercase">Наша цель</p>

                            <h1 className="uppercase text-5xl">Вселенная</h1>

                            <p>Вселенная - это всё существующее пространство, время, материя и энергия. Она начала своё расширение около 13.8 миллардов лет назад в Великом взрыве. С тех пор она расширяется, и учёные изучают её структуру и эволюцию, чтобы понять её природу и конечные цели.</p>

                            <button className="primary-btn">Узнать Больше</button>

                        </div>

                        <div>

                            <img src={sateliteImgSec} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover hover:scale-105 duration-200 hover:rounded-2xl" />

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Banner_sec;