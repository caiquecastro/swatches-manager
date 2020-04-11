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

  static async save(payload) {
    const { id, ...attributes } = payload;

    const url = id ? `swatches/${id}` : "swatches";
    const method = id ? "put" : "post";

    try {
      await client[method](url, { json: attributes });
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      const errorResponse = await err.response.json();

      if (Array.isArray(errorResponse.message)) {
        throw new Error(errorResponse.message.join(", "));
      }

      throw err;
    }
  }

  static toggleStatus(swatch) {
    const json = {
      ...swatch,
      active: !swatch.active
    };

    return client.put(`swatches/${swatch.id}`, { json });
  }
}
