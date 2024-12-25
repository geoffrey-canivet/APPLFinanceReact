import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCircleExclamation,
    faGear,
    faRightFromBracket,
    faTriangleExclamation,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo-small.png";

const Navigation = ({ toggleDrawer }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Utilisation de useRef pour le dropdown

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Fermer le dropdown si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white dark:bg-gray-700 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between mx-auto p-3 pl-10 pr-10">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        APPLAB
                    </span>
                    <button
                        id="dbtn"
                        onClick={toggleDrawer}
                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                        type="button"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </a>
                <div className="relative flex dark:text-white">
                    <div className="text-center">
                        <p className="font-bold text-sm mr-4">Geoffrey</p>
                        <p className="text-sm text-gray-500">Admin</p>
                    </div>

                    <button
                        id="dropdownUserAvatarButton"
                        onClick={toggleDropdown}
                        className="flex text-sm bg-gray-800 rounded md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        type="button"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-10 h-10 rounded"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="user photo"
                        />
                    </button>

                    {/* Dropdown menu */}
                    <div
                        id="dropdownAvatar"
                        ref={dropdownRef}
                        className={`z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                            isDropdownOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="font-medium text-xs truncate">
                                geoffrey.canivet@gmail.com
                            </div>
                        </div>
                        <hr className="border-gray-200 dark:border-gray-600" />
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownUserAvatarButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <FontAwesomeIcon className="mr-3" icon={faUser} />Profil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <FontAwesomeIcon className="mr-3" icon={faGear} />Réglages
                                </a>
                            </li>
                        </ul>
                        <hr className="border-gray-200 dark:border-gray-600" />
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownUserAvatarButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <FontAwesomeIcon className="mr-3" icon={faCircleExclamation} />Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <FontAwesomeIcon className="mr-3" icon={faTriangleExclamation} />Earnings
                                </a>
                            </li>
                        </ul>
                        <hr className="border-gray-200 dark:border-gray-600" />
                        <div className="py-2">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={faRightFromBracket}
                                />
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
