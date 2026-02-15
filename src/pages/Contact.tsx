import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 bg-secondary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
              Have questions about our review programs or need technical
              support? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                          Email Us
                        </p>
                        <a
                          href="mailto:sentinelvet.care@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors font-sans"
                        >
                          sentinelvet.care@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                          Call Us
                        </p>
                        <p className="text-muted-foreground font-sans">
                          +63 917 142 9725
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground font-sans">
                          Visit Us
                        </p>
                        <p className="text-muted-foreground font-sans">
                          Philippines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/sentinelvetdiagnostics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/5 hover:bg-secondary/10 p-4 rounded-xl text-foreground transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/sentinel.vet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/5 hover:bg-secondary/10 p-4 rounded-xl text-foreground transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-sm">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-sans">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        className="h-12 bg-background font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground font-sans">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        className="h-12 bg-background font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 bg-background font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground font-sans">
                      Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      className="min-h-[150px] bg-background resize-none font-sans"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full h-12 text-base font-display"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
