export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  iconKey: "social" | "calendar" | "pen" | "spark";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type ClientLogo = {
  name: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type EventDetails = {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  price: string;
  outcomes: string[];
  program: Array<{
    time: string;
    title: string;
    description: string;
  }>;
};
