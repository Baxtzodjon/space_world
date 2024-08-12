import React from "react";

const Footer = () => {
    return (
        <>

            <div className="bg-gray-800 text-white px-5 relative z-50">

                <footer className="max-w-[1200px] mx-auto text-white">

                    <div className="grid md:grid-cols-3 py-5">

                        <div className="py-8 px-4">

                            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 capitalize">будьте готовы расти</h1>

                            <p>Получите Эксклюзивное <span className="font-bold">Обновление</span> прямо на свой почтовый ящик.</p>

                            <br />

                            <div className="flex items-center h-10">

                                <input type="text" placeholder="Email" className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2" />

                                <button className="primary-btn">Отправить</button>

                            </div>

                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">

                            <div>

                                <div className="py-8 px-4">

                                    <h1 className="text-xl font-bold mb-3 capitalize">быстрые ссылки</h1>

                                    <ul className="flex flex-col gap-3">

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

                            </div>

                            <div>

                                <div className="py-8 px-4">

                                    <h1 className="text-xl font-bold mb-3 capitalize">получить помощь</h1>

                                    <ul className="flex flex-col gap-3">

                                        <li>

                                            <a href="#">FAQ</a>

                                        </li>

                                        <li>

                                            <a href="#">Поддерживать</a>

                                        </li>

                                        <li>

                                            <a href="#">Недоразумения</a>

                                        </li>

                                        <li>

                                            <a href="#">Обращаться</a>

                                        </li>

                                    </ul>

                                </div>

                            </div>

                            <div>

                                <div className="py-8 px-4">

                                    <h1 className="text-xl font-bold mb-3">Связаться с нами</h1>

                                </div>

                                <div className="space-y-3">

                                    <div className="flex items-center gap-2">

                                        <i className="bx bxs-location-plus"></i>

                                        <p>Uzbekistan, Samarqand</p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <i className="bx bxs-message-dots"></i>

                                        <p>rasulovbaxtzod@gmail.com</p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <i className="bx bxs-phone"></i>

                                        <p>+998 90 466-79-69</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="hidden sm:block">

                        <div className="flex items-center justify-between py-6 border-t-2 border-gray-400">

                            <span className="text-sm text-gray-400">copyright &copy; 2024 by Space</span>

                            <div className="flex items-center justify-center gap-4 pb-4">

                                <a href="#" className="text-4xl">

                                    <i className="bx bxl-instagram"></i>

                                </a>

                                <a href="#" className="text-4xl">

                                    <i className="bx bxl-facebook-circle"></i>

                                </a>

                                <a href="#" className="text-4xl">

                                    <i className="bx bxl-linkedin-square"></i>

                                </a>

                            </div>

                            <span className="text-sm text-gray-400">

                                <ul className="flex gap-2">

                                    <li className="cursor-pointer">Privacy Policy</li>

                                    <li className="cursor-pointer">Terms & Conditions</li>

                                </ul>

                            </span>

                        </div>

                    </div>

                </footer>

            </div>

        </>
    )
}

export default Footer;