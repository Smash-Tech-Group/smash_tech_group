// types/testimonial.ts
export interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rotation: number;
  position: {
    top: string;
    left?: string;
    right?: string;
  };
}
