import { useState } from "react";
import Logo from "../assets/logo.png";
import Mess from "../assets/mess.png";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-primary-color shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-4 md:block">
                        <div className="flex items-center">
                            <img className="w-13" src={Logo} alt="VARANDA.IT" />
                            <h1 className="font-bold text-3xl mt-4 text-white">VARANDA.IT</h1>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white text-base font-normal cursor-pointer">Varanda</li>
                            <li className="text-white text-base font-normal cursor-pointer">Karreira</li>
                            <li className="text-white text-base font-normal cursor-pointer">Sentru Ajuda</li>
                            <li className="text-white text-base font-normal cursor-pointer">Blog</li>
                            <li className="text-white text-base font-normal cursor-pointer">Produtu</li>
                            <li className="text-white text-base font-normal cursor-pointer">Sustentabilidade</li>
                            <div className="pl-28">
                                <button className="bg-secondary-color w-40 rounded-3xl h-14 items-center py-2 px-7 flex gap-1 text-white border-2 border-white">
                                    <p>Messenger</p>
                                    <img src={Mess} alt="" />
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}
