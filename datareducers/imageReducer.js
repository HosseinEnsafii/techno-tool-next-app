const strapiApiUrl = process.env.STRAPI_API_BASE_URL?.replace("/api", "");

const imageReducer = (imgField, generateThumb = false) => {
  const fields = imgField.data.attributes;
  const thumbnail = fields.formats.thumbnail;
  return {
    width: fields.width,
    height: fields.height,
    url: `${strapiApiUrl}${fields.url}`,
    contentType: fields.mime,
    thumbnail: generateThumb
      ? {
          width: thumbnail.width,
          contentType: thumbnail.mime,
          height: thumbnail.height,
          url: `${strapiApiUrl}${thumbnail.url}`,
        }
      : null,
  };
};
export default imageReducer;
