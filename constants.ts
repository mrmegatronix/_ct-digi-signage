import { DailySpecial } from './types';

export const DEFAULT_SPECIALS: DailySpecial[] = [
  {
    id: '1',
    day: 'Monday',
    title: 'Gourmet Burger Night',
    description: 'Our signature beef patty topped with smoked cheddar, caramelized onions, and house sauce. Served with hand-cut fries.',
    price: '$18',
    imageUrl: './burger-night.jpg',
    highlightColor: '#f59e0b'
  },
  {
    id: '2',
    day: 'Tuesday',
    title: 'Steak & Fries',
    description: 'Premium sirloin steak cooked to your liking, served with garlic butter, garden salad, and crispy fries.',
    price: '$22',
    imageUrl: './steak-night.jpg',
    highlightColor: '#ef4444'
  },
  {
    id: '3',
    day: 'Wednesday',
    title: 'Schnitzel Fest',
    description: 'Crispy panko-crumbed chicken schnitzel with your choice of mushroom sauce or parmigiana topper.',
    price: '$20',
    imageUrl: './schnitzel.jpg',
    highlightColor: '#eab308'
  },
  {
    id: '4',
    day: 'Thursday',
    title: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs smothered in our sticky smoky BBQ glaze. Fall-off-the-bone tenderness.',
    price: '$24',
    imageUrl: './ribs.jpg',
    highlightColor: '#f97316'
  },
  {
    id: '5',
    day: 'Friday',
    title: 'Fish & Chips',
    description: 'Fresh market fish in crispy beer batter, served with tartare sauce, lemon, and chunky chips.',
    price: '$19',
    imageUrl: './fish-chips.jpg',
    highlightColor: '#3b82f6'
  },
  {
    id: '6',
    day: 'Saturday',
    title: 'Seafood Platter',
    description: 'A bountiful selection of calamari, prawns, fish bites, and mussels. Perfect for sharing.',
    price: '$35',
    imageUrl: './platter.jpg',
    highlightColor: '#06b6d4'
  },
  {
    id: '7',
    day: 'Sunday',
    title: 'Sunday Roast',
    description: 'Traditional roast of the day with roasted potatoes, pumpkin, seasonal greens, and rich gravy.',
    price: '$21',
    imageUrl: './roast.jpg',
    highlightColor: '#84cc16'
  }
];
