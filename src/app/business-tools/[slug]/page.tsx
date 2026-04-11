'use client';
import { useParams, notFound } from 'next/navigation';
import { businessTools } from '@/data/business-tools-data';
import ToolDetailHero from '@/components/business-tools/ToolDetailHero';
import ToolFormContainer from '@/components/business-tools/ToolFormContainer';
import HowItWorks from '@/components/business-tools/HowItWorks';
import OtherTools from '@/components/business-tools/OtherTools';
import PrivacyPolicyForm from '@/components/business-tools/forms/PrivacyPolicyForm';
import SloganMakerForm from '@/components/business-tools/forms/SloganMakerForm';
import TermsConditionsForm from '@/components/business-tools/forms/TermsConditionsForm';
import QRCodeForm from '@/components/business-tools/forms/QRCodeForm';
import BackgroundRemoverForm from '@/components/business-tools/forms/BackgroundRemoverForm';
import GSTCalculatorForm from '@/components/business-tools/forms/GSTCalculatorForm';
import ProductDescriptionForm from '@/components/business-tools/forms/ProductDescriptionForm';
import ImageEnhancerForm from '@/components/business-tools/forms/ImageEnhancerForm';
import InvoiceForm from '@/components/business-tools/forms/InvoiceForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ToolDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  const tool = businessTools.find(t => t.slug === slug);

  if (!tool) {
    notFound();
  }

  const renderForm = () => {
    switch (tool.slug) {
      case 'privacy-policy-generator':
        return <PrivacyPolicyForm />;
      case 'slogan-maker':
        return <SloganMakerForm />;
      case 'terms-and-conditions-generator':
        return <TermsConditionsForm />;
      case 'qr-code-generator':
        return <QRCodeForm />;
      case 'background-remover':
        return <BackgroundRemoverForm />;
      case 'gst-calculator':
        return <GSTCalculatorForm />;
      case 'product-description-generator':
        return <ProductDescriptionForm />;
      case 'image-enhancer':
        return <ImageEnhancerForm />;
      case 'invoice-generator':
        return <InvoiceForm />;
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
            <p className="text-secondary/60 dark:text-accent/60">
              We are working hard to bring this tool to you. Stay tuned!
            </p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-background-8">
      <ToolDetailHero tool={tool} />
      
      <ToolFormContainer title={tool.title}>
        {renderForm()}
      </ToolFormContainer>

      {tool.howItWorks && (
        <HowItWorks steps={tool.howItWorks} />
      )}

      {tool.faqs && tool.faqs.length > 0 && (
        <section className="py-24 bg-white dark:bg-background-8">
          <div className="container-custom max-w-4xl">
            <h2 className="text-center text-heading-3 font-bold text-secondary dark:text-accent mb-16">
              FAQs
            </h2>
            <Accordion className="space-y-4">
              {tool.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`faq-${index}`}
                  className="bg-gray-50 dark:bg-background-7 rounded-xl border border-stroke-1 dark:border-white/10 overflow-hidden"
                >
                  <AccordionTrigger 
                    value={`faq-${index}`}
                    className="px-6 py-4 text-lg font-bold text-secondary dark:text-accent hover:text-primary-500 transition-colors"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    value={`faq-${index}`}
                    className="px-6 pb-6 pt-0"
                  >
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <OtherTools currentSlug={tool.slug} />
    </main>
  );
};

export default ToolDetailPage;
