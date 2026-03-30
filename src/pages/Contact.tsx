import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help. Reach out to us and we'll respond
              as soon as we can.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-1">
                        <a href="tel:+919560293324" className="hover:text-primary transition-colors">
                          +91-9560293324
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+919999648031" className="hover:text-primary transition-colors">
                          +91-9999648031
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-1">
                        <a href="mailto:info@icompliance.in" className="hover:text-primary transition-colors">
                          info@icompliance.in
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:info.complianceglobe@gmail.com" className="hover:text-primary transition-colors">
                          info.complianceglobe@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Address</h3>
                      <p className="text-muted-foreground">
                        2583 and 2604-2605, Pvt No. 5, Third Floor,
                        <br />
                        Gali No. 5, Beadonpura, Karol Bagh,
                        <br />
                        New Delhi - 110005, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-elegant h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.1903!3d28.6519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c1c3aaaab%3A0x7c0c2b5e5e5e5e5e!2sBeadonpura%2C%20Karol%20Bagh%2C%20New%20Delhi%2C%20Delhi%20110005!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Karol Bagh, New Delhi"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
