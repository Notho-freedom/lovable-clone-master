import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container py-12 max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold">About ARKCOM IA</h1>

      <p className="text-muted-foreground leading-relaxed">
        Welcome to ARKCOM IA! We are passionate about providing high-quality digital products that help you achieve your goals and expand your knowledge.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our mission is to make premium digital content accessible to everyone. We carefully curate our collection to ensure that every product meets our high standards of quality and value.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">What We Offer</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Digital courses and educational content</li>
          <li>Software tools and applications</li>
          <li>Templates and design resources</li>
          <li>eBooks and guides</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Our Commitment</h2>
        <p className="text-muted-foreground leading-relaxed">
          We are committed to providing excellent customer service and ensuring your satisfaction with every purchase. Our team is always here to help you make the most of our products.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Thank you for choosing ARKCOM IA. We look forward to serving you!
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions, please don't hesitate to contact us at{" "}
          <a href="mailto:arkcomia@gmail.com" className="underline text-foreground">
            arkcomia@gmail.com
          </a>.
        </p>
      </section>

      <div className="flex flex-wrap gap-4 pt-4">
        <Link
          to="/"
          className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Buy a product
        </Link>
        <Link
          to="/contact"
          className="rounded-lg border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
