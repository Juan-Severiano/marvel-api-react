import api from "../api";

export async function getCreators() {
  try {
    const response = await api.get('/creators');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter creators:', error);
    return {
      error: 'Erro ao obter creators',
    };
  }
}

export async function getCreatorsByNameStart(query) {
  const response = await api.get('/creators', {
    params: {
      nameStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}

