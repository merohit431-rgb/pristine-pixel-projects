import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, FileCheck, Stethoscope, Award, ShieldCheck, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const EximServices = () => {
  const services = [
    {
      icon: FileCheck,
      title: "LMPC Certification",
      items: [
        "LMPC Rule-27",
        "LMPC Section-19",
        "LMPC Modal Approval",
        "LMPC Nominee Director",
        "LMPC Audit",
        "LMPC Rule 27 Amendment",
      ],
    },
    {
      icon: ShieldCheck,
      title: "EPR Services",
      items: [
        "EPR Plastic",
        "EPR Battery",
        "EPR Tyres",
        "EPR Waste Oil",
        "EPR Compliance",
        "EPR Annual/Quarterly Return",
      ],
    },
    {
      icon: Stethoscope,
      title: "CDSCO Registration",
      items: ["Medical Device Registration", "Cosmetics Registration"],
    },
    {
      icon: Award,
      title: "AEO Certification",
      items: ["AEO T1", "AEO T2", "AEO T3", "AEO LO"],
    },
    {
      icon: Ship,
      title: "ICEGATE & FSSAI",
      items: [
        "ICEGATE Registration",
        "FSSAI Central License",
        "FSSAI State License",
      ],
    },
    {
      icon: Globe,
      title: "DGFT Services",
      items: [
        "EPCG",
        "Restricted License",
        "SCOMET",
        "RCMC",
        "IEC",
        "Advance Authorization Scheme",
        "Free Sale Certificate",
        "PIMS, SIMS, CHIMS",
        "Special Import License",
      ],
    },
  ];

  const additionalServices = [
    "Free Trade Agreement (FTA) Certification",
    "Quality Control Certification",
    "Customs Valuation Certification",
    "Dangerous Goods Certification",
    "Electronic Export Information (EEI) Filing",
    "Training and Consultation",
    "Export-Import Documentation",
    "Certificate of Origin Issuance",
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
            <Badge className="mb-4">Export-Import Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              EXIM <span className="text-gradient">Certification Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete export-import regulatory compliance, certifications, and
              licensing solutions for seamless global trade
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
              Additional Import-Export Support
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServices.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How Compliance Globe Next Helps
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We manage the entire process of export-import compliance,
                    ensuring smooth trade operations and faster approvals:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Complete documentation preparation and verification
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Online filings and liaison with regulatory authorities
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Timely renewals and compliance management
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Expert guidance on customs and trade regulations
                      </p>
                    </li>
                  </ul>
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

export default EximServices;
