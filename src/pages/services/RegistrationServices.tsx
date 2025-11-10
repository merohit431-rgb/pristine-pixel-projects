import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, UserCheck, Globe2, FileText, Award, Landmark } from "lucide-react";

const RegistrationServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Private Limited Company",
      description:
        "Most popular form with limited liability, separate legal identity, and easy fundraising options. Ideal for startups and SMEs.",
      features: [
        "Minimum 2 directors and 2 shareholders required",
        "Minimum paid-up capital of ₹1 lakh",
        "Limited liability for shareholders",
        "Perpetual succession",
        "Startup India recognition eligible",
      ],
    },
    {
      icon: UserCheck,
      title: "One Person Company (OPC)",
      description:
        "Allows a single individual to form a company with limited liability. Perfect for solo entrepreneurs.",
      features: [
        "Only one director and shareholder",
        "Sole ownership with corporate identity",
        "Limited liability protection",
        "Easy conversion to Private Limited later",
        "Must appoint a nominee",
      ],
    },
    {
      icon: Globe2,
      title: "Public Limited Company",
      description:
        "Suitable for larger businesses seeking to raise capital from the public or list on stock exchanges.",
      features: [
        "Minimum 3 directors and 7 shareholders",
        "Can issue shares to the public",
        "SEBI approval required for listing",
        "Higher compliance requirements",
        "Greater credibility and funding options",
      ],
    },
    {
      icon: Landmark,
      title: "Section 8 Company",
      description:
        "For NGOs, trusts, and charitable organizations promoting social welfare.",
      features: [
        "Non-profit objectives",
        "Tax exemptions available",
        "No minimum capital requirement",
        "Surplus must be reinvested",
        "MCA approval required",
      ],
    },
    {
      icon: Award,
      title: "Startup India Registration",
      description:
        "Official recognition with tax benefits, funding access, and government support.",
      features: [
        "3-year tax holiday under Section 80-IAC",
        "Self-certification for labor laws",
        "Access to government funding",
        "Fast-track patent examination",
        "Networking opportunities",
      ],
    },
    {
      icon: FileText,
      title: "GST & Other Registrations",
      description:
        "Essential business registrations including GST, Trademark, and MSME (Udyam).",
      features: [
        "GST Registration for all states",
        "Trademark registration and protection",
        "MSME/Udyam registration",
        "PAN and TAN registration",
        "Professional Tax registration",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="mb-4">Business Registration</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Business <span className="text-gradient">Registration Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete company incorporation and registration support for all
              business structures aligned with your goals
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold mb-3">Key Features:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Compliance Globe Next Assists You
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our experts handle the end-to-end process of business
                    registration:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Name reservation through RUN/SPICe+ system
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Digital Signature Certificate (DSC) setup
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Drafting of MOA, AOA, and incorporation documents
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Filing incorporation forms with MCA
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        PAN, TAN, and GST registration
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Post-incorporation compliance support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationServices;
