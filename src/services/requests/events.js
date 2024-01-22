import api from "../api";

export async function getEvents() {
  try {
    const response = await api.get('/events');
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter events:', error);
    return {
      error: 'Erro ao obter events',
    };
  }
}

export async function getEventById(id) {
  try {
    const response = await api.get(`/events/${id}`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter events:', error);
    return {
      error: 'Erro ao obter events',
    };
  }
}

export async function getEventCharacters(id) {
  try {
    const response = await api.get(`/events/${id}/characters`,);
    return {
      response: response,
      results: response.data.data.results,
    };
  } catch (error) {
    console.error('Erro ao obter events:', error);
    return {
      error: 'Erro ao obter events',
    };
  }
}

export async function getEventsByNameStart(query) {
  const response = await api.get('/events', {
    params: {
      nameStartsWith: query
    }
  });

  return {
    response: response,
    results: response.data.data.results,
  };
}

