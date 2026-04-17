import { 
  ShieldCheck, 
  Type, 
  FileText, 
  Receipt, 
  QrCode, 
  Scissors, 
  Calculator, 
  Edit3, 
  Image as ImageIcon,
  MousePointer2,
  Settings2,
  Download,
  Boxes,
  Compass,
  Camera,
  Activity,
  Zap,
  RefreshCw,
  Users
} from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: any;
}

export interface BusinessTool {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: any;
  color: string;
  bgColor: string;
  link: string;
  category: string;
  faqs?: FAQ[];
  howItWorks?: HowItWorksStep[];
}

export const businessTools: BusinessTool[] = [
  {
    id: 'caartzee-zeedone',
    slug: 'caartzee-zeedone',
    title: 'Caartzee Zeedone',
    description: 'The ultimate branding and identity suite. Create logos, QR codes, and brand kits that make your business unforgettable.',
    shortDescription: 'Build a world-class brand identity in minutes with Zeedone.',
    icon: Boxes,
    color: '#146EB4',
    bgColor: 'bg-[#E8F1F8]',
    link: 'https://cartly.zeedone.com/login',
    category: 'Branding',
    howItWorks: [
      {
        title: 'Define your style',
        description: 'Choose from hundreds of brand archetypes and styles tailored for your niche.',
        icon: Zap,
      },
      {
        title: 'Customize identity',
        description: 'Use our AI editor to refine logos, colors, and typography.',
        icon: Edit3,
      },
      {
        title: 'Go Live',
        description: 'Download your brand assets in all formats and launch your identity.',
        icon: Download,
      },
    ],
  },
  {
    id: 'caartzee-sales-navigator',
    slug: 'sales-navigator',
    title: 'Caartzee Sales Navigator',
    description: 'Scale your outreach with high-precision sales tools. Manage leads, track conversions, and close deals faster.',
    shortDescription: 'Advanced CRM and outreach tools for fast-growing retail teams.',
    icon: Compass,
    color: '#00BA9D',
    bgColor: 'bg-[#E6F8F5]',
    link: '/sales-navigator',
    category: 'Operations',
    howItWorks: [
      {
        title: 'Import Leads',
        description: 'Sync your customer data or upload lead lists directly into the navigator.',
        icon: Users,
      },
      {
        title: 'Analyze Performance',
        description: 'Use real-time heatmaps to see which products are driving the most interest.',
        icon: Activity,
      },
      {
        title: 'Automate Outreach',
        description: 'Set up smart email and notification flows to nurture your leads.',
        icon: Zap,
      },
    ],
  },
  {
    id: 'caartzee-snap',
    slug: 'snap',
    title: 'Caartzee Snap',
    description: 'Sell more on WhatsApp without the hassle. Display products, take orders, collect payments, and provide support — all from a single WhatsApp number. No tech skills needed.',
    shortDescription: 'Your complete WhatsApp selling platform — orders, payments & support in one place.',
    icon: Camera,
    color: '#6366F1',
    bgColor: 'bg-[#EEF2FF]',
    link: '/caartzee-snap',
    category: 'Operations',
    howItWorks: [
      {
        title: 'Add Your Products',
        description: 'Upload your product catalog with images, prices, and descriptions in minutes.',
        icon: Camera,
      },
      {
        title: 'Share Your Link',
        description: 'Send your WhatsApp store link to customers and let them browse and order directly.',
        icon: Zap,
      },
      {
        title: 'Collect & Deliver',
        description: 'Receive payments, confirm orders, and track deliveries — all inside WhatsApp.',
        icon: Download,
      },
    ],
  },
  {
    id: 'caartzee-prime',
    slug: 'prime',
    title: 'Caartzee Prime',
    description: 'The real-time operational hub for your entire team. Sync tasks, manage staff performance, and streamline workflows.',
    shortDescription: 'Unified team operations and real-time activity syncing.',
    icon: Activity,
    color: '#EF4444',
    bgColor: 'bg-[#FEF2F2]',
    link: '/caartzee-crewsync',
    category: 'Operations',
    howItWorks: [
      {
        title: 'Assing Tasks',
        description: 'Create and assign operational tasks to your crew members in real-time.',
        icon: Edit3,
      },
      {
        title: 'Live Syncing',
        description: 'Monitor progress and status updates as they happen in your hub.',
        icon: RefreshCw,
      },
      {
        title: 'Analyze Ops',
        description: 'Generate performance reports to identify and remove bottlenecks.',
        icon: Activity,
      },
    ],
  },
];
