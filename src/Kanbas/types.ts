export interface Course {
  _id: string;
  name: string;
  number: string; // Required
  description: string;
  enrolled: boolean;
}
