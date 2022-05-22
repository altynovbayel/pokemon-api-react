
import { Api } from "./Api"

export const GetData = url => {
  return Api.get(url).then(res => res.json())
}
