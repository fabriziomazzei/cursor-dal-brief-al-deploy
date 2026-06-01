import type { Testimonial } from "@/lib/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-card">
      <svg
        className="mb-5 h-7 w-7 text-coral-500"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.5 6C5 6 3 8 3 10.5c0 2.2 1.6 4 3.7 4.4-.1 1.6-.9 2.7-2.4 3.4l.6 1.2c2.6-.8 4.6-2.9 4.6-6.5V10.5C9.5 8 8.5 6 7.5 6zm9 0C14 6 12 8 12 10.5c0 2.2 1.6 4 3.7 4.4-.1 1.6-.9 2.7-2.4 3.4l.6 1.2c2.6-.8 4.6-2.9 4.6-6.5V10.5c0-2.5-1-4.5-2-4.5z" />
      </svg>
      <blockquote className="flex-1 text-base leading-relaxed text-slate-700">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-slate-100 pt-5">
        <p className="font-semibold text-navy-900">{testimonial.name}</p>
        <p className="text-sm text-slate-500">
          {testimonial.role} · {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
}
