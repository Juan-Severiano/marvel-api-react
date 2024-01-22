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

export async function getComicById(id) {
  try {
    const response = await api.get(`/comics/${id}`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quadrinhos',
    };
  }
}

export async function getComicCharacters(id) {
  try {
    const response = await api.get(`/comics/${id}/characters`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quadrinhos',
    };
  }
}

export async function getComicStories(id) {
  try {
    const response = await api.get(`/comics/${id}/stories`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quadrinhos',
    };
  }
}

export async function getComicEvents(id) {
  try {
    const response = await api.get(`/comics/${id}/events`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quadrinhos',
    };
  }
}

export async function getComicCreators(id) {
  try {
    const response = await api.get(`/comics/${id}/creators`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter quadrinhos:', error);
    return {
      error: 'Erro ao obter quadrinhos',
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

