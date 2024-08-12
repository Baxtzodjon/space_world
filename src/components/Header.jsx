import React from "react";
import Logo from "/icons/logo.png"

const Header = () => {
    return (
        <>

            <div className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">

                <div className="container">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center text-white font-bold text-2xl">

                            <a href="#">

                                <img src={Logo} alt="" className="w-10" />

                            </a>

                            <a href="#">

                                <span>SPACE</span>

                            </a>

                        </div>

                        <div className="text-white hidden md:block">

                            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">

                                <li>

                                    <a href="#">О нас</a>

                                </li>

                                <li>

                                    <a href="#">Технология</a>

                                </li>

                                <li>

                                    <a href="#">Галактика</a>

                                </li>

                                <li>

                                    <a href="#">Спутник</a>

                                </li>

                            </ul>

                        </div>

                        <div>

                            <button className="text-white border-2 border-white px-3 py-1 rounded-md">Авторизоваться</button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Header;