const basicURL = "https://api.potterdb.com";

export const getCharacters = (page: number) => {
  const result = fetch(`${basicURL}/v1/characters?page[number]=${page}`).then(
    (res) => res.json()
  );
  console.log(result);
  return result;
};
