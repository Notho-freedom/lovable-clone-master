import { useParams, Link } from "react-router-dom";
import { ThumbsUp, Share2, MessageCircle, Flag, Download, GraduationCap, ChevronDown, ChevronUp, Users, FileText } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ days: 1, hours: 15, minutes: 40, seconds: 26 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="text-center space-y-2">
      <p className="text-sm text-muted-foreground">Offer ends in</p>
      <div className="flex items-center justify-center gap-1 text-2xl font-bold">
        <span className="bg-muted rounded px-2 py-1">{pad(time.days)}</span>
        <span>:</span>
        <span className="bg-muted rounded px-2 py-1">{pad(time.hours)}</span>
        <span>:</span>
        <span className="bg-muted rounded px-2 py-1">{pad(time.minutes)}</span>
        <span>:</span>
        <span className="bg-muted rounded px-2 py-1">{pad(time.seconds)}</span>
      </div>
      <div className="flex justify-center gap-6 text-xs text-muted-foreground">
        <span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/" className="text-primary underline">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {product.type === "course" && (
            <>
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="h-4 w-4" />
                {product.rating} ({product.ratingCount} Ratings)
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {product.students}+ Students
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                Course
              </div>
            </>
          )}
          {product.type === "downloadable" && (
            <div className="flex items-center gap-1.5">
              <Download className="h-4 w-4" />
              Downloadable
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cover Image */}
          <img
            src={product.coverImage}
            alt={product.title}
            className="w-full rounded-xl object-cover"
          />

          {/* Reviews carousel */}
          {product.reviews.length > 0 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="min-w-[280px] max-w-[320px] rounded-xl border border-border p-5 space-y-3 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold">
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <ThumbsUp className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Course content */}
          {product.chapters && product.chapters.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Course content</h2>
              <div className="space-y-2">
                {product.chapters.map((chapter, idx) => (
                  <div key={idx} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedChapter(expandedChapter === idx ? null : idx)}
                      className="w-full flex items-start justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <h3 className="text-sm font-semibold">{chapter.title}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{chapter.description}</p>
                        <p className="text-xs text-muted-foreground pl-6">{chapter.lessonCount} Lesson{chapter.lessonCount > 1 ? "s" : ""}</p>
                      </div>
                      {expandedChapter === idx ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                      )}
                    </button>
                    {expandedChapter === idx && (
                      <div className="border-t border-border p-4 space-y-2 bg-muted/30">
                        {chapter.lessons.map((lesson, lIdx) => (
                          <div key={lIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText className="h-3.5 w-3.5" />
                            {lesson}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Downloadable file section */}
          {product.type === "downloadable" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Files (1)</h2>
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm text-primary">
                Preview the first pages for free before purchase
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-destructive/10 flex items-center justify-center text-xs font-bold text-destructive">PDF</div>
                  <div>
                    <p className="text-sm font-medium">Formation creation de videos ia</p>
                    <p className="text-xs text-muted-foreground">309.7 KB • 2 pages</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground border border-border rounded px-2 py-1">No preview</span>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="prose prose-sm max-w-none space-y-4">
            {product.description.map((text, idx) => (
              <p key={idx} className="text-base leading-relaxed">{text}</p>
            ))}
          </div>

          {/* FAQ */}
          {product.faq && product.faq.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {product.faq.map((item, idx) => (
                  <details key={idx} className="border border-border rounded-lg">
                    <summary className="p-4 cursor-pointer text-sm font-medium hover:bg-muted/50 transition-colors">
                      {item.question}
                    </summary>
                    <div className="px-4 pb-4 text-sm text-muted-foreground">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Pricing */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6 rounded-xl border border-border p-6">
            {/* Stock indicator for downloadable */}
            {product.type === "downloadable" && product.sold !== undefined && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sold: {product.sold}</span>
                  <span>Remaining: {product.remaining}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-destructive"
                    style={{ width: `${((product.sold || 0) / ((product.sold || 0) + (product.remaining || 1))) * 100}%` }}
                  />
                </div>
                <p className="text-sm font-medium text-destructive">Limited time offer</p>
              </div>
            )}

            {/* Price */}
            <div className="text-center">
              <span className="text-lg text-muted-foreground line-through mr-2">{product.originalPrice}</span>
              <span className="text-3xl font-bold" style={{ color: "hsl(142, 71%, 35%)" }}>{product.salePrice}</span>
            </div>

            {/* Countdown for limited offer */}
            {product.limitedOffer && <CountdownTimer />}

            {/* CTA Button */}
            <button className="w-full rounded-lg bg-primary py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
              {product.ctaLabel}
            </button>

            {/* Payment methods */}
            <div className="text-center space-y-3">
              <p className="text-xs text-muted-foreground">Available payment methods</p>
              <div className="flex items-center justify-center gap-2">
                <img src="https://assets.cdn.moneroo.io/icons/circle/visa.svg" alt="Visa" className="h-8 w-8" />
                <img src="https://assets.cdn.moneroo.io/icons/circle/mastercard.svg" alt="Mastercard" className="h-8 w-8" />
                <img src="https://assets.cdn.moneroo.io/icons/circle/crypto.svg" alt="Crypto" className="h-8 w-8" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-6 border-t border-border pt-4">
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> Contact
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Flag className="h-3.5 w-3.5" /> Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
