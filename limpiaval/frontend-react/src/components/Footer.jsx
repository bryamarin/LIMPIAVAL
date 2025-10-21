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
                            <li><span className="font-semibold text-white">Tel:</span> (+34) 603 80 67 14</li>
                            <li><span className="font-semibold text-white">Horario:</span> Lun-sab: 9am - 6pm</li>
                        </ul>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Síguenos en Facebook"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/limpiavlc/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Síguenos en Instagram"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.445.01 10.173 0 8 0m0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.28-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.232s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047M8 3.882a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 6.774a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334m3.458-6.837a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Newsletter</h4>
                        <p className="mb-4">Recibe ofertas y consejos de limpieza.</p>
                        <form className="flex">
                            <input type="email" placeholder="Tu email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-full" />
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-600">➔</button>
                        </form>
                        <div id="wpforms-363-field_1-container" class="wpforms-field wpforms-field-gdpr-checkbox" data-field-id="1">
                            <label class="wpforms-field-label">Acepto la Política de Privacidad <span class="wpforms-required-label">*</span></label>
                            <ul id="wpforms-363-field_1" class="wpforms-field-required">
                                <li class="choice-1">
                                    <input type="checkbox" id="wpforms-363-field_1_1" name="wpforms[fields][1][]" required="" />
                                    <label class="wpforms-field-label-inline" for="wpforms-363-field_1_1"></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 py-6 border-t border-gray-700 text-center text-sm">
                    <p>&copy; 2025 Limpiavlc. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
