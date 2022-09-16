const strapiApiUrl = process.env.STRAPI_API_BASE_URL?.replace("/api", "");

const imageReducer = ({ attributes, id }, generateThumb = false) => {
  return {
    width: attributes.width,
    height: attributes.height,
    url: `${strapiApiUrl}${attributes.url}`,
    contentType: attributes.mime,
    thumbnail: generateThumb
      ? {
          width: attributes.formats.thumbnail.width,
          contentType: attributes.formats.thumbnail.mime,
          height: attributes.formats.thumbnail.height,
          url: `${strapiApiUrl}${attributes.formats.thumbnail.url}`,
        }
      : null,
    id,
  };
};
export default imageReducer;
