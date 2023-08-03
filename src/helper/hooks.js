import axios from "axios";

export async function fetchAPI(url, method, requestData) {
  try {
    const { data } = await axios({
      method: method || "get",
      baseURL: import.meta.env.VITE_MY_ENDPOINT,
      url: url,
      data: requestData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data) {
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
