import React, {useState} from "react";

const Accordions = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const accordionData = [
        { id: 1, title: "Dépenses fixes", content: "Détails des charges fixes." },
        { id: 2, title: "Dépenses occasionnelles", content: "Détails des dépenses occasionnelles." },
        { id: 3, title: "Revenu", content: "Détails sur les revenus mensuels." },
        { id: 4, title: "Détail du mois", content: "Résumé détaillé des dépenses et revenus du mois." },
        { id: 5, title: "Comparer les mois", content: "Comparaison des dépenses et revenus entre différents mois." },
    ];

    return (
        <div className=" text-white">
            <div id="accordion-open">
                {accordionData.map((item, index) => (
                    <div key={item.id} className="mb-2">
                        <h2 id={`accordion-heading-${item.id}`}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 focus:ring-4 dark:bg-gray-900 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                                    index === 0 ? "rounded-t-xl" : ""
                                } ${
                                    index === accordionData.length - 1 ? "rounded-b-xl" : ""
                                }`}
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <span className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {item.title}
                                </span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${openAccordion === item.id ? "rotate-180" : ""}`}
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
                                openAccordion === item.id ? "max-h-screen" : "max-h-0"
                            }`}
                        >
                            <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordions;