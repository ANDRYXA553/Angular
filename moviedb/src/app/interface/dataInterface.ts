import {MovieItemInterface} from "./movieItemInterface";

export interface DataInterface {
  dates: object
  page: number
  results: [MovieItemInterface]
  total_pages: number
  total_results: number
}
