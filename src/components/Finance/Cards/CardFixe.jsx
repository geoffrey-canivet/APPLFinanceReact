import {
    faCreditCard,
    faHouse,
    faUmbrella,
    faTicket,
    faChartBar,
    faPlusCircle,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFixe = () => {
    const cardData = [
        {
            title: "Dépenses fixes",
            icon: faHouse,
            info: [
                { name: "Electricité", price: "200 €" },
                { name: "Loyer", price: "850 €" },
                { name: "Eau", price: "100 €" },
                { name: "Internet", price: "50 €" },
                { name: "Téléphone", price: "30 €" },
                { name: "Electricité", price: "200 €" },
                { name: "Loyer", price: "850 €" },
                { name: "Eau", price: "100 €" },
                { name: "Internet", price: "50 €" },
                { name: "Téléphone", price: "30 €" },
                { name: "Autres", price: "70 €" },
            ],
            totals: { month: "1300 €", quarter: "3900 €", year: "15600 €" },
        },
        {
            title: "Cartes de crédit",
            icon: faCreditCard,
            info: [
                { name: "Visa", price: "300 €" },
                { name: "MasterCard", price: "200 €" },
                { name: "American Express", price: "100 €" },
                { name: "Discover", price: "50 €" },
                { name: "Diners Club", price: "150 €" },
                { name: "JCB", price: "80 €" },
            ],
            totals: { month: "880 €", quarter: "2640 €", year: "10560 €" },
        },
        {
            title: "Assurances",
            icon: faUmbrella,
            info: [
                { name: "Maison", price: "150 €" },
                { name: "Voiture", price: "250 €" },
                { name: "Santé", price: "200 €" },
            ],
            totals: { month: "600 €", quarter: "1800 €", year: "7200 €" },
        },
        {
            title: "Abonnements",
            icon: faTicket,
            info: [
                { name: "Netflix", price: "15 €" },
                { name: "Spotify", price: "10 €" },
                { name: "Amazon Prime", price: "12 €" },
                { name: "Disney+", price: "8 €" },
                { name: "HBO Max", price: "14 €" },
                { name: "YouTube Premium", price: "11 €" },
            ],
            totals: { month: "70 €", quarter: "210 €", year: "840 €" },
        },
    ];

    return (
        <>
            <style>
                {`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #74C0FC; /* Couleur de la barre */
                    border-radius: 4px; /* Coins arrondis */
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #58a7e0; /* Couleur au survol */
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background-color: transparent; /* Fond invisible */
                }

                .hover\\:overflow-y-auto:hover {
                    overflow-y: auto; /* Activer le scroll au survol */
                }

                .hover\\:overflow-y-hidden {
                    overflow-y: hidden; /* Désactiver le scroll par défaut */
                }
                `}
            </style>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center m-5">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between px-4 pt-4 pb-4 bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <FontAwesomeIcon
                                    className="mr-3"
                                    icon={card.icon}
                                    style={{color: "#74C0FC"}}
                                />
                                {card.title}
                            </h5>
                            <td className="px-4 py-2 flex gap-2">
                                <button
                                    className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
                                    title="Graphique"
                                >
                                    <FontAwesomeIcon icon={faChartBar}/>
                                </button>
                                <button
                                    className="text-gray-500 hover:text-green-500 dark:hover:text-green-400"
                                    title="Ajouter un élément"
                                >
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>
                            </td>
                        </div>
                        {/* BODY */}
                        <div className="relative w-full h-64 overflow-y-hidden hover:overflow-y-auto custom-scrollbar">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="sticky top-0 text-xs font-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-2">Nom</th>
                                    <th scope="col" className="px-4 py-2">Prix</th>
                                    <th scope="col" className="px-4 py-2">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {card.info.map((item, i) => (
                                    <tr
                                        key={i}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <td
                                            className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-2">{item.price}</td>
                                        <td className="px-4 py-2"><FontAwesomeIcon icon={faBars} /></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        {/* FOOTER */}
                        <div className="flex justify-between px-4 py-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{card.totals.month}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Mois</div>
                            </div>
                            <div className="flex-1 text-center border-r border-gray-300 dark:border-gray-600">
                                <div className="font-semibold text-gray-900 dark:text-white">{card.totals.quarter}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Trimestre</div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="font-semibold text-gray-900 dark:text-white">{card.totals.year}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Année</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardFixe;
