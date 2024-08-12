import React from "react";
import sateliteimg from "/images/satelite_fir.jpeg"

const Banner = () => {
    return (
        <>

            <div className="bg-black text-white pb-12 relative z-50">

                <div className="container">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">

                        <div>

                            <img src={sateliteimg} alt="" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover hover:scale-105 duration-200 hover:rounded-2xl" />

                        </div>

                        <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-sky-800">

                            <p className="text-sky-800 uppercase">Наша миссия</p>

                            <h1 className="uppercase text-5xl">Рапидкаст</h1>

                            <p>Для движения по орбите вокруг Земли аппарат должен иметь начальную скорость, равную или большую первой космической скорости. Полёты ИСЗ выполняются на высотах до нескольких сотен километров. Нижнюю границу высоты полёта ИСЗ обуславливает избегания процесса быстрого торможения в атмосфере.</p>

                            <button className="primary-btn">Узнать Больше</button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Banner;