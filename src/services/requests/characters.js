import api from "../api";

export async function getCharacters() {
  const response = await api.get('/characters');

  return {
    response: response,
    results: response.data.data.results
  }
}

export async function getCharactersByNameStart(query) {
  const response = await api.get('/characters', {
    params: {
      nameStartsWith: query
    }
  });

  return response;
}
