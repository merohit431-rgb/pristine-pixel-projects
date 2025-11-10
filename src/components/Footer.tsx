import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gradient">
              Compliance Globe Next LLP
            </h3>
            <p className="text-sm text-muted-foreground">
              The House of Complete Corporate & Legal Solutions
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  2583 and 2604-2605, Pvt No. 5, Third Floor, Gali No. 5,
                  Beadonpura, Karol Bagh, New Delhi - 110005
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/exim"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  EXIM Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/registration"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Registration Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Corporate Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Consulting & Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+919560293324"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-9560293324
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+919999648031"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-9999648031
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@icompliance.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@icompliance.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info.complianceglobe@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info.complianceglobe@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Compliance Globe Next LLP. All rights
            reserved.
          </p>
          <p className="mt-2">LLPIN: ACM-5811 | GSTIN: 07AAUFC9158K1ZM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
