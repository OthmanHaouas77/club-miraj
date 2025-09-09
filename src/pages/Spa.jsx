import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Spa() {
    const [showPopup, setShowPopup] = useState(false);

    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setShowPopup(false);
            }
        };
        if (showPopup) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [showPopup]);

    return (
        <div className="w-full overflow-hidden min-h-screen bg-gray-100 relative">
            {/* Overlay + popup */}
            {showPopup && (
                <div
                    id="overlay"
                    onClick={handleOverlayClick}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                >
                    <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center relative">
                        <h2 className="text-lg font-bold text-rose-800 mb-2">
                            Réservation
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Contactez-nous par téléphone ou WhatsApp :
                            <br />
                            <span className="text-rose-600 font-semibold text-xl">
                                +212 6 53 26 91 13
                            </span>
                        </p>
                        
                        {/* Boutons de contact */}
                        <div className="flex flex-col gap-3 mt-6">
                            {/* Bouton d'appel */}
                            <a
                                href="tel:+212653269113"
                                className="relative flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full shadow-md font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Appeler</span>
                            </a>
                            
                            {/* Bouton WhatsApp */}
                            <a
                                href="https://wa.me/212653269113"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-md font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                        
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-6 bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}

            {/* Hero */}
            <div className="relative w-full h-[70vh]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-purple-900/70 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center w-full"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1544168200-89cac9c5c87b?auto=format&fit=crop&w=1740&q=80')",
                        backgroundPosition: "center 70%",
                    }}
                ></div>
                <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Hammam & Spa Turc
                    </h1>
                    <div className="w-32 h-1 bg-rose-300 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-white">
                        Espace exclusivement féminin - Détente, bien-être et
                        tradition dans un cadre luxueux
                    </p>
                </div>
            </div>

            {/* Section prestations */}
            <div className="w-full max-w-5xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white -mt-20 relative z-30">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
                        Nos Prestations
                    </h1>
                    <div className="w-20 h-1 bg-rose-300 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Nous offrons une gamme de services de qualité supérieure pour vous aider à vous détendre, à vous purifier et à vous rafraîchir.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            titre: "Hammam",
                            desc: "Hammam  ",
                            prix: "30 Dhs",
                            img: "https://leshammams.ma/wp-content/uploads/2021/03/DSC_2536.jpg",
                        },
                        {
                            titre: "Gommage",
                            desc: "Hammam + Gommage   ",
                            prix: "60 Dhs",
                            img: "https://www.lespetitesexperiences.com/wp-content/uploads/2025/06/illustration-hammam-traditionnel-maroc-e1749211200400.jpeg",
                        },
                        {
                            titre: "Pack de café",
                            desc: "Savonnage au savon noir au choix + Gommage + Massage relaxant 20 min (À l’intérieur du hammam)",
                            prix: "120 Dhs",
                            img: "https://maroc-argan.fr/1417-large_default/coffret-hammam-et-spa.jpg",
                        },
                        {
                            titre: "Pack  EMERAUD",
                            desc: "Savonnage avec savon noir aromatisé + Massage relaxant de 30 min avec huile spécial aromatisé + Petite bouteille d’eau + Tisane offerte",
                            prix: "150 Dhs",
                            img: "https://labelledishop.com/wp-content/uploads/2021/10/245137759_595210905126997_1029055779090495937_n.jpg",
                        },

                    ].map((pack, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-white to-rose-200 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105"
                        >
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={pack.img}
                                    alt={pack.titre}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mt-4 mb-2 text-rose-800">
                                {pack.titre}
                            </h3>
                            <p className="text-gray-700 mb-3">{pack.desc}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-bold text-rose-700">
                                    {pack.prix}
                                </span>
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                                >
                                    Réserver
                                </button>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-900 text-white py-12 px-6 w-full mt-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-teal-400">Club Miraj</h3>
                        <p className="text-gray-400">
                            Votre oasis de bien-être à Béni Mellal. Fitness moderne, hammam
                            traditionnel et spa luxueux.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-1 text-teal-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Lot Mounjid No2 Qut Limoune, Béni Mellal
                            </li>
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-1 text-teal-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +212 6 53 26 91 13
                            </li>
                            <li className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 mt-1 text-teal-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
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
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/club_miraj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
                                aria-label="Page Instagram"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
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

export default Spa;