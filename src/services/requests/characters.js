import api from "../api";

export async function getCharacters() {
  try {
    const response = await api.get('/characters');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersById(id) {
  try {
    const response = await api.get(`/characters/${id}`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersComics(id) {
  try {
    const response = await api.get(`/characters/${id}/comics`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersSeries(id) {
  try {
    const response = await api.get(`/characters/${id}/series`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersEvents(id) {
  try {
    const response = await api.get(`/characters/${id}/events`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersStories(id) {
  try {
    const response = await api.get(`/characters/${id}/stories`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    return {
      error: 'Erro ao obter personagens',
    };
  }
}

export async function getCharactersByNameStart(query) {
  const response = await api.get('/characters', {
    params: {
      nameStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}
