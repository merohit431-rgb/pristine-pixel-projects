import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import foundersImage from "@/assets/founders-home.jpeg";
import {
  FileText,
  Building2,
  Shield,
  Users,
  TrendingUp,
  FileCheck,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70" />
        </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Compliance Globe Next?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compliance Globe Next LLP is led by two dynamic professionals who bring complementary strengths across Corporate Law, Insolvency, Finance, and Regulatory Compliance — ensuring the firm delivers excellent, future-ready solutions to its clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founders Image */}
            <div className="relative rounded-xl overflow-hidden shadow-elegant animate-fade-in hover-scale max-h-[400px]">
              <img 
                src={foundersImage} 
                alt="Our Founders - Tanmoy Ghosh and Avinash Prabhat" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">About Us</h3>
                <p className="text-muted-foreground">
                  We are a leading professional services firm specializing in corporate compliance, legal advisory, and business solutions. Our team combines extensive experience with innovative approaches to deliver comprehensive services that help businesses thrive in today's complex regulatory environment.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">
                      Highly qualified professionals with deep regulatory expertise across Corporate Law, Insolvency & Finance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Solutions</h4>
                    <p className="text-muted-foreground text-sm">
                      End-to-end services covering your entire business lifecycle from incorporation to compliance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-muted-foreground text-sm">
                      Trusted by businesses across industries for reliable compliance and advisory services
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link to="/about">
                  <Button className="shadow-elegant">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/founders">
                  <Button variant="outline">
                    Meet Our Founders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
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

          <div className="text-center mt-10">
            <Link to="/services/additional">
              <Button size="lg" variant="outline" className="shadow-sm">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="border-none shadow-elegant hover-lift animate-fade-in group" style={{ animationDelay: '100ms' }}>
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Eye className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative compliance partner, empowering businesses to achieve sustainable growth through seamless regulatory adherence and strategic advisory services. We envision a business landscape where compliance is not a burden but a competitive advantage.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-none shadow-elegant hover-lift animate-fade-in group" style={{ animationDelay: '200ms' }}>
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional corporate compliance and legal solutions with integrity, expertise, and client-centric approach. We are committed to simplifying complex regulatory requirements and enabling businesses to focus on their core operations while we handle their compliance needs.
                </p>
              </CardContent>
            </Card>
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
