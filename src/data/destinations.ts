import destinationsData from "../../content/destinations/destinations.json";

export interface DestinationCard {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  tags: string[];
}

export const POPULAR_DESTINATIONS = destinationsData.destinations as DestinationCard[];
