import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Shield, FileSearch, Scale, UserCheck } from "lucide-react";

const ConsultingServices = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Policy Development & Implementation",
      description:
        "Comprehensive internal policies for governance, compliance, and ethical business practices.",
      items: [
        "Code of Conduct",
        "Whistleblower Policy",
        "POSH Policy",
        "Grievance Redressal frameworks",
        "HR Compliance frameworks",
        "Periodic policy review and updates",
      ],
    },
    {
      icon: Users,
      title: "Training & Awareness Programs",
      description:
        "Employee training on POSH, Data Privacy, Workplace Ethics, and Regulatory Compliance.",
      items: [
        "Customized online and onsite training sessions",
        "POSH awareness programs",
        "Data privacy and security training",
        "Prevention of fraud training",
        "Certification of participation",
        "Audit readiness support",
      ],
    },
    {
      icon: Shield,
      title: "Internal Committee (IC) Support",
      description:
        "Formation and training of Internal Committee under POSH Act for organizations with 10+ employees.",
      items: [
        "IC formation and structure guidance",
        "Member training and orientation",
        "POSH policy drafting and updates",
        "External Member services (as per Section 4)",
        "Quarterly compliance reports",
        "Annual return filing support",
      ],
    },
    {
      icon: FileSearch,
      title: "Complaint Handling & Investigation",
      description:
        "Structured mechanisms for handling internal complaints with fairness and procedural compliance.",
      items: [
        "Complaint management systems",
        "Independent investigations",
        "Evidence collection and documentation",
        "Witness interviews and reporting",
        "Confidentiality maintenance",
        "Final report preparation",
      ],
    },
    {
      icon: Scale,
      title: "Legal Compliance & Advisory",
      description:
        "Expert legal guidance on labor laws, contracts, and regulatory compliance.",
      items: [
        "Labor law compliance",
        "Contract drafting and review",
        "Regulatory advisory services",
        "Litigation support",
        "Legal risk assessment",
        "Policy interpretation",
      ],
    },
    {
      icon: UserCheck,
      title: "Mediation & Consultation",
      description:
        "Ongoing support for conflict resolution and workplace dispute management.",
      items: [
        "Mediation and conciliation services",
        "External Committee membership",
        "Workplace conflict resolution",
        "Settlement facilitation",
        "Ongoing consultation support",
        "Best practices implementation",
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
            <Badge className="mb-4">Consulting & Advisory</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Consulting & <span className="text-gradient">Advisory Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert policy development, POSH compliance, training programs, and
              legal advisory services
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Our Consulting Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Seasoned professionals with deep regulatory and legal expertise
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored policies and programs specific to your organization
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Complete Support</h3>
                  <p className="text-sm text-muted-foreground">
                    End-to-end assistance from policy creation to implementation
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

export default ConsultingServices;
