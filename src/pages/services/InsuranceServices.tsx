import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSearch, MessageSquare, FileText, Handshake, Scale, LifeBuoy } from "lucide-react";

const InsuranceServices = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Claim Review & Analysis",
      description:
        "Professional review to verify policy compliance and ensure strong claim presentation.",
      items: [
        "Policy document examination",
        "Coverage gap identification",
        "Documentation verification",
        "Claim validity assessment",
        "Missing evidence identification",
        "Detailed claim report preparation",
      ],
    },
    {
      icon: MessageSquare,
      title: "Appeal Preparation & Representation",
      description:
        "Professional appeals before Insurance Ombudsman, IRDAI, or Consumer Court for disputed claims.",
      items: [
        "Appeal letter drafting",
        "Evidence compilation",
        "Legal interpretation support",
        "Insurance Ombudsman filing",
        "IRDAI representation",
        "Follow-up and decision tracking",
      ],
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description:
        "Complete assistance in preparing and verifying all claim-related documentation.",
      items: [
        "Claim form preparation",
        "Supporting document collection",
        "Bill and invoice verification",
        "Survey report coordination",
        "Photo documentation",
        "FIR and legal document support",
      ],
    },
    {
      icon: Handshake,
      title: "Negotiation with Insurers",
      description:
        "Expert negotiation to achieve fair settlement amounts and faster claim processing.",
      items: [
        "Settlement negotiation",
        "Counter-proposal preparation",
        "Insurer communication",
        "Dispute resolution",
        "Fair value assessment",
        "Settlement execution support",
      ],
    },
    {
      icon: Scale,
      title: "Legal Consultation",
      description:
        "Expert legal guidance on policy interpretation, coverage disputes, and claim rights.",
      items: [
        "Policy clause interpretation",
        "Legal rights assessment",
        "Coverage dispute resolution",
        "Litigation support",
        "Legal opinion preparation",
        "Court representation coordination",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support Services",
      description:
        "Continuous assistance for claim management, policy reviews, and future claim preparation.",
      items: [
        "Policy review and recommendations",
        "Claim resubmission services",
        "Future claim guidance",
        "Premium optimization advice",
        "Coverage adequacy assessment",
        "Emotional support and counseling",
      ],
    },
  ];

  const claimTypes = [
    "Health Insurance Claims",
    "Life Insurance Claims",
    "Property Insurance Claims",
    "Marine Insurance Claims",
    "Fire Insurance Claims",
    "Business Interruption Claims",
    "Motor Insurance Claims",
    "Travel Insurance Claims",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge className="mb-4">Insurance Claims</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Insurance Claim <span className="text-gradient">Support Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              End-to-end insurance claim assistance from documentation to
              negotiation and legal consultation
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

      {/* Claim Types */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Types of Claims We Handle
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {claimTypes.map((type) => (
                    <div key={type} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{type}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Higher Success Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert representation increases chances of fair settlement
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Faster Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional handling speeds up claim approval process
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Stress-Free Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    We handle all complexities while you focus on recovery
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

export default InsuranceServices;
