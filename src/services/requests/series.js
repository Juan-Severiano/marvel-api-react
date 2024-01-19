import api from "../api";

export async function getSeries() {
  try {
    const response = await api.get('/series');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter series:', error);
    return {
      error: 'Erro ao obter series',
    };
  }
}

export async function getSeriesByTitleStart(query) {
  const response = await api.get('/series', {
    params: {
      titleStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}

