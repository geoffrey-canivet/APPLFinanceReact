import React, { useState } from "react";
import CardFixe from "../Cards/CardFixe.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileInvoiceDollar,
    faPiggyBank,
    faMoneyBillWave,
    faCalendarAlt,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const Accordions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const accordionData = [
        {
            id: 1,
            title: "Dépenses fixes",
            content: <CardFixe />,
            icon: faFileInvoiceDollar,
        },
        {
            id: 2,
            title: "Dépenses occasionnelles",
            content: <CardFixe />,
            icon: faPiggyBank,
        },
        {
            id: 3,
            title: "Revenu",
            content: <CardFixe />,
            icon: faMoneyBillWave,
        },
        {
            id: 4,
            title: "Détail du mois",
            content: <CardFixe />,
            icon: faCalendarAlt,
        },
        {
            id: 5,
            title: "Comparer les mois",
            content: <CardFixe />,
            icon: faChartLine,
        },
    ];

    return (
        <div className="text-white">
            <div id="accordion-open">
                {accordionData.map((item, index) => (
                    <div key={item.id} className="mb-2">
                        <h2 id={`accordion-heading-${item.id}`}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 focus:ring-4 dark:bg-gray-700 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                                    index === 0 ? "rounded-t-xl" : ""
                                } ${
                                    index === accordionData.length - 1 ? "rounded-b-xl" : ""
                                }`}
                                onClick={() => toggleAccordion(item.id)}
                                aria-expanded={openAccordion === item.id}
                                aria-controls={`accordion-body-${item.id}`}
                            >
                                <span className="flex items-center">
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="w-5 h-5 mr-3 text-blue-400"
                                    />
                                    {item.title}
                                </span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform transition-transform duration-300 ${
                                        openAccordion === item.id ? "rotate-180" : ""
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-body-${item.id}`}
                            className={`transition-all duration-300 overflow-hidden ${
                                openAccordion === item.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                {item.content}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordions;
