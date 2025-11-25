import React from 'react';
import { Calendar, Layers, Award, Star } from 'lucide-react';
import { Review, Project, Service, Stat } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'events',
    title: 'Events',
    description: 'Corporate events, award ceremonies, gala dinners, and celebrations managed with precision.',
    icon: <Calendar className="w-10 h-10" />,
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions',
    description: 'Immersive exhibition stands and spatial designs that captivate your audience.',
    icon: <Layers className="w-10 h-10" />,
  },
  {
    id: 'brandings',
    title: 'Brandings',
    description: 'Strategic branding solutions that elevate your identity and market presence.',
    icon: <Award className="w-10 h-10" />,
  },
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '100', suffix: '+' },
  { label: 'Industries Served', value: '50', suffix: '+' },
  { label: 'Engagement Rate', value: '95', suffix: '%' },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Thompson',
    rating: 5,
    text: 'BST Events transformed our annual gala into a magical evening. The attention to detail was impeccable!',
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    text: 'Professional, creative, and reliable. They handled our exhibition stand design perfectly.',
    image: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    id: '3',
    name: 'Jessica Alawi',
    rating: 5,
    text: 'The branding overhaul gave our company a fresh new life. Highly recommend their team.',
    image: 'https://picsum.photos/seed/jessica/100/100',
  },
  {
    id: '4',
    name: 'David Miller',
    rating: 5,
    text: 'Seamless execution from start to finish. The best event management team in the region.',
    image: 'https://picsum.photos/seed/david/100/100',
  },
];

