const BaseUrl = "https://pokeapi.co/api/v2/pokemon";
export async function All() {
  const response = await fetch(BaseUrl);

  return response.json();
}
