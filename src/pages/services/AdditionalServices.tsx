import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Landmark, Calculator, Users, BookOpen, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const AdditionalServices = () => {
  const services = [
    {
      icon: Building,
      title: "Virtual Office Solutions",
      description:
        "Legal business address for MCA, GST, and bank registration without physical workspace.",
      items: [
        "Registered office address provision",
        "Mail handling and forwarding",
        "Address verification support",
        "MCA and GST registration assistance",
        "Lease agreement and NOC documentation",
        "Compliance renewal support",
      ],
    },
    {
      icon: Landmark,
      title: "Banking Assistance",
      description:
        "Complete support for business account opening, KYC compliance, and trade finance.",
      items: [
        "Current account setup coordination",
        "KYC document preparation",
        "Board resolution drafting",
        "Trade finance and LC guidance",
        "Loan and overdraft documentation",
        "Foreign remittance and FCRA support",
      ],
    },
    {
      icon: Calculator,
      title: "Financial Planning & Bookkeeping",
      description:
        "Professional bookkeeping, accounting systems, and financial health analysis.",
      items: [
        "Accounting system setup",
        "Monthly bookkeeping services",
        "Bank reconciliation",
        "Financial reporting",
        "Budgeting and forecasting",
        "CA coordination for audits",
      ],
    },
    {
      icon: Users,
      title: "Payroll Management",
      description:
        "Complete payroll processing, statutory compliance, and employee benefit administration.",
      items: [
        "Salary processing and disbursement",
        "TDS calculation and filing",
        "PF and ESI compliance",
        "Payslip and Form 16 generation",
        "Employee benefits administration",
        "Statutory register maintenance",
      ],
    },
    {
      icon: BookOpen,
      title: "Accounting & Auditing",
      description:
        "Comprehensive accounting services, internal audits, and financial statement preparation.",
      items: [
        "Financial statement preparation",
        "Internal audit services",
        "Tax audit coordination",
        "Statutory audit support",
        "MIS reporting",
        "Accounting standards compliance",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Support Services",
      description:
        "Additional operational support for smooth business management and growth.",
      items: [
        "Secretarial services",
        "Document management",
        "Compliance calendar management",
        "Vendor coordination",
        "Administrative support",
        "Business process outsourcing",
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
            <Badge className="mb-4">Additional Support</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Additional Business <span className="text-gradient">Support Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Integrated business management solutions including virtual office,
              accounting, payroll, and financial planning
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

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Outsource to Us
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Cost-Effective</h3>
                    <p className="text-muted-foreground">
                      Save on hiring full-time staff and infrastructure costs while
                      getting professional services
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Access to experienced professionals across accounting, HR,
                      legal, and compliance domains
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Focus on Core Business</h3>
                    <p className="text-muted-foreground">
                      Let us handle administrative tasks while you focus on growing
                      your business
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Scalable Solutions</h3>
                    <p className="text-muted-foreground">
                      Services that grow with your business needs without long-term
                      commitments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Startups</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for new businesses needing professional support without
                    heavy overhead
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">MSMEs</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive back-office support for growing small and medium
                    enterprises
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Corporates</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized services for established companies seeking
                    operational efficiency
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

export default AdditionalServices;
