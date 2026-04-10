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
  Download
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
  faqs?: FAQ[];
  howItWorks?: HowItWorksStep[];
}

export const businessTools: BusinessTool[] = [
  {
    id: 'privacy-policy-generator',
    slug: 'privacy-policy-generator',
    title: 'Privacy Policy Generator',
    description: 'Generate free Privacy Policy statements for your website.',
    shortDescription: 'Free and professional privacy policy generator for your business.',
    icon: ShieldCheck,
    color: '#00BA9D',
    bgColor: 'bg-[#E6F8F5]',
    howItWorks: [
      {
        title: 'Enter details',
        description: 'Provide your company name, website URL, and contact information.',
        icon: Edit3,
      },
      {
        title: 'Download free Privacy Policy',
        description: 'Get your professional privacy policy in multiple formats.',
        icon: FileText,
      },
      {
        title: 'Upload to your website',
        description: 'Add the privacy policy to your website to ensure compliance.',
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        question: 'What is a privacy policy?',
        answer: 'A privacy policy is a document that explains how your website or app collects, uses, and protects user data.',
      },
      {
        question: 'Is this privacy policy generator free?',
        answer: 'Yes, our privacy policy generator is completely free for all businesses.',
      },
    ],
  },
  {
    id: 'slogan-maker',
    slug: 'slogan-maker',
    title: 'Free Slogan Maker',
    description: 'Create tagline for own business with FREE Slogan Maker.',
    shortDescription: 'Build your brand identity with catchy slogans.',
    icon: Type,
    color: '#146EB4',
    bgColor: 'bg-[#E8F1F8]',
    howItWorks: [
      {
        title: 'Enter a keyword',
        description: 'Type a word that describes your business or product.',
        icon: Type,
      },
      {
        title: 'Search slogans',
        description: 'Our AI will generate hundreds of slogans for you.',
        icon: Calculator,
      },
      {
        title: 'Select and use',
        description: 'Choose the one that fits your brand perfectly.',
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        question: 'How do I use the slogan maker?',
        answer: 'Simply enter a keyword related to your business and click on Generate.',
      },
    ],
  },
  {
    id: 'terms-and-conditions-generator',
    slug: 'terms-and-conditions-generator',
    title: 'Terms and Conditions Generator',
    description: 'Generate free Terms and Conditions statements for your website.',
    shortDescription: 'Protect your business with professional terms and conditions.',
    icon: FileText,
    color: '#E11D48',
    bgColor: 'bg-[#FEE2E2]',
    howItWorks: [
      {
        title: 'Enter details',
        description: 'Provide your company name and website URL.',
        icon: Edit3,
      },
      {
        title: 'Customize',
        description: 'Add specific terms that apply to your business services.',
        icon: Settings2,
      },
      {
        title: 'Generate',
        description: 'Get your legally compliant terms and conditions instantly.',
        icon: FileText,
      },
    ],
    faqs: [
      {
        question: 'Why do I need terms and conditions?',
        answer: 'They establish the rules for using your website and help protect you legally.',
      },
    ],
  },
  {
    id: 'invoice-generator',
    slug: 'invoice-generator',
    title: 'Invoice Generator',
    description: 'Generate free invoices for your business.',
    shortDescription: 'Professional invoices in seconds.',
    icon: Receipt,
    color: '#0EA5E9',
    bgColor: 'bg-[#E0F2FE]',
    howItWorks: [
      {
        title: 'Add business details',
        description: 'Enter your business name, logo, and contact information.',
        icon: Edit3,
      },
      {
        title: 'Add customer info',
        description: 'Input the customer name and the items/services provided.',
        icon: Type,
      },
      {
        title: 'Download and send',
        description: 'Generate a professional PDF invoice ready to be sent.',
        icon: Download,
      },
    ],
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    title: 'Free QR Code Generator Online',
    description: 'Upgrade your business with a QR Code Generator. Increase your brand visibility and accessibility with QR codes.',
    shortDescription: 'Create custom QR codes for your brand to drive engagement.',
    icon: QrCode,
    color: '#F59E0B',
    bgColor: 'bg-[#FEF3C7]',
    howItWorks: [
      {
        title: 'Enter your URL',
        description: 'Type or paste your website URL in the input field above.',
        icon: MousePointer2,
      },
      {
        title: 'Create your QR Code',
        description: 'Click on the "Generate QR Code" button and our system will create a custom QR code for you.',
        icon: QrCode,
      },
      {
        title: 'Download your free QR Code',
        description: 'Once generated, you can download your QR code in high-quality format.',
        icon: Download,
      },
    ],
    faqs: [
      {
        question: 'What is a QR Code?',
        answer: 'A QR code (Quick Response code) is a type of barcode that can be scanned with a smartphone to access information.',
      },
      {
        question: 'How do I create a QR Code for free?',
        answer: 'Simply enter your URL in the input field above and click on "Generate QR Code".',
      },
      {
        question: 'Can I customize my QR Code for my brand?',
        answer: 'Yes, our generator creates professional QR codes that you can use across all your marketing materials.',
      },
      {
        question: 'What are the advantages of QR codes?',
        answer: 'They bridge the gap between offline and online worlds, making it easy for customers to access information instantly.',
      },
      {
        question: 'How can I improve my business with a QR Code generator?',
        answer: 'You can use QR codes on business cards, posters, and products to drive traffic to your website or social media.',
      },
    ],
  },
  {
    id: 'background-remover',
    slug: 'background-remover',
    title: 'Background Remover',
    description: 'Do you want to remove background from images? It\'s very easy with our AI-powered tool.',
    shortDescription: 'Instant background removal with AI for professional product photos.',
    icon: Scissors,
    color: '#6366F1',
    bgColor: 'bg-[#EEF2FF]',
    howItWorks: [
      {
        title: 'Select your Image',
        description: 'Upload your photo from your device.',
        icon: ImageIcon,
      },
      {
        title: 'Image Processing',
        description: 'Our AI will remove the background in seconds.',
        icon: Settings2,
      },
      {
        title: 'Download your image',
        description: 'Save your image in high quality with a transparent background.',
        icon: Download,
      },
    ],
    faqs: [
      {
        question: 'What image formats are supported?',
        answer: 'We support JPG, PNG, and WebP formats.',
      },
      {
        question: 'Is the background removal automatic?',
        answer: 'Yes, our AI detects the subject and removes the background automatically without any manual work.',
      },
    ],
  },
  {
    id: 'gst-calculator',
    slug: 'gst-calculator',
    title: 'GST Calculator',
    description: 'Calculate GST online easily with GST Calculator. Perfect for business owners and accountants.',
    shortDescription: 'Simple and fast GST calculation tool for business compliance.',
    icon: Calculator,
    color: '#A855F7',
    bgColor: 'bg-[#F3E8FF]',
    howItWorks: [
      {
        title: 'Select Category',
        description: 'Choose your business category or the specific GST rate.',
        icon: MousePointer2,
      },
      {
        title: 'Enter Amount',
        description: 'Type the amount of your product or service.',
        icon: Type,
      },
      {
        title: 'Get results',
        description: 'Calculate GST and total amount instantly.',
        icon: Calculator,
      },
    ],
    faqs: [
      {
        question: 'How do I calculate GST?',
        answer: 'Select the rate, enter the amount, and choose whether it\'s inclusive or exclusive of GST.',
      },
    ],
  },
  {
    id: 'product-description-generator',
    slug: 'product-description-generator',
    title: 'Product Description Generator',
    description: 'Generate high-quality product descriptions for free using our AI tool.',
    shortDescription: 'AI-powered product descriptions that sell and improve SEO.',
    icon: Edit3,
    color: '#EF4444',
    bgColor: 'bg-[#FEF2F2]',
    howItWorks: [
      {
        title: 'Enter product details',
        description: 'Type the name and category of your product.',
        icon: Edit3,
      },
      {
        title: 'Choose the tone',
        description: 'Pick the tone that fits your brand (e.g., professional, friendly).',
        icon: Type,
      },
      {
        title: 'Generate description',
        description: 'Get your professional product description instantly.',
        icon: Scissors,
      },
    ],
    faqs: [
      {
        question: 'Is the content unique?',
        answer: 'Yes, our AI generates unique descriptions for every product based on your input.',
      },
    ],
  },
  },
];
