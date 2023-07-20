import { create } from "apisauce";

const client = create({
  baseURL: "http://10.0.0.42:9000/api",
});

export default client;
