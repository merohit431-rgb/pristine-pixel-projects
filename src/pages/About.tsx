import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Upholding ethical standards and transparency in every engagement.",
    },
    {
      icon: Award,
      title: "Accountability",
      description: "Taking ownership of our commitments and results.",
    },
    {
      icon: Heart,
      title: "Confidentiality",
      description: "Protecting client data with absolute discretion.",
    },
    {
      icon: Users,
      title: "Professionalism",
      description: "Combining legal precision with business practicality.",
    },
    {
      icon: Target,
      title: "Client-Centricity",
      description: "Tailoring every solution to each client's unique needs.",
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
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Compliance Globe Next LLP</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for corporate, regulatory, and financial
              compliance solutions across India
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Compliance Globe Next LLP is a professional consulting and legal
                management firm providing end-to-end corporate, regulatory, and
                financial compliance solutions to businesses across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with the vision of creating a one-stop solution for legal,
                corporate, and business governance, we combine deep regulatory
                expertise with modern business insights to simplify compliance and
                empower growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our services cover the entire business lifecycle — from company
                formation and registrations to statutory filings, DGFT licensing,
                SEBI compliances, NPA management, and insurance claim support.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to excellence, confidentiality, and ethical
                practice, ensuring every client receives accurate, timely, and
                reliable advisory support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted and innovative compliance and legal
                  advisory firm — enabling businesses to grow confidently within a
                  transparent and regulated environment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver comprehensive corporate and legal solutions that ensure
                  compliance, reduce risk, and promote sustainable business practices
                  through professional excellence and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Company Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      LLPIN
                    </p>
                    <p className="text-lg">ACM-5811</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      GSTIN
                    </p>
                    <p className="text-lg">07AAUFC9158K1ZM</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Registered Office
                    </p>
                    <p className="text-lg">
                      2583 and 2604–2605, Pvt. No. 5, Third Floor, Gali No. 5,
                      Beadonpura, Karol Bagh, Central Delhi, New Delhi – 110005,
                      India
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Email
                    </p>
                    <p className="text-lg">info.complianceglobe@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Mobile
                    </p>
                    <p className="text-lg">
                      +91-95602 93324
                      <br />
                      +91-99996 48031
                    </p>
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

export default About;
