import { motion } from 'framer-motion';

const containerVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: { y: 0, opacity: 1 }
};


const About = () => {
    const metrics = ["1000+ Proyectos Completados", "123+ Expertos Limpiadores", "400+ Clientes Recurrentes"];

    return (
        <section id="about" className="py-20">
            <motion.div 
                className="container mx-auto px-6"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center lg:px-24">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-text mb-4">Quiénes Somos</h2>
                        <p className="text-text-muted mb-6">
                            Con más de una década de experiencia, Limpiaval se ha consolidado como líder en soluciones de limpieza. Nuestra misión es crear ambientes frescos y saludables para nuestros clientes, con un servicio confiable y de máxima calidad.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {metrics.map((metric, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-muted text-primary font-semibold px-4 py-2 rounded-lg"
                                    variants={itemVariants}
                                >
                                    {metric}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                         <img src="https://placehold.co/500x550/5AB8FF/FFFFFF?text=Equipo\nLimpiaval" alt="Equipo de limpieza trabajando" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
