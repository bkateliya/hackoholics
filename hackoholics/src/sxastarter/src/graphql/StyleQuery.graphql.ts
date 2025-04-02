export const StyleQuery = `query($itemId: String!, $language: String!) {
  item(path: $itemId, language: )){
    field(name:"style"){
      value
    }
  }
}`;
