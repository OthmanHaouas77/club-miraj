import { useState } from 'react';
import api from '../api/axios';
import { Link } from "react-router-dom";

function Profile() {
    // Le contenu fonctionnel reste inchangé
    const userData = JSON.parse(localStorage.getItem('user')) || {};
    const [mode, setMode] = useState('view');
    const [formData, setFormData] = useState({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        password: '',
        avatar: null
    });
    const [preview, setPreview] = useState(
        userData.avatar ? `http://localhost:5000${userData.avatar}` : '/default-avatar.png'
    );
    const [message, setMessage] = useState('');
    const isSubscriptionActive = userData.subscriptionEndDate
        ? new Date(userData.subscriptionEndDate) > new Date()
        : false;
    const subscriptionDate = userData.subscriptionEndDate
        ? new Date(userData.subscriptionEndDate).toLocaleDateString()
        : 'Aucun';

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'avatar' && files[0]) {
            setFormData({ ...formData, avatar: files[0] });
            setPreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        if (formData.password) data.append('password', formData.password);
        if (formData.avatar) data.append('avatar', formData.avatar);

        try {
            const res = await api.put('/users/profile', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            setMessage('✅ Profil mis à jour avec succès');
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setPreview(`http://localhost:5000${res.data.user.avatar}`);
            setMode('view');
        } catch (err) {
            setMessage('❌ Erreur de mise à jour');
        }
    };

    return (
        <div className="w-full overflow-hidden min-h-screen bg-gray-100">
            {/* Section Hero avec background de hammam turc */}
            <div className="relative w-full h-[50vh]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-10"></div>

                <div
                    className="absolute inset-0 bg-cover bg-center w-full"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1544168200-89cac9c5c87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
                        backgroundPosition: "center 70%"
                    }}>
                </div>
                <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Profile</h1>
                    <div className="w-32 h-1 bg-white mx-auto mb-6 rounded-full"></div>


                </div>
            </div>

            {/* Cadre pour le profil */}
            <div className="w-full max-w-4xl mx-auto p-6 -mt-32 relative z-30">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                    {/* Menu Tabs */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setMode("view")}
                            className={`px-6 py-3 rounded-full font-semibold transition ${
                                mode === "view"
                                    ? "bg-purple-600 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Voir Profil
                        </button>
                        <button
                            onClick={() => setMode("edit")}
                            className={`px-6 py-3 rounded-full font-semibold transition ${
                                mode === "edit"
                                    ? "bg-purple-600 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Éditer Profil
                        </button>
                    </div>

                    {/* Message */}
                    {message && (
                        <div className="text-center mb-6">
                            <p className="text-sm text-green-600 bg-green-50 py-2 px-4 rounded-lg inline-block">
                                {message}
                            </p>
                        </div>
                    )}

                    {/* Affichage Profil */}
                    {mode === 'view' ? (
                        <div className="flex flex-col items-center text-center space-y-6">
                            {/* Avatar */}
                            <div className="relative">
                                <img
                                    src={preview}
                                    alt="avatar"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-100 shadow-md"
                                />
                                <div className="absolute bottom-2 right-2 bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Nom et Email */}
                            <h2 className="text-3xl font-bold text-gray-800">
                                {formData.firstName} {formData.lastName}
                            </h2>
                            <div className="flex flex-col items-center space-y-2">
                                <p className="text-gray-600 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-purple-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    {userData.email}
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2 text-purple-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    {userData.phone || "Non renseigné"}
                                </p>
                            </div>

                            {/* Abonnement */}
                            <div className="mt-6 p-4 bg-purple-50 rounded-xl w-full max-w-md">
                                <p className="text-gray-700 font-medium mb-2">
                                    Statut d'abonnement
                                </p>
                                <div className="flex justify-between items-center">
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                                            isSubscriptionActive
                                                ? "bg-green-200 text-green-800"
                                                : "bg-red-200 text-red-700"
                                        }`}
                                    >
                                        {isSubscriptionActive ? "Actif" : "Expiré"}
                                    </span>
                                    <p className="text-gray-600 text-sm">
                                        Expire le: <span className="font-semibold">{subscriptionDate}</span>
                                    </p>
                                </div>
                            </div>

                            <button
                                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-md"
                                onClick={() => setMode("edit")}
                            >
                                Modifier le profil
                            </button>
                        </div>
                    ) : (
                        // Formulaire Edition
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col items-center">
                                <div className="relative mb-6">
                                    <img
                                        src={preview}
                                        alt="avatar"
                                        className="w-32 h-32 rounded-full object-cover border-4 border-purple-100 shadow-md"
                                    />
                                    <label className="absolute bottom-2 right-2 bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <input
                                            type="file"
                                            name="avatar"
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Prénom</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Prénom"
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Nom</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Nom"
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2">Nouveau mot de passe</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Laissez vide pour ne pas modifier"
                                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition"
                                    onClick={() => setMode("view")}
                                    type="button"
                                >
                                    Annuler
                                </button>
                                <button
                                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
                                    type="submit"
                                >
                                    Sauvegarder
                                </button>
                            </div>
                        </form>
                    )}
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
                                    to="/services"
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/abonnement"
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    Abonnements
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
                            <a
                                href="#"
                                className="bg-gray-800 p-3 rounded-full hover:bg-teal-600 transition-colors"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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

export default Profile;