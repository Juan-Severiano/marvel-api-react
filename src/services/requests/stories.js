import api from "../api";

export async function getStories() {
  try {
    const response = await api.get('/stories');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter stories:', error);
    return {
      error: 'Erro ao obter stories',
    };
  }
}

export async function getStoriesByTitleStart(query) {
  const response = await api.get('/stories', {
    params: {
      titleStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}

