import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSearch, TrendingUp, RefreshCw, Scale, FileCheck, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const NpaServices = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Asset Assessment & Analysis",
      description:
        "Detailed examination of loan accounts, collateral security, and financial health to determine NPA status and recoverability.",
      items: [
        "Loan account classification",
        "Collateral valuation",
        "Financial health assessment",
        "Cash flow analysis",
        "Viability and recovery reports",
        "RBI prudential norm compliance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Strategic NPA Resolution",
      description:
        "Customized resolution plans using legally permissible methods under RBI and IBC frameworks.",
      items: [
        "OTS (One-Time Settlement) proposals",
        "Restructuring strategies",
        "ARC sale facilitation",
        "Lender coordination",
        "Term sheet drafting",
        "Implementation monitoring",
      ],
    },
    {
      icon: RefreshCw,
      title: "Debt Restructuring & Rehabilitation",
      description:
        "Modifying loan terms to restore financial stability and prevent default classification.",
      items: [
        "Repayment tenure extension",
        "Interest rate modifications",
        "Debt-to-equity conversion",
        "Viability studies",
        "Bank liaison and approvals",
        "RBI guideline compliance",
      ],
    },
    {
      icon: Scale,
      title: "Legal & Regulatory Compliance",
      description:
        "Ensuring full compliance with SARFAESI, IBC, and RBI regulations in NPA management.",
      items: [
        "SARFAESI notice handling",
        "IBC application support",
        "DRT proceedings assistance",
        "Legal documentation",
        "Regulatory filings",
        "Litigation management",
      ],
    },
    {
      icon: FileCheck,
      title: "OTS Facilitation",
      description:
        "Negotiating and executing One-Time Settlement agreements with lenders.",
      items: [
        "Proposal preparation",
        "Negotiation with banks",
        "Documentation support",
        "Settlement execution",
        "Clearance certificates",
        "Credit report updates",
      ],
    },
    {
      icon: DollarSign,
      title: "Recovery & Enforcement",
      description:
        "Comprehensive recovery strategies and enforcement mechanisms for NPA accounts.",
      items: [
        "Asset sale and liquidation",
        "Security enforcement",
        "Recovery proceedings",
        "ARC liaison services",
        "Portfolio management",
        "Collection strategies",
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
            <Badge className="mb-4">NPA Consulting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              NPA Consulting & <span className="text-gradient">Financial Recovery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert NPA assessment, debt restructuring, recovery services, and
              regulatory compliance solutions
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

      {/* Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Comprehensive Approach
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We blend financial expertise, legal knowledge, and regulatory
                    experience to achieve optimal resolution outcomes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Independent asset assessment and valuation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Strategic resolution planning and execution
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Full RBI, SARFAESI, and IBC compliance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Stakeholder coordination and negotiation
                      </p>
                    </div>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Faster Recovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximize recovery through appropriate resolution mechanisms
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Compliance Assured</h3>
                  <p className="text-sm text-muted-foreground">
                    Full adherence to RBI's Prudential Framework for resolution
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Avoid Litigation</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimize write-offs and prolonged legal proceedings
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

export default NpaServices;
