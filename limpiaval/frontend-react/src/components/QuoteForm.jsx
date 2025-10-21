import { useState } from 'react';
import styles from './QuoteForm.module.css';
import { submitQuote } from './lib/api.js'; 

const QuoteForm = ({ serviceName, isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Enviamos los datos del formulario junto con el nombre del servicio
      await submitQuote({ ...formData, serviceName });
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        
        {status === 'success' ? (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-green-500 mb-4">¡Gracias!</h2>
            <p>Hemos recibido tu solicitud. Nos pondremos en contacto contigo a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-text mb-2">Cotizar Servicio</h2>
            <p className="text-text-muted mb-6">Estás cotizando: <span className="font-bold text-primary">{serviceName}</span></p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted">Nombre Completo</label>
                <input type="text" name="name" id="name" required className={styles.input} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted">Correo Electrónico</label>
                <input type="email" name="email" id="email" required className={styles.input} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-muted">Teléfono (Opcional)</label>
                <input type="tel" name="phone" id="phone" className={styles.input} onChange={handleChange} />
              </div>
            </div>
            
            <button type="submit" disabled={status === 'sending'} className={styles.submitButton}>
              {status === 'sending' ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
            {status === 'error' && <p className="text-red-500 text-sm mt-4 text-center">Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
