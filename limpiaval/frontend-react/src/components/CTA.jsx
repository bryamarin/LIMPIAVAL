import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="contact" className="py-16 bg-primary">
            <motion.div 
                className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7 }}
            >
                <div>
                    <h2 className="text-3xl font-bold">Llama para una Cotización Gratuita</h2>
                    <p className="text-4xl font-extrabold mt-2 tracking-wider">(+34) 123 456 789</p>
                </div>
                <a href="tel:+34123456789" className="mt-6 md:mt-0 bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-300 transform hover:-translate-y-1 shadow-lg">
                    Llamar Ahora
                </a>
            </motion.div>
        </section>
    );
};

export default CTA;
