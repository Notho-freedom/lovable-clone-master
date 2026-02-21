import { Phone, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Left */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Talk to our sales team
            </h1>
            <p className="text-muted-foreground mt-3">
              We are here to help you. You can contact us via WhatsApp or email.
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Call us</p>
              <a href="tel:2290141822325" className="flex items-center gap-2 text-foreground font-medium hover:underline">
                <Phone className="h-5 w-5" />
                2290141822325
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
              <a
                href="https://wa.me/2290141822325"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground font-medium hover:underline"
              >
                <MessageCircle className="h-5 w-5" />
                https://wa.me/2290141822325
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Send us an email</p>
              <a href="mailto:arkcomia@gmail.com" className="flex items-center gap-2 text-foreground font-medium hover:underline">
                <Mail className="h-5 w-5" />
                arkcomia@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">
                First name <span className="text-destructive">*</span>
              </label>
              <input
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">
                Last name <span className="text-destructive">*</span>
              </label>
              <input
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Phone number <span className="text-destructive">*</span>
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-input px-3 py-2.5">
                <img
                  src="https://cdn.axazara.com/flags/svg/US.svg"
                  alt="US"
                  className="h-5 w-5 rounded-full object-cover"
                />
              </div>
              <input
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Email address <span className="text-destructive">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
