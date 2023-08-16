import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID G8mv6CQVRE3Pg263mAoXnlXAa_lbVqE71Eo4rhPql4E",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
