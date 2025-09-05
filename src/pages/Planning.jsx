import { useState } from "react";
import {Link} from "react-router-dom";

const scheduleData = [
    // === Cours coachés ===
    {
        coach: "Coach Sanaa",
        type: "Femme",
        class: "Aerobic",
        times: { lundi: "9H", mercredi: "9H", vendredi: "9H" }
    },
    {
        coach: "Coach Meryam",
        type: "Femme",
        class: "Coach",
        times: { lundi: "20H", mercredi: "20H", vendredi: "20H" }
    },
    {
        coach: "Coach Laila",
        type: "Femme",
        class: "Aerobic",
        times: { lundi: "16H", mercredi: "16H", vendredi: "16H" },
        
    },
    {
        coach: "Coach Laila",
        type: "Femme",
        class: "Aerobic",
        times: { lundi: "17H", mercredi: "17H", vendredi: "17H" },
        
    },
    {
        coach: "Coach Ahmed",
        type: "Mixte",
        class: "Fitness",
        times: { mardi: "17H", jeudi: "17H", samedi: "17H" }
    },
    {
        coach: "Coach Amine",
        type: "Mixte",
        class: "Taebo",
        times: { mardi: "22H", jeudi: "22H", samedi: "22H" }
    }
];

// Accès général
const generalAccess = {
    Femme: ["lundi", "mercredi", "vendredi"],
    Mixte: ["mardi", "jeudi", "samedi", "dimanche"]
};

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function Planning() {
    const [selectedCoach, setSelectedCoach] = useState("Tous");
    const [selectedType, setSelectedType] = useState("Tous");

    const filteredData = scheduleData.filter((entry) => {
        const coachMatch = selectedCoach === "Tous" || entry.coach === selectedCoach;
        const typeMatch = selectedType === "Tous" || entry.type === selectedType;
        return coachMatch && typeMatch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-4">
            {/* Titre */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-teal-400 tracking-tight">
                    Planning des Cours & Accès
                </h1>
                <p className="mt-2 text-gray-400 text-lg">
                    Consultez les horaires de vos coachs et les créneaux généraux Mixte/Femme
                </p>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
                <select
                    value={selectedCoach}
                    onChange={(e) => setSelectedCoach(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-teal-400"
                >
                    <option value="Tous">Tous les coachs</option>
                    {[...new Set(scheduleData.map((d) => d.coach))].map((coach) => (
                        <option key={coach} value={coach}>
                            {coach}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-200 focus:ring-2 focus:ring-teal-400"
                >
                    <option value="Tous">Tous les types</option>
                    <option value="Femme">Femme</option>
                    <option value="Mixte">Mixte</option>
                </select>
            </div>

            {/* Tableau */}
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                        <th className="p-4 text-left text-sm md:text-base">Classe / Accès</th>
                        {days.map((day) => (
                            <th key={day} className="p-4 text-sm md:text-base border-l border-gray-600">
                                {day}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="bg-gray-800/50">
                    {/* Ligne Accès général */}
                    <tr className="border-b border-gray-700 bg-gray-900/50">
                        <td className="p-4 font-bold text-yellow-400">Accès Général</td>
                        {days.map((day) => {
                            const dayKey = day.toLowerCase();
                            let accessType = "";

                            if (generalAccess.Femme.includes(dayKey)) {
                                accessType = "Femme (8h - 23h)";
                            } else if (generalAccess.Mixte.includes(dayKey)) {
                                accessType = "Mixte (8h - 23h)";
                            }

                            return (
                                <td key={day} className="p-3 border-l border-gray-700 text-gray-300">
                                    {accessType || "-"}
                                </td>
                            );
                        })}
                    </tr>

                    {/* Lignes des coachs */}
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors"
                            >
                                <td className="p-4 font-semibold text-teal-300">
                                    {item.class}
                                    <div className="text-xs text-gray-400 mt-1">{item.coach}</div>
                                </td>
                                {days.map((day) => (
                                    <td
                                        key={day}
                                        className="p-3 border-l border-gray-700 text-gray-200 text-sm"
                                    >
                                        {item.times[day.toLowerCase()] || "-"}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={days.length + 1}
                                className="p-6 text-center text-gray-500 italic"
                            >
                                Aucun cours disponible
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className=" text-white py-12 px-6 w-full">
            <center><button
                onClick={() => window.print()}
                className="mb-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded shadow"
            >
                Export PDF Planning
            </button>
            </center>
            </div>
            <div className="bg-gray-900 text-white py-12 px-6 w-full">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-teal-400">Club Miraj</h3>
                        <p className="text-gray-400">
                            Votre oasis de bien-être à Béni Mellal. Fitness moderne, hammam traditionnel et spa luxueux.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">Accueil</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Lot Mounjid No2 Qut Limoune, Béni Mellal
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +212 6 53 26 91 13
                            </li>
                            <li className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                clubmiraj@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://web.facebook.com/profile.php?id=100036867469940"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
                                aria-label="Page Facebook"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/club_miraj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
                                aria-label="Page Instagram"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                                </svg>
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Club Miraj. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    );
}

export default Planning;
