import { subscribe } from "./api-services/your-energy-api";

subscribe("edfewdf5ff2f@efsfcsefe.rfg")
  .then((res) => console.log(res.message))
  .catch((err) => console.log(err?.message));
