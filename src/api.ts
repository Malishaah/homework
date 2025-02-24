const API_KEY = "563492ad6f91700001000001e9543e64cc6240f3a18b3b0d9f42629d";

export async function fetchImages() {
  const response = await fetch(
    "https://api.pexels.com/v1/search?query=nature&per_page=10",
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const data: PexelsSearchResponse = await response.json();
  return data.photos;
}

// export function fetchImages() {
//   fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", {
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data.photos;
//     });
// }

export type Photo = PexelsSearchResponse["photos"][number];

interface PexelsSearchResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
      photographer: string;
      photographer_url: string;
      photographer_id: number;
      avg_color: number;
      src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
      };
      liked: boolean;
      alt: string;
    }
  ];
  next_page: string;
}
