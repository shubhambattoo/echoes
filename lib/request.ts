export async function request<T>(
  endpoint,
  { body, ...customConfig }: any = {}
): Promise<T> {
  const token = window.localStorage.getItem('authToken');
  const headers: { Authorization?: string; 'content-type': string } = {
    'content-type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config: any = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await window.fetch(`http://localhost:3000/${endpoint}`, config);
  if (response.status === 401) {
    window.localStorage.removeItem('authToken');
    return;
  }
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}
