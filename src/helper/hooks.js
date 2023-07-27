import axios from "axios";

export async function fetchAPI(url, method, requestData) {
  try {
    const { data } = await axios({
      method: method || "get",
      baseURL: "http://localhost:1337/api",
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
