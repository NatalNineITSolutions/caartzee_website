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
  category: string;
  color: string;
  bgColor: string;
  link: string;
  faqs?: FAQ[];
  howItWorks?: HowItWorksStep[];
}

export const businessTools: BusinessTool[] = [
  {
    id: 'caartzee-zeedone',
    slug: 'caartzee-zeedone',
    title: 'Caartzee Zeedone',
    description: 'Manage your business operations from a single platform. Handle CRM, employee management, financial tracking, lead management, and daily business activities with ease.',
    shortDescription: 'Complete Business Management Suite',
    icon: Boxes,
    category: 'Branding',
    color: '#146EB4',
    bgColor: 'bg-[#E8F1F8]',
    link: 'https://zeedone.com/',
    howItWorks: [
      {
        title: 'CRM Management',
        description: 'Handle customer relationships effortlessly.',
        icon: Users,
      },
      {
        title: 'Employee Management',
        description: 'Track and manage your team efficiently.',
        icon: Edit3,
      },
      {
        title: 'Financial Tracking',
        description: 'Keep your financial tracking and reports organized.',
        icon: Calculator,
      },
    ],
  },
  {
    id: 'caartzee-sales-navigator',
    slug: 'sales-navigator',
    title: 'Caartzee Sales Navigator',
    description: 'Discover prospects, manage leads, and accelerate your sales process with powerful sales intelligence tools designed to help your team close more deals.',
    shortDescription: 'Smart Multi-Platform Sales & Lead Generation',
    icon: Compass,
    category: 'Operations',
    color: '#00BA9D',
    bgColor: 'bg-[#E6F8F5]',
    link: '/sales-navigator',
    howItWorks: [
      {
        title: 'Lead Discovery',
        description: 'Multi-platform lead discovery and management.',
        icon: Users,
      },
      {
        title: 'Sales Pipeline',
        description: 'Sales pipeline tracking and conversion monitoring.',
        icon: Activity,
      },
      {
        title: 'Analytics',
        description: 'Performance analytics and customer insights.',
        icon: Zap,
      },
    ],
  },
  {
    id: 'caartzee-snap',
    slug: 'snap',
    title: 'Caartzee Snap',
    description: 'Transform WhatsApp into a complete sales and support channel. Manage customer conversations, automate responses, recover abandoned carts, collect payments, and grow your business.',
    shortDescription: 'WhatsApp Commerce & Customer Engagement Platform',
    icon: Camera,
    category: 'AI Media',
    color: '#6366F1',
    bgColor: 'bg-[#EEF2FF]',
    link: '/caartzee-snap',
    howItWorks: [
      {
        title: 'WhatsApp Integration',
        description: 'WhatsApp business integration and shared inbox.',
        icon: Camera,
      },
      {
        title: 'AI Auto Replies',
        description: 'AI-powered auto replies and flow builder automation.',
        icon: Zap,
      },
      {
        title: 'Recover Carts',
        description: 'Cart abandonment recovery and payment collection.',
        icon: Download,
      },
    ],
  },
  {
    id: 'caartzee-prime',
    slug: 'prime',
    title: 'Caartzee Prime',
    description: 'Capture client requirements, automate communication, manage orders, and streamline business workflows with AI-assisted operations management.',
    shortDescription: 'AI-Powered Customer Requirement & Operations Hub',
    icon: Activity,
    category: 'Operations',
    color: '#EF4444',
    bgColor: 'bg-[#FEF2F2]',
    link: '/caartzee-crewsync',
    howItWorks: [
      {
        title: 'AI Assistant',
        description: 'AI voice assistant and client requirement collection.',
        icon: Edit3,
      },
      {
        title: 'Automated Workflows',
        description: 'Automated follow-ups and order confirmation.',
        icon: RefreshCw,
      },
      {
        title: 'Team Coordination',
        description: 'Task management and customer support management.',
        icon: Activity,
      },
    ],
  },
];
