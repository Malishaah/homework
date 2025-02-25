const API_KEY = "563492ad6f91700001000001e9543e64cc6240f3a18b3b0d9f42629d";

export async function fetchImages(query: string = "nature", perPage: number = 10, page: number = 1) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
    {
      headers: { Authorization: API_KEY },
    }
  );
  const data: PexelsSearchResponse = await response.json();
  return data.photos;
}

export type Photo = PexelsSearchResponse["photos"][number];

interface PexelsSearchResponse {
  photos: {
    id: number;
    src: { medium: string; original: string };
    photographer: string;
    photographer_url: string;
    alt: string;
  }[];
}
