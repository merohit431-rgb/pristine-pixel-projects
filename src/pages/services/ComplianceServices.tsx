import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp, Shield, Building, BookOpen, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ComplianceServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Annual ROC Filings",
      description:
        "Complete annual return and financial statement filing services for all company types.",
      items: [
        "AOC-4 (Financial Statements)",
        "MGT-7/MGT-7A (Annual Return)",
        "ADT-1 (Auditor Appointment)",
        "Director KYC and statutory registers",
        "Board reports and directors' reports",
      ],
    },
    {
      icon: BookOpen,
      title: "Statutory Form Filings",
      description:
        "Expert filing of all MCA statutory forms including XBRL and cost audit reports.",
      items: [
        "CRA-2 and CRA-4 (Cost Audit Reports)",
        "XBRL format conversion and filing",
        "Event-based compliance filings",
        "Digital signature management",
        "End-to-end audit coordination",
      ],
    },
    {
      icon: TrendingUp,
      title: "SEBI Compliance (Quarterly)",
      description:
        "Quarterly compliance for listed companies under SEBI LODR regulations.",
      items: [
        "Shareholding pattern filing",
        "Corporate governance reports",
        "Financial results (Reg 33)",
        "Regulation 27 compliance",
        "Board meeting disclosures",
      ],
    },
    {
      icon: Shield,
      title: "SEBI Event-wise Compliance",
      description:
        "Timely disclosures for corporate actions and material events.",
      items: [
        "Director appointment/resignation",
        "Dividend declarations",
        "Merger and acquisition disclosures",
        "Insider trading compliance",
        "Related party transactions",
      ],
    },
    {
      icon: Building,
      title: "Corporate Actions",
      description:
        "Complete support for corporate restructuring and capital changes.",
      items: [
        "Bonus issue and stock splits",
        "Rights issue management",
        "Buyback support",
        "Change in capital structure",
        "Name change and amendments",
      ],
    },
    {
      icon: CheckCircle,
      title: "NSE/BSE Compliance",
      description:
        "Listing compliance and corporate governance for stock exchange regulations.",
      items: [
        "Listing agreement compliance",
        "Corporate action notifications",
        "Shareholding pattern updates",
        "Price-sensitive disclosures",
        "Annual listing fees management",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="mb-4">Corporate Compliance</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Corporate <span className="text-gradient">Compliance Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive ROC filings, SEBI compliance, and regulatory management
              to keep your business compliant
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Additional Compliance Support
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Minutes and resolutions management
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Tax compliance coordination
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Regulatory filings across jurisdictions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Corporate records management
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Intellectual Property (IP) protection
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Audit and secretarial support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Our Compliance Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Timely Filings</h3>
                  <p className="text-sm text-muted-foreground">
                    Never miss a deadline with our proactive compliance calendar
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced professionals handling complex regulations
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Zero Penalties</h3>
                  <p className="text-sm text-muted-foreground">
                    Avoid late fees and penalties with accurate filings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServices;
