"use server";

import { Client, AddressType } from "@googlemaps/google-maps-services-js"; // Import AddressType
const client = new Client();

export const autocomplete = async (input: string) => {
  if (!input) return [];
  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        components: ["country: us"], //, // Only U.S. locations
      },
    });

    const cityPredictions = response.data.predictions.filter(
      (prediction) =>
        prediction.types.includes(AddressType.locality) || // Use AddressType enum
        prediction.types.includes(AddressType.administrative_area_level_1) // Use AddressType enum
    );

    return cityPredictions;
  } catch (error) {
    console.log(error);
  }
};
