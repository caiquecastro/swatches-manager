import ky from "ky";

const client = ky.create({
  prefixUrl: process.env.VUE_APP_API_URL
});

export default class Api {
  static findAll() {
    return client.get("swatches").json();
  }

  static findOne(id) {
    return client.get(`swatches/${id}`).json();
  }

  static async create(attributes) {
    try {
      await client.post("swatches", { json: attributes });
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      const errorResponse = await err.response.json();

      if (errorResponse.message) {
        throw new Error(errorResponse.message.join(", "));
      }

      throw err;
    }
  }
}
