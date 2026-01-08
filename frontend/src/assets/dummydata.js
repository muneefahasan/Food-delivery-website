import { FaShippingFast, FaLeaf, FaHeart } from 'react-icons/fa';
import { FaBolt, FaRegClock, FaCalendarCheck, FaFire } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FiUser, FiSmartphone, FiMail, FiHome } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import { GiChefToque, GiFoodTruck } from 'react-icons/gi';
import IA1 from './IA1.png';
import IA2 from './IA2.png';
import IA3 from './IA3.png';
import IA4 from './IA4.png';
import IA5 from './IA5.png';
import IA6 from './IA6.png';

import Kebab from "./Kebab.png";
import ChickenTikka from "./ChickenTikka.png";
import ChickenChargha from "./ChickenChargha.png";
import DesiChowmein from "./DesiChowmein.png";
import GulabJamun from "./GulabJamun.png";
import MasalaDosa from "./MasalaDosa.png";
import PaneerTikka from "./PannerTikka.png";
import PalakPaneer from "./PalakPaneer.png";

import BannerImage from "./BannerImage.png";
import Image1 from "./Image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";
import Video from "./Video.mp4";

// ABOUT PAGE
export const features = [
    {
        id: 1,
        title: "Instant Delivery",
        text: "30-minute delivery guarantee in metro areas",
        icon: FaShippingFast, // store the component reference
        img: IA1,
    },
    {
        id: 2,
        title: "Master Chefs",
        text: "Michelin-star trained culinary experts",
        icon: GiChefToque,
        img: IA2,
    },
    {
        id: 3,
        title: "Premium Quality",
        text: "Locally sourced organic ingredients",
        icon: FaLeaf,
        img: IA3,
    },
];

export const stats = [
    {
        number: '10M+',
        label: 'Deliveries',
        icon: GiFoodTruck,
        gradient: 'from-purple-500 via-fuchsia-400 to-indigo-600',
    },
    {
        number: '98%',
        label: 'Satisfaction',
        icon: FaHeart,
        gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    },
    {
        number: '500+',
        label: 'Cities',
        icon: FaLeaf,
        gradient: 'from-emerald-500 via-purple-500 to-indigo-600', // Kept emerald for leaf
    },
    {
        number: '24/7',
        label: 'Support',
        icon: FaRegClock,
        gradient: 'from-purple-500 via-fuchsia-400 to-pink-500',
    },
];

// ...

// ABOUT HOMEPAGE
export const aboutfeature = [
    { icon: FaBolt, title: "Instant Ordering", text: "Seamless digital experience", color: "from-purple-400 to-indigo-500" },
    { icon: FaRegClock, title: "Always Open", text: "24/7 premium service", color: "from-purple-400 to-pink-600" },
    { icon: FaCalendarCheck, title: "Exclusive Booking", text: "Priority reservations", color: "from-violet-400 to-cyan-600" },
    { icon: FaFire, title: "Signature Dishes", text: "Chef's special creations", color: "from-fuchsia-400 to-purple-600" }
];

// SPECIAL OFFER
export const commonTransition = "transition-all duration-300";
export const addButtonBase = "flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold border-2 border-purple-400/30";
export const addButtonHover = "hover:gap-3 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 relative overflow-hidden";

// ...

// LOGIN 
export const inputBase = "w-full rounded-lg bg-gray-800 text-purple-100 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600";
export const iconClass = "absolute top-1/2 transform -translate-y-1/2 left-3 text-purple-400";

// CONTACT
export const contactFormFields = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name', Icon: FiUser },
    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 12345 67890', pattern: "[+]{0,1}[0-9]{10,13}", Icon: FiSmartphone },
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your.email@example.com', Icon: FiMail },
    { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter your delivery address', Icon: FiHome },
    { label: 'Dish Name', name: 'dish', type: 'text', placeholder: 'Enter dish name (e.g., Butter Chicken)', Icon: FaUtensils },
];

// BANNER
export const bannerAssets = {
    bannerImage: BannerImage,
    orbitImages: [Image1, Image2, Image3, Image4],
    video: Video,
};

export const cardData = [
    { id: 1, image: Kebab, title: "Succulent Kebab", description: "Grilled perfection with spices", price: "₹250", rating: "4.8", hearts: "1.2k" },
    { id: 2, image: ChickenTikka, title: "Chicken Tikka", description: "Spicy and tender chicken chunks", price: "₹300", rating: "4.9", hearts: "2k" },
    { id: 3, image: ChickenChargha, title: "Chicken Chargha", description: "Whole chicken fried to perfection", price: "₹500", rating: "4.7", hearts: "900" },
    { id: 4, image: DesiChowmein, title: "Desi Chowmein", description: "Noodles with a desi twist", price: "₹150", rating: "4.5", hearts: "1.5k" },
];

export const additionalData = [
    { id: 5, image: GulabJamun, title: "Gulab Jamun", description: "Sweet delight", price: "₹100", rating: "4.9", hearts: "3k" },
    { id: 6, image: MasalaDosa, title: "Masala Dosa", description: "Crispy crepe with potato filling", price: "₹120", rating: "4.6", hearts: "1k" },
    { id: 7, image: PaneerTikka, title: "Paneer Tikka", description: "Cottage cheese grilled with love", price: "₹280", rating: "4.8", hearts: "1.8k" },
    { id: 8, image: PalakPaneer, title: "Palak Paneer", description: "Spinach goodness with paneer", price: "₹220", rating: "4.7", hearts: "1.1k" },
];

export const teamMembers = [
    { name: "Vikram Singh", role: "Sous Chef", bio: "Merging traditional flavors with modern techniques", img: IA6, social: { twitter: '#', instagram: '#', facebook: '#', linkedin: '#' }, delay: 0.6 },
];

export const socialIcons = [
    { icon: FaFacebook },
    { icon: FaInstagram },
    { icon: FaXTwitter },
    { icon: FaYoutube },
];