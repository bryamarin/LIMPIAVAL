import { motion } from 'framer-motion';

const checklistItems = [
    "Personal de confianza y verificado.",
    "Productos ecológicos y seguros.",
    "Horarios flexibles adaptados a ti.",
    "Garantía de satisfacción 100%.",
    "Precios transparentes sin sorpresas."
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center lg:px-24">
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="https://placehold.co/500x550/FFA54C/FFFFFF?text=Calidad\nGarantizada" alt="Persona limpiando una ventana con una sonrisa" className="rounded-2xl shadow-lg w-full h-full object-cover"/>
                        <motion.div 
                            className="absolute bottom-8 -left-6 bg-white text-black text-lg font-bold px-6 py-4 rounded-lg shadow-xl"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                        >
                            4+ Años de Experiencia
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-black mb-4">¿Por Qué Elegirnos?</h2>
                        <p className="text-black mb-6">Nuestro compromiso es tu satisfacción total. Ofrecemos un servicio que va más allá de la limpieza.</p>
                        <ul className="space-y-4">
                            {checklistItems.map((item, index) => (
                                <li key={index} className="flex items-start text-black">
                                    <span className="bg-sky/20 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
