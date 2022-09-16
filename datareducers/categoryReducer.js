function categoryReducer({ attributes, id }) {
  return {
    name: attributes.name,
    parent: attributes.parent?.data[0].attributes.name,
  };
}
export default categoryReducer;
