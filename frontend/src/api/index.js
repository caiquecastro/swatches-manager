import ky from "ky";

export default ky.create({
  prefixUrl: process.env.VUE_APP_API_URL
});
