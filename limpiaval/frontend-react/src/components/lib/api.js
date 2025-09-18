const API_URL = 'http://localhost:3000/api'; // La URL de tu futuro backend

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};

export const getPlans = async () => {
    const response = await fetch(`${API_URL}/plans`);
    return handleResponse(response);
};

export const getServices = async () => {
    const response = await fetch(`${API_URL}/services`);
    return handleResponse(response);
};

// ... aquí irían las demás funciones para gallery, testimonials, etc.

export const submitContactForm = async (data) => {
    const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return handleResponse(response);
};

export const submitQuoteForm = async (data) => {
    const response = await fetch(`${API_URL}/quote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return handleResponse(response);
};