export const PROJECTS: Project[] = [
  // Events
  {
    id: 'e1',
    title: 'Vape show @ 2025',
    category: 'Events',
    image: 'https://picsum.photos/seed/vape2025/800/600',
    description: 'Showcasing the latest in vaping technology and trends.',
  },
  {
    id: 'e2',
    title: 'Ministerial Decision on Exemptions & Compliance',
    category: 'Events',
    image: 'https://picsum.photos/seed/tax2025/800/600',
    description: "Strategies for navigating UAE's evolving tax landscape.",
  },
  {
    id: 'e3',
    title: 'Driving Excellence: Leadership and Taxation',
    category: 'Events',
    image: 'https://picsum.photos/seed/women2025/800/600',
    description: "Celebrating International Women's Day with leadership insights.",
  },
  {
    id: 'e4',
    title: 'Arihant & Sanya Wedding 2025',
    category: 'Events',
    image: 'https://picsum.photos/seed/wedding2025/800/600',
    description: 'A grand celebration of love and union.',
  },
  {
    id: 'e5',
    title: 'Dubai Lynx Awards 2025',
    category: 'Events',
    image: 'https://picsum.photos/seed/lynx2025/800/600',
    description: 'Honoring creativity and excellence in advertising.',
  },
  {
    id: 'e6',
    title: 'Rajasthan Carnival 2025',
    category: 'Events',
    image: 'https://picsum.photos/seed/rajasthan2025/800/600',
    description: 'A vibrant cultural festival celebrating Rajasthan.',
  },
  {
    id: 'e7',
    title: 'Rang de Basanti 2025',
    category: 'Events',
    image: 'https://picsum.photos/seed/rang2025/800/600',
    description: 'Celebrating the colors of spring and culture.',
  },
  {
    id: 'e8',
    title: 'Tally Middle East Road Show 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/tally2024/800/600',
    description: 'Connecting with businesses across the Middle East.',
  },
  {
    id: 'e9',
    title: 'ICAI 42nd Annual International Conference 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/icai42/800/600',
    description: 'A gathering of finance professionals and experts.',
  },
  {
    id: 'e10',
    title: 'ICAI Badminton & Chess Tournament 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/sports2024/800/600',
    description: 'Fostering sportsmanship and camaraderie.',
  },
  {
    id: 'e11',
    title: 'RBPG Deepotsav 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/deepotsav2024/800/600',
    description: 'A festival of lights and community celebration.',
  },
  {
    id: 'e12',
    title: 'Envisage - Annual International Conference',
    category: 'Events',
    image: 'https://picsum.photos/seed/envisage/800/600',
    description: 'Exploring future trends and innovations.',
  },
  {
    id: 'e13',
    title: 'Diwali Dhoom & Garba Dandiya Nite 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/garba2024/800/600',
    description: 'A night of dance, music, and festive joy.',
  },
  {
    id: 'e14',
    title: '78th Independence Day',
    category: 'Events',
    image: 'https://picsum.photos/seed/indep78/800/600',
    description: 'Celebrating freedom and national pride.',
  },
  {
    id: 'e15',
    title: 'ICAI Dubai Chapter Event',
    category: 'Events',
    image: 'https://picsum.photos/seed/icaidubai/800/600',
    description: 'Networking and knowledge sharing for professionals.',
  },
  {
    id: 'e16',
    title: 'GITEX @ 2023',
    category: 'Events',
    image: 'https://picsum.photos/seed/gitex2023/800/600',
    description: 'The biggest tech show in the region.',
  },
  {
    id: 'e17',
    title: 'Beat Diabetics Walk 2019',
    category: 'Events',
    image: 'https://picsum.photos/seed/walk2019/800/600',
    description: 'Raising awareness for a healthier lifestyle.',
  },
  {
    id: 'e18',
    title: 'An Evening with Anil Kapoor 2019',
    category: 'Events',
    image: 'https://picsum.photos/seed/ak2019/800/600',
    description: 'A star-studded evening with the Bollywood legend.',
  },

  // Exhibitions
  {
    id: 'ex1',
    title: 'Sobha Interiors @ Index 2018',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/sobha2018/800/600',
    description: 'Showcasing luxury interiors at Index.',
  },
  {
    id: 'ex2',
    title: 'Victor @ Arab Lab 2017',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/victor2017/800/600',
    description: 'Innovative laboratory solutions on display.',
  },
  {
    id: 'ex3',
    title: 'Malaysia Pavilion @ Index 2017',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/malaysia2017/800/600',
    description: 'Highlighting Malaysian design and craftsmanship.',
  },
  {
    id: 'ex4',
    title: 'Moiseikin @ Jewellery Show',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/moiseikin/800/600',
    description: 'Exquisite jewelry pieces presented with elegance.',
  },
  {
    id: 'ex5',
    title: 'Expeditor Stand GITEX 2013',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/expeditor2013/800/600',
    description: 'A standout booth at the technology exhibition.',
  },
  {
    id: 'ex6',
    title: 'Netracker @ WFES',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/netracker/800/600',
    description: 'Sustainable energy solutions at WFES.',
  },
  {
    id: 'ex7',
    title: 'Colgate @ AEEDC',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/colgate/800/600',
    description: 'Dental care innovations at AEEDC.',
  },
  {
    id: 'ex8',
    title: 'Atom Medical @ Arab Health',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/atom/800/600',
    description: 'Medical equipment showcase at Arab Health.',
  },
  {
    id: 'ex9',
    title: 'Travel Click @ ATM',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/travelclick/800/600',
    description: 'Connecting the travel industry at ATM.',
  },
  {
    id: 'ex10',
    title: 'Alfaarf @ Beauty World',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/alfaarf/800/600',
    description: 'Beauty and wellness products on display.',
  },
  {
    id: 'ex11',
    title: 'Burjeel Hospital @ ADMC',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/burjeel/800/600',
    description: 'Healthcare excellence at ADMC.',
  },
  {
    id: 'ex12',
    title: 'Rovatti @ Big 5',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/rovatti/800/600',
    description: 'Construction and infrastructure solutions.',
  },
  {
    id: 'ex13',
    title: 'Rodana @ Hotel Show',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/rodana/800/600',
    description: 'Hospitality trends and innovations.',
  },
  {
    id: 'ex14',
    title: 'Deloitte Exhibition Stand',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/deloitte/800/600',
    description: 'Professional services and consulting showcase.',
  },
  {
    id: 'ex15',
    title: 'Epson @ GITEX Trade 2009',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/epson/800/600',
    description: 'Imaging and printing technology.',
  },
];
