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
  {
    id: 'p1',
    title: 'Tech Summit 2024',
    category: 'Events',
    image: 'https://picsum.photos/seed/tech/800/600',
    description: 'A large scale technology conference in Dubai.',
  },
  {
    id: 'p2',
    title: 'Auto Show Booth',
    category: 'Exhibitions',
    image: 'https://picsum.photos/seed/auto/800/600',
    description: 'Futuristic stand design for a leading automotive brand.',
  },
  {
    id: 'p3',
    title: 'Lux Brand Identity',
    category: 'Brandings',
    image: 'https://picsum.photos/seed/brand/800/600',
    description: 'Complete visual identity overhaul for a luxury retailer.',
  },
  {
    id: 'p4',
    title: 'Annual Gala',
    category: 'Events',
    image: 'https://picsum.photos/seed/gala/800/600',
    description: 'An elegant evening of awards and entertainment.',
  },
];
