import { LocatableImages } from './LocatableImages';

export class Favorite {
  id: string;
  userId: string;
  locatableId: string;
  description: string;
  locatableImages: LocatableImages[];
}
