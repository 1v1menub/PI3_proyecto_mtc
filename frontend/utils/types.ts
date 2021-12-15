export interface GeoDecode {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: number;
  lat?: string;
  lon?: string;
  place_rank?: number;
  category?: string;
  type?: string;
  importance?: number;
  addresstype?: string;
  name?: null;
  display_name?: string;
  address?: Address;
  boundingbox?: string[];
}

export interface Address {
  house_number: string;
  road: string;
  neighbourhood: string;
  city: string;
  region: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
}
