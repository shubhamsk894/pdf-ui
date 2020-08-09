import axios from "axios";
export const SearchData = async (query) => {
  return await axios.get("http://http://lonewolf56.pythonanywhere.com/home", {
    params: {
      bookname: query,
      limit: 20
    }
  });
};
