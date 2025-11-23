import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Events' | 'Exhibitions' | 'Brandings';
  image: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export enum Page {
  Home = '/',
  About = '/about',
  Gallery = '/gallery',
  Contact = '/contact',
}