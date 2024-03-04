import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: `https://api.rawg.io/api/`,
  params: {
    key: `a4fc9199dbee47668dec346bb10a4e72`,
  },
});
