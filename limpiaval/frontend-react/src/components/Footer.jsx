const DropIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path></svg>
);

const Footer = () => {
    return (
        <footer className="bg-footer-navy text-gray-300 pt-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Col 1: Logo & Desc */}
                    <div>
                        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                            <DropIcon />
                            <span>Limpiaval</span>
                        </a>
                        <p className="mb-4">Creando espacios más limpios y saludables para ti y tu familia.</p>
                        {/* Social Icons could go here */}
                    </div>

                    {/* Col 2: Services */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home Cleaning</a></li>
                            <li><a href="#" className="hover:text-white">Office Cleaning</a></li>
                            <li><a href="#" className="hover:text-white">Kitchen Cleaning</a></li>
                            <li><a href="#" className="hover:text-white">Window Cleaning</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <ul className="space-y-2">
                            <li><span className="font-semibold text-white">Email:</span> contacto@limpiaval.com</li>
                            <li><span className="font-semibold text-white">Tel:</span> (+34) 123 456 789</li>
                            <li><span className="font-semibold text-white">Horario:</span> Lun-Vie: 9am - 6pm</li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Newsletter</h4>
                        <p className="mb-4">Recibe ofertas y consejos de limpieza.</p>
                        <form className="flex">
                            <input type="email" placeholder="Tu email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-full" />
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-600">➔</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 py-6 border-t border-gray-700 text-center text-sm">
                    <p>&copy; 2024 Limpiaval. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
