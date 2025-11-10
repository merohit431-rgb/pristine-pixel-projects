import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FileText,
  Building2,
  Shield,
  Users,
  TrendingUp,
  FileCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: FileCheck,
      title: "EXIM Services",
      description: "Complete export-import certification and licensing solutions",
      path: "/services/exim",
    },
    {
      icon: Building2,
      title: "Registration Services",
      description: "Company incorporation and business registration support",
      path: "/services/registration",
    },
    {
      icon: Shield,
      title: "Corporate Compliance",
      description: "ROC filings, SEBI compliance, and regulatory management",
      path: "/services/compliance",
    },
    {
      icon: Users,
      title: "Consulting & Advisory",
      description: "Policy development, POSH compliance, and legal advisory",
      path: "/services/consulting",
    },
    {
      icon: TrendingUp,
      title: "NPA & Financial Recovery",
      description: "Asset assessment, debt restructuring, and recovery services",
      path: "/services/npa",
    },
    {
      icon: FileText,
      title: "Insurance Claims",
      description: "Claim support, documentation, and dispute resolution",
      path: "/services/insurance",
    },
    {
      icon: Briefcase,
      title: "Additional Support",
      description: "Virtual office, accounting, payroll, and business services",
      path: "/services/additional",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The House of Complete
              <span className="block text-gradient">Corporate & Legal Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert compliance, legal, and business advisory services to help your
              organization navigate regulatory complexities with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="shadow-elegant hover-lift">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.path}
                  className="hover-lift group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={service.path}>
                      <Button variant="ghost" className="group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Compliance Globe Next?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Highly qualified professionals with deep regulatory expertise
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Complete Solutions</h3>
                    <p className="text-muted-foreground">
                      End-to-end services covering your entire business lifecycle
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Trusted by businesses across industries for reliable compliance
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button className="shadow-elegant">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Building2 className="h-32 w-32 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Ensure Compliance?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with our experts today and let us help you navigate the
            complexities of corporate compliance.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-elegant hover-lift"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
