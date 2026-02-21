import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AffiliationPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-20">
        <div className="container text-center space-y-6 max-w-2xl">
          <span className="inline-block rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium">
            Affiliate Program
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Become a partner and earn commissions
          </h1>
          <p className="text-muted-foreground text-lg">
            Join our affiliate network and recommend products you love. Earn up to 30% commission on each sale.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            View products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Products section */}
      <section className="container py-16 space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Products available for affiliation</h2>
          <p className="text-muted-foreground mt-1">Discover all the products you can promote</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none">
            <option>Category</option>
          </select>
          <select className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none">
            <option>Product type</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default AffiliationPage;
