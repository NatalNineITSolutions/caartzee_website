import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="terms-conditions space-y-[80px]">
          
          {/* Header & Introduction */}
          <div className="space-y-6">
            <RevealAnimation delay={0.1} offset={40}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h2>
                <p className="text-primary-500 font-semibold uppercase tracking-widest text-sm">Effective Date: April 14, 2026</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} offset={40}>
              <div className="space-y-6 font-normal text-secondary/60 dark:text-accent/60 lg:text-lg max-w-4xl leading-relaxed">
                <p>
                  These terms and conditions (“Terms”) and the privacy policy (as available on the url <Link href="https://caartzee.com/terms" className="text-primary-500 hover:underline">https://caartzee.com/terms</Link>) (“Privacy Policy”) (collectively “User Agreement”) forms an electronic record in terms of Information Technology Act, 2000 (“IT Act”) and rules made there under, as applicable, and the amended provisions pertaining to electronic records in various statutes, as amended from time to time.
                </p>
                <p>
                  This User Agreement is published in accordance with the provisions of Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and terms and conditions for access or usage of the website <span className="text-secondary dark:text-accent font-medium">caartzee.com</span> (including the uniform resource locator created for each Merchant) (“Website”), the mobile application available on Play Store and app store - <span className="text-secondary dark:text-accent font-medium">Caartzee</span> i.e. (“App”) and the uniform resource locator created for each Merchant (the ‘Website’, the ‘App’ is collectively hereinafter referred to as the “Platform”), operated by <span className="text-secondary dark:text-accent font-medium">NatalNine IT Solutions Private Limited</span>, a company incorporated under the laws of India.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* General Section */}
          <div className="space-y-8">
            <RevealAnimation delay={0.3} offset={40}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">General</h3>
                <div className="space-y-4 text-secondary/60 dark:text-accent/60 leading-relaxed font-normal">
                  <p>
                    For the purposes of these Terms, ‘User’ and wherever the context may require, ‘You’ (or any variation thereof), shall mean any natural or legal person (including any legal heirs, administrators or successors) who has agreed to become a user of the Platform by accessing or using the Platform. If You are accepting these Terms and using the Services (as defined below) or the Platform on behalf of a company, organization, government, or other legal entity, You represent and warrant that You are authorized to do so.
                  </p>
                  <p>
                    Unless the context otherwise requires, “NatalNine IT Solutions Private Limited’’, “We”, “us”, “our” or “Company” shall mean NatalNine IT Solutions Private Limited or any of its licensees, whether now or in the future.
                  </p>
                  <p>
                    The Company enables transactions on its Platform between participating restaurants/stores/merchants/sellers and buyers, dealing in (a) food and beverages, (b) provisions, consumer goods, consumables etc., and (c) any other products or services ("Platform Services''). The buyers ("Buyers'') can choose and place orders ("Orders'') from a variety of products and services listed and offered for sale by various merchants including but not limited to the restaurants, eateries, grocery stores, other service providers ("Merchants''), on the Platform.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Definitions Section */}
          <div className="space-y-8">
            <RevealAnimation delay={0.4} offset={40}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Definitions</h3>
            </RevealAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { term: "Affiliate", desc: "Any Person who directly or indirectly controls, is controlled by, or is under common control of the Company." },
                { term: "Authority", desc: "Any union, national, state, local, or other governmental, statutory, or regulatory authority having jurisdiction." },
                { term: "Information", desc: "Confidential or personally identifiable info provided to the Company or other Users at registration." },
                { term: "Pay Facility", desc: "Automated electronic payment facility provided by the Company to facilitate payments for paid services." },
                { term: "Services", desc: "Acting as an intermediary or facilitator for enabling users to sell their products or services online." }
              ].map((item, i) => (
                <RevealAnimation key={i} delay={0.5 + i * 0.05} offset={40}>
                  <div className="p-6 rounded-2xl border border-secondary/10 dark:border-accent/10 bg-secondary/5 dark:bg-accent/5 backdrop-blur-sm space-y-2">
                    <h5 className="font-bold text-secondary dark:text-accent">{item.term}</h5>
                    <p className="text-sm text-secondary/60 dark:text-accent/60 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* Eligibility & Registration */}
          <div className="space-y-10">
            <RevealAnimation delay={0.8} offset={40}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Eligibility & Registration</h3>
                <p className="text-secondary/60 dark:text-accent/60 font-normal">
                  In order to use the Platform, You need to be 18 (eighteen) years of age or older. The Platform may only be used or accessed by such Persons who can enter into and perform legally binding contracts under Indian Contract Act, 1872.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.9} offset={40}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-secondary dark:text-accent">Profile Creation</h4>
                  <p className="text-secondary/60 dark:text-accent/60 font-normal leading-relaxed text-sm">
                    A User is required to register and create a profile by creating a username and password or registering using mobile verification. You are solely responsible for maintaining secrecy and confidentiality of Your login details.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-secondary dark:text-accent">User Information</h4>
                  <p className="text-secondary/60 dark:text-accent/60 font-normal leading-relaxed text-sm">
                    You agree to provide true, accurate, up to date and complete information. You are prohibited from misrepresenting Your identity and agree not to represent Yourself as another User.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* General Terms: Role of Facilitator */}
          <div className="space-y-8">
            <RevealAnimation delay={1.0} offset={40}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">General Terms & Platform Role</h3>
                <div className="space-y-4 text-secondary/60 dark:text-accent/60 font-normal leading-relaxed">
                  <p>
                    All commercial/contractual terms are offered by and agreed to between Buyers and Merchants alone with respect to products and services being offered by the Merchants. The Company does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms.
                  </p>
                  <p>
                    The Company is operating an online marketplace and assumes the role of facilitator, and does not at any point of time during any transaction come into or take possession of any of the products or services offered by Merchant.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* User Obligations */}
          <div className="space-y-10">
            <RevealAnimation delay={1.1} offset={40}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">User Obligations</h3>
            </RevealAnimation>
            <div className="bg-secondary/5 dark:bg-accent/5 rounded-[32px] p-8 md:p-12 border border-secondary/10 dark:border-accent/10">
              <RevealAnimation delay={1.2} offset={40}>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 font-normal text-secondary/60 dark:text-accent/60 list-none">
                  {[
                    "You shall not host or share information that belongs to another person.",
                    "You shall not upload harmful, harassing, defamatory, or obscene content.",
                    "You shall not infringe upon any third party's intellectual property rights.",
                    "You shall not involve in 'junk mail', 'chain letters', or 'spamming'.",
                    "You shall not promote illegal activities or conduct that is abusive or threatening.",
                    "You shall not attempt to gain unauthorized access to any portion of the Platform.",
                    "You shall not probe, scan or test the vulnerability of the Platform.",
                    "You shall not impersonate another person or misrepresent identity."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2.5 shrink-0" />
                      <span className="text-[15px] leading-relaxed italic">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>
          </div>

          {/* Payment & Fees */}
          <div className="space-y-10">
            <RevealAnimation delay={1.3} offset={40}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Payment & Fees</h3>
                <div className="space-y-6 font-normal text-secondary/60 dark:text-accent/60 leading-relaxed">
                  <p>
                    Access to and usage of the Platform and its Services are subject to the payment of <span className="text-secondary dark:text-accent font-bold">subscription fees</span> as per the plan selected by the User. The Company reserves the right to modify the subscription plans, pricing models, and fee structure at its sole discretion, with such changes being published on the Platform.
                  </p>
                  <div className="p-8 rounded-2xl border border-primary-500/20 bg-primary-500/5 space-y-4">
                    <h5 className="font-bold text-secondary dark:text-accent capitalize">Pay Facility for Buyers</h5>
                    <p className="text-sm">
                      You, as a Buyer, understand that upon initiating a transaction You are entering into a legally binding and enforceable contract with the Merchant. Refunds, if any, shall be made at the same issuing bank from where the transaction price was received.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-8">
            <RevealAnimation delay={1.4} offset={40}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Intellectual Property</h3>
                <p className="text-secondary/60 dark:text-accent/60 font-normal leading-relaxed">
                  NatalNine IT Solutions Private Limited is either the owner of intellectual property rights or has the non-exclusive, perpetual, irrevocable right to exercise the intellectual property in the Platform including user interface, layout format, ideas, and design.
                </p>
                <div className="p-6 rounded-2xl bg-secondary/5 dark:bg-accent/5 border border-secondary/10 dark:border-accent/10">
                  <p className="text-sm text-secondary/60 dark:text-accent/60 italic font-normal">
                    You recognize that the Company is the registered owner of the word mark <span className="text-primary-500 font-bold">‘Caartzee’</span> and its logo variants. Any infringement should be reported to <Link href="mailto:info@natalnine.com" className="text-primary-500">info@natalnine.com</Link>.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Disclaimers & Contact */}
          <div className="pt-10 border-t border-secondary/10 dark:border-accent/10 grid md:grid-cols-2 gap-16">
            <RevealAnimation delay={1.5} offset={40}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Disclaimers & Liability</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60 leading-relaxed text-sm">
                  In no event shall the Company be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with the Platform or the Pay Facility. The Company disclaims all liability that may arise due to any violation of any applicable Laws including the Law applicable to products and services offered by the Merchant.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-secondary dark:text-accent uppercase tracking-wider text-[12px]">Grievance Redressal</h4>
                  <p className="text-sm text-secondary/60 dark:text-accent/60 font-normal leading-relaxed">
                    In case of any grievance, please contact our designated Grievance Officer at <Link href="mailto:info@natalnine.com" className="text-primary-500 font-bold">info@natalnine.com</Link>. We attempt to acknowledge complaints within 48 hours and resolve within 1 month.
                  </p>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={1.6} offset={40}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight">Governing Law</h3>
                <div className="space-y-6 text-sm text-secondary/60 dark:text-accent/60 font-normal leading-relaxed">
                  <p>
                    The User Agreement shall be governed and construed in accordance with the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts in <span className="text-secondary dark:text-accent font-bold">Bengaluru, Karnataka</span>.
                  </p>
                  <div className="space-y-4 pt-4 border-t border-secondary/10 dark:border-accent/10">
                    <p className="font-bold text-secondary dark:text-accent uppercase text-[12px] tracking-widest">Contact Information</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-bold">Company:</span> NatalNine IT Solutions Private Limited</p>
                      <p><span className="font-bold">Phone:</span> +91 96558 04621</p>
                      <p><span className="font-bold">Email:</span> info@natalnine.com</p>
                      <p><span className="font-bold">Website:</span> caartzee.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditionContent;
