import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section - Nouvelle image de fitness */}
            <div className="relative bg-gray-900 text-white w-full min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-teal-900/70 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center w-full"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
                        backgroundPosition: 'center 70%',
                    }}
                />
                <div
                    className={`relative z-20 max-w-6xl mx-auto py-24 px-6 text-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Bienvenue au <span className="text-teal-400 font-extrabold">Club Miraj</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Votre oasis de bien-être: fitness moderne, hammam traditionnel et spa luxueux
                    </p>
                    <Link
                        to="/Planning"
                        className="inline-block bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-bold text-xl"
                    >
                        Planning
                    </Link>
                </div>
            </div>

            {/* Services Section - Liens modifiés */}
            <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                        Nos Espaces <span className="text-teal-600">Exclusifs</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Fitness Card - Lien vers /planing */}
                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Espace Fitness"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">Fitness & Coaching</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Matériel TechnoGym dernier cri et programmes personnalisés pour tous vos objectifs.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link to="/planning" className="text-teal-600 font-medium hover:underline flex items-center">
                                        Découvrir
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <div className="flex space-x-2">
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Cardio</span>
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Musculation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hammam Card - Lien vers /spa (image changé) */}
                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                <img
                                    src="https://scontent.ftng4-1.fna.fbcdn.net/v/t1.6435-9/68394797_679620049170252_3343494008277041152_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBHTNlPgJMa-n0z4CsFyzLyZa_JZ9_K6fJlr8ln38rp6N856WufsKGu3jzPSFVbEKx17Nt6cVHjuZ-w9VxGOij&_nc_ohc=Pi14_6A6Id4Q7kNvwHhRaxK&_nc_oc=Admgk0YqFxDFwo0ll2fuDihsrtAyk_FmknATfm8pQqm0Xb1i0gicVrwUaOcu64iUQIM&_nc_zt=23&_nc_ht=scontent.ftng4-1.fna&_nc_gid=zSpq23iIPD1RMVwHHtynCg&oh=00_AfYggKvyKirJtb2rTI68sh6nYNBkFt9TyjR9LtjnK-oDiQ&oe=68E2575D"
                                    alt="Hammam Traditionnel"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">Hammam Traditionnel</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Purification et détente dans un cadre inspiré des rituels marocains ancestraux.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link to="/spa" className="text-teal-600 font-medium hover:underline flex items-center">
                                        Voir les prestations
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="CurrentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <div className="flex space-x-2">
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Détente</span>
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Tradition</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spa Card - Lien vers /spa */}
                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Espace Spa"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                />
                                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">Spa Privilège</h3>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    Soins exclusifs aux huiles essentielles pour une relaxation totale.
                                </p>
                                <div className="flex justify-between items-center">
                                    <Link to="/spa" className="text-teal-600 font-medium hover:underline flex items-center">
                                        Explorer les soins
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                    <div className="flex space-x-2">
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Luxe</span>
                                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Relaxation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials - DESIGN amélioré (contenu inchangé) */}
            <div className="py-16 px-6 bg-gradient-to-b from-slate-900 to-gray-800 w-full">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-50">
                        Ce que disent <span className="text-teal-400">nos membres</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "Le meilleur club de Béni Mellal! L'espace fitness avec les tapis de course dernier cri est exceptionnel."
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.608 6.879 1.688M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Karim B.</p>
                                    <p className="text-gray-500 text-sm">Membre depuis 2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "Le hammam traditionnel est une expérience unique. Je recommande vivement les massages ayurvédiques!"
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h4l3 9h6l3-9h4" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Fatima Z.</p>
                                    <p className="text-gray-500 text-sm">Membre VIP</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "Matériel de fitness dernier cri et coachs professionnels. Mon lieu de bien-être préféré."
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM22 17v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Mehdi T.</p>
                                    <p className="text-gray-500 text-sm">Membre premium</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ajout de plus d'avis (design identique) */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "L'ambiance au club est incroyable. Personnel attentionné et installations impeccables."
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center" />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Sara L.</p>
                                    <p className="text-gray-500 text-sm">Membre depuis 6 mois</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "Le spa est un véritable havre de paix. Les soins sont d'une qualité exceptionnelle."
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center" />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Malak M.</p>
                                    <p className="text-gray-500 text-sm">Membre Gold</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-teal-100 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-6 text-lg">
                                "Programme de coaching personnalisé qui m'a permis d'atteindre mes objectifs rapidement."
                            </p>
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-xl w-16 h-16 flex items-center justify-center" />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-500">Nadia K.</p>
                                    <p className="text-gray-500 text-sm">Membre Fitness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section - Horaires mis à jour (DESIGN amélioré) */}
            <div className="py-16 px-6 bg-gradient-to-b from-white to-gray-100 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
                        Notre Centre à <span className="text-teal-600">Béni Mellal</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-gray-200">
                            <iframe
                                title="Carte du Club Miraj"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.090002265421!2d-6.370395899999999!3d32.3293984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3870057d87a4b%3A0xca05276448b94e4!2sClub%20Miraj!5e0!3m2!1sfr!2sma!4v1719687164252!5m2!1sfr!2sma"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div>
                            <div className="bg-gradient-to-br from-white to-teal-200 rounded-xl p-5 border border-rose-100 shadow-lg transform transition-transform hover:scale-105">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Horaires d'ouverture
                                </h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex justify-between items-center border-b pb-4">
                                        <div>
                                            <span className="font-bold text-lg text-gray-800">Lundi - Dimanche</span>
                                            <p className="text-sm text-gray-500">Ouvert tous les jours pour vous servir</p>
                                        </div>
                                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-gray-50 to-white border border-gray-300
  rounded-xl
  shadow
  font-bold
  text-lg
  text-gray-700
  px-5
  py-2.5
  transition-transform
  hover:shadow-lg
  hover:-translate-y-0.5
">
  8h - 22h
</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Adresse
                                    </h4>
                                    <p className="text-lg text-gray-600 mb-2">Lot Mounjid No2 Qut Limoune - Béni Mellal</p>

                                </div>
                                <div className="mt-8">
                                    <a
                                        href="https://www.google.com/maps/dir//Club+Miraj,+Av.+Abdelkrim+El+Khattabi,+Marrakech/@32.3293984,-6.3703959,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0xda3870057d87a4b:0xca05276448b94e4!2m2!1d-6.3678212!2d32.3293984?entry=ttu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-bold text-lg"
                                    >
                                        Obtenir l'itinéraire
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Home;
