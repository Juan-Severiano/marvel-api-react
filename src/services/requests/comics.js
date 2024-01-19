import api from "../api";

export async function getComics() {
  try {
    const response = await api.get('/comics');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quedrinhos',
    };
  }
}

export async function getComicsByTitleStart(query) {
  const response = await api.get('/comics', {
    params: {
      titleStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}

