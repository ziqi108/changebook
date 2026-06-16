export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  initials: string;
  course: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The I Ching course completely reframed how I make decisions. It is the most practical philosophy I have ever studied — and beautifully translated for a Western mind. I now start every morning with a cast.',
    author: 'Elena Hartman',
    role: 'Jungian Analyst',
    location: 'Zürich, Switzerland',
    initials: 'EH',
    course: 'Beginner Course',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'I approached the master skeptical. I left with a life plan I trust. The reading was uncanny in its timing and clarity — like speaking with a very old, wise friend who sees through your patterns.',
    author: 'Marcus Whitfield',
    role: 'Author & Speaker',
    location: 'London, UK',
    initials: 'MW',
    course: 'Private Consultation',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'ChangeBook gave me the structure to actually practice the I Ching rather than just reading about it. The daily hexagram ritual has become part of who I am — a quiet compass amid chaos.',
    author: 'Sophia Laurent',
    role: 'Psychology Professor',
    location: 'Montréal, Canada',
    initials: 'SL',
    course: 'Intermediate Course',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'Master Yang connects the ancient text to modern psychology in a way no one else I have encountered can. The Xici course changed my relationship with change itself.',
    author: 'Dr. James O\'Brien',
    role: 'Philosopher',
    location: 'Dublin, Ireland',
    initials: 'JO',
    course: 'Advanced Course',
    rating: 5,
  },
  {
    id: 't5',
    quote:
      'I bought this for my wife as a gift. Six months later, we are both doing the morning ritual together. It has become a shared language for our marriage.',
    author: 'Thomas Reeves',
    role: 'Investment Banker',
    location: 'New York, USA',
    initials: 'TR',
    course: 'Beginner Course',
    rating: 5,
  },
  {
    id: 't6',
    quote:
      'As a therapist, I now use hexagram casting with my clients. It gives people a mirror for their own intuition — something Western psychology sometimes struggles to provide.',
    author: 'Dr. Aisha Rahman',
    role: 'Clinical Psychologist',
    location: 'Singapore',
    initials: 'AR',
    course: 'Intermediate Course',
    rating: 5,
  },
];
