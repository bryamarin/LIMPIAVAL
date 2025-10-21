const API_URL = "http://localhost:3000/api";

export const getPlans = async () => {
  const response = await fetch(`${API_URL}/plans`);
  if (!response.ok) throw new Error("Failed to fetch plans");
  return response.json();
};

export const getServices = async () => {
  const response = await fetch(`${API_URL}/services`);
  if (!response.ok) throw new Error("Failed to fetch services");
  return response.json();
};

// --- FUNCIÓN NUEVA AÑADIDA AQUÍ ---
export const submitQuote = async (data) => {
  const response = await fetch(`${API_URL}/quote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

