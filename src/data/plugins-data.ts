export interface Plugin {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string; // Using generic Lucide-style names or SVG paths
  rating: number;
  installs: string;
}

export const pluginCategories = [
  'All Plugins',
  'Marketing',
  'Customer Support',
  'Store Management',
  'Analytics',
  'Utilities',
];

export const plugins: Plugin[] = [
  {
    id: '1',
    name: 'Google Analytics',
    category: 'Analytics',
    description: 'Track visitor behavior and gain insights into your store performance.',
    icon: 'Analytics',
    rating: 4.8,
    installs: '10k+',
  },
  {
    id: '2',
    name: 'Mailchimp',
    category: 'Marketing',
    description: 'Automate your email marketing campaigns and grow your subscriber base.',
    icon: 'Mail',
    rating: 4.7,
    installs: '8k+',
  },
  {
    id: '3',
    name: 'WhatsApp Chat',
    category: 'Customer Support',
    description: 'Enable real-time customer support via WhatsApp directly on your store.',
    icon: 'MessageSquare',
    rating: 4.9,
    installs: '15k+',
  },
  {
    id: '4',
    name: 'Facebook Pixel',
    category: 'Marketing',
    description: 'Optimize your ad campaigns and track conversions from Facebook.',
    icon: 'Facebook',
    rating: 4.6,
    installs: '12k+',
  },
  {
    id: '5',
    name: 'ShipRocket',
    category: 'Store Management',
    description: 'Integrated shipping solution to manage orders across multiple carriers.',
    icon: 'Truck',
    rating: 4.5,
    installs: '5k+',
  },
  {
    id: '6',
    name: 'Intercom',
    category: 'Customer Support',
    description: 'Advanced live chat and customer messaging platform.',
    icon: 'Headphones',
    rating: 4.8,
    installs: '3k+',
  },
  {
    id: '7',
    name: 'SEO Optimizer',
    category: 'Utilities',
    description: 'Automatically optimize your product pages for better search rankings.',
    icon: 'Search',
    rating: 4.4,
    installs: '20k+',
  },
  {
    id: '8',
    name: 'Instagram Feed',
    category: 'Marketing',
    description: 'Display your latest Instagram posts directly on your home page.',
    icon: 'Instagram',
    rating: 4.7,
    installs: '7k+',
  },
  {
    id: '9',
    name: 'Hotjar',
    category: 'Analytics',
    description: 'Visualize how users interact with your store using heatmaps.',
    icon: 'Eye',
    rating: 4.3,
    installs: '4k+',
  },
  {
    id: '10',
    name: 'Razorpay',
    category: 'Store Management',
    description: 'Accept payments via cards, UPI, and net banking seamlessly.',
    icon: 'CreditCard',
    rating: 4.9,
    installs: '25k+',
  },
];
