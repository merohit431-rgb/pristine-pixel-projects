import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import tanmoyImage from "@/assets/tanmoy.png";
import avinashImage from "@/assets/avinash.png";

const Founders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Founders</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Compliance Globe Next LLP is led by two dynamic professionals who bring complementary strengths across Corporate Law, Insolvency, Finance, and Regulatory Compliance — ensuring the firm delivers excellent, future-ready solutions to its clients.
              </p>
            </div>
          </div>
        </section>


        {/* Tanmoy Profile */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 md:p-12 shadow-elegant border border-border/40">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <img 
                    src={tanmoyImage} 
                    alt="Tanmoy Ghosh - Co-Founder of Compliance Globe Next LLP"
                    className="w-48 h-48 rounded-xl object-cover object-top shadow-lg flex-shrink-0 mx-auto md:mx-0"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gradient mb-2">Tanmoy Ghosh</h2>
                  <p className="text-xl text-primary font-medium">Co-Founder & Partner</p>
                    <p className="text-muted-foreground mt-2">
                      Company Secretary | LL.B. | PGDBA (Finance)
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Tanmoy Ghosh brings over eight years of diversified experience across Insolvency & Bankruptcy laws, Corporate and Securities Law, Finance, Taxation and Transaction Advisory. His strong academic foundation as a Practising Company Secretary, Law Graduate and Finance specialist enables him to provide holistic strategic advisory to clients operating in complex regulatory frameworks.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Profile</h3>
                  <p>
                    Within Compliance Globe Next LLP, he leads client delivery, capability building and strategic development. He has developed deep expertise in managing and advising on Insolvency and Liquidation matters, helping corporates, insolvency professionals and lenders navigate intricate legal and financial challenges.
                  </p>
                  <p>
                    He continues to guide the firm with commitment to excellence, integrity and professional ethics, ensuring alignment with India's evolving Legal, Secretarial, EXIM and Insolvency landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avinash Profile */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-2xl p-8 md:p-12 shadow-elegant border border-border/40">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <img 
                    src={avinashImage} 
                    alt="Avinash Prabhat - Co-Founder of Compliance Globe Next LLP"
                    className="w-48 h-48 rounded-xl object-cover object-top shadow-lg flex-shrink-0 mx-auto md:mx-0"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gradient mb-2">Avinash Prabhat</h2>
                    <p className="text-xl text-primary font-medium">Co-Founder & Partner</p>
                    <p className="text-muted-foreground mt-2">
                      Company Secretary | Expert in Corporate Law, Insolvency, SEBI & FEMA Regulations
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Avinash Prabhat is a qualified Company Secretary with strong understanding of Finance, Management, Corporate Governance and Statutory Compliance. Having 5 years of hands-on experience including CS internship, he has contributed significantly to regulatory compliance and governance matters for reputed organizations such as Lenskart Solutions Pvt. Ltd. and Continental Seeds & Chemicals Ltd.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground pt-4">Profile</h3>
                  <p>
                    His specialization spans across Corporate Law advisory, corporate restructuring, SEBI regulatory compliance and FEMA-related cross-border transactions. He has represented clients before various authorities in insolvency and corporate law matters, offering strategic support in M&A, securities compliance, and investor governance frameworks.
                  </p>
                  <p>
                    His keen approach toward accuracy and regulatory alignment helps businesses mitigate risks and maintain high standards of compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
