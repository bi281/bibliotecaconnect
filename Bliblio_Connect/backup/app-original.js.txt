
        /* ==========================================
           DATABASE & INITIAL STATE MOCK (localStorage)
           ========================================== */
        
        const DEFAULT_USERS = [
            { id: 'usr-1', name: 'Dr. Carlos Alberto', cpf: '111.111.111-11', email: 'professor@biblioconnect.edu.br', phone: '(87) 98888-1111', profile: 'Professor', course: 'Engenharia / BiblioConnect', pass: 'prof123', status: 'Ativo' },
            { id: 'usr-2', name: 'Ana Beatriz Souza', cpf: '222.222.222-22', email: 'aluno@biblioconnect.edu.br', phone: '(87) 98888-2222', profile: 'Aluno', course: 'Direito / BiblioConnect', pass: 'aluno123', status: 'Ativo' },
            { id: 'usr-3', name: 'Marcos Vinicius Lima', cpf: '333.333.333-33', email: 'publico@biblioconnect.edu.br', phone: '(87) 98888-3333', profile: 'Público Geral', course: 'Comunidade Externa', pass: 'pub123', status: 'Ativo' },
            { id: 'usr-4', name: 'Bibliotecária Chefe (Admin)', cpf: '000.000.000-00', email: 'admin@biblioconnect.edu.br', phone: '(87) 98888-0000', profile: 'Bibliotecário/Administrador', course: 'Biblioteca Central', pass: 'admin123', status: 'Ativo' }
        ];

        const DEFAULT_UNITS = [
            { id: 'uni-1', name: 'Biblioteca Central', location: 'Campus Principal - Bloco A', phone: '(87) 3761-0000' },
            { id: 'uni-2', name: 'Biblioteca Setorial de Saúde', location: 'Campus da Saúde - Bloco S', phone: '(87) 3761-0001' },
            { id: 'uni-3', name: 'Biblioteca Tecnológica', location: 'Campus Inovação - Lab 3', phone: '(87) 3761-0002' }
        ];

        const DEFAULT_CATEGORIES = [
            'Engenharia e Tecnologia', 'Direito e Legislação', 'Ciências da Saúde', 
            'Administração e Negócios', 'Literatura Brasileira', 'Educação e Pedagogia'
        ];

        const DEFAULT_BOOKS = [
            {
                id: 'book-1',
                title: 'Engenharia de Software Moderna',
                author: 'Marco Tulio Valente',
                publisher: 'Bookman',
                isbn: '978-85-8260-549-3',
                year: 2020,
                category: 'Engenharia e Tecnologia',
                synopsis: 'Abordagem moderna sobre engenharia de software, cobrindo microsserviços, testes, refatoração e arquiteturas escaláveis.',
                cover: 'https://placehold.co/300x450/1e3a8a/ffffff?text=Engenharia+de+Software'
            },
            {
                id: 'book-2',
                title: 'Curso de Direito Constitucional',
                author: 'Gilmar Mendes & Paulo Gonet',
                publisher: 'Saraiva Jur',
                isbn: '978-65-5362-123-0',
                year: 2023,
                category: 'Direito e Legislação',
                synopsis: 'Obra consagrada de direito constitucional brasileiro, análise jurisprudencial do STF e direitos fundamentais.',
                cover: 'https://placehold.co/300x450/0284c7/ffffff?text=Direito+Constitucional'
            },
            {
                id: 'book-3',
                title: 'Guyton e Hall: Tratado de Fisiologia Médica',
                author: 'John E. Hall',
                publisher: 'Elsevier',
                isbn: '978-85-352-8448-5',
                year: 2021,
                category: 'Ciências da Saúde',
                synopsis: 'O tratado de fisiologia médica mais vendido no mundo, essencial para estudantes de medicina e saúde.',
                cover: 'https://placehold.co/300x450/0f172a/ffffff?text=Fisiologia+Medica'
            },
            {
                id: 'book-4',
                title: 'Gestão de Marketing: Análise, Planejamento e Controle',
                author: 'Philip Kotler & Kevin Keller',
                publisher: 'Pearson',
                isbn: '978-85-430-0123-5',
                year: 2019,
                category: 'Administração e Negócios',
                synopsis: 'A Bíblia do marketing moderno, estratégias globais, branding, comportamento do consumidor e marketing digital.',
                cover: 'https://placehold.co/300x450/f59e0b/ffffff?text=Gestao+de+Marketing'
            },
            {
                id: 'book-5',
                title: 'Dom Casmurro',
                author: 'Machado de Assis',
                publisher: 'Penguin Companhia',
                isbn: '978-85-359-1484-9',
                year: 1899,
                category: 'Literatura Brasileira',
                synopsis: 'O clássico sobre a dúvida de Bentinho em relação a Capitu e os olhos de ressaca.',
                cover: 'https://placehold.co/300x450/475569/ffffff?text=Dom+Casmurro'
            }
        ];

        const DEFAULT_COPIES = [
            { id: 'cop-101', bookId: 'book-1', unitId: 'uni-3', location: 'Estante E1-Prateleira 2', status: 'Disponível' },
            { id: 'cop-102', bookId: 'book-1', unitId: 'uni-1', location: 'Estante E2-Prateleira 1', status: 'Emprestado' },
            { id: 'cop-201', bookId: 'book-2', unitId: 'uni-1', location: 'Estante D1-Prateleira 4', status: 'Disponível' },
            { id: 'cop-202', bookId: 'book-2', unitId: 'uni-2', location: 'Estante D2-Prateleira 1', status: 'Disponível' },
            { id: 'cop-301', bookId: 'book-3', unitId: 'uni-2', location: 'Estante S1-Prateleira 3', status: 'Emprestado' },
            { id: 'cop-401', bookId: 'book-4', unitId: 'uni-1', location: 'Estante A1-Prateleira 2', status: 'Disponível' },
            { id: 'cop-501', bookId: 'book-5', unitId: 'uni-1', location: 'Estante L1-Prateleira 5', status: 'Manutenção' }
        ];

        // Active Loans Mock (Associated with user Ana Beatriz)
        const DEFAULT_LOANS = [
            {
                id: 'loan-1',
                userId: 'usr-2', // Ana Beatriz
                copyId: 'cop-102',
                bookId: 'book-1',
                unitId: 'uni-1',
                loanDate: '2026-03-20T10:00:00',
                dueDate: '2026-03-27T23:59:59',
                returnDate: null,
                status: 'Ativo',
                renewCount: 0,
                operator: 'Bibliotecária Chefe'
            },
            {
                id: 'loan-2',
                userId: 'usr-1', // Prof Carlos
                copyId: 'cop-301',
                bookId: 'book-3',
                unitId: 'uni-2',
                loanDate: '2026-03-10T14:30:00',
                dueDate: '2026-03-25T23:59:59',
                returnDate: null,
                status: 'Atrasado',
                renewCount: 0,
                operator: 'Bibliotecária Chefe'
            }
        ];

        const DEFAULT_RESERVAS = [
            {
                id: 'res-1',
                bookId: 'book-3',
                userId: 'usr-2',
                requestDate: '2026-03-22T16:00:00',
                position: 1,
                status: 'Ativa'
            }
        ];

        const DEFAULT_FINES = [
            {
                id: 'fine-1',
                userId: 'usr-1',
                loanId: 'loan-2',
                amount: 15.00,
                daysLate: 3,
                status: 'Pendente',
                description: 'Atraso na devolução do exemplar cop-301'
            }
        ];

        const DEFAULT_PARAMETERS = {
            alunoMaxLoans: 3,
            alunoDays: 7,
            professorMaxLoans: 5,
            professorDays: 15,
            publicMaxLoans: 3,
            publicDays: 7,
            finePerDay: 5.00
        };

        /* Initialization of localStorage */
        function initStorage() {
            if (!localStorage.getItem('biblio_users')) localStorage.setItem('biblio_users', JSON.stringify(DEFAULT_USERS));
            if (!localStorage.getItem('biblio_units')) localStorage.setItem('biblio_units', JSON.stringify(DEFAULT_UNITS));
            if (!localStorage.getItem('biblio_categories')) localStorage.setItem('biblio_categories', JSON.stringify(DEFAULT_CATEGORIES));
            if (!localStorage.getItem('biblio_books')) localStorage.setItem('biblio_books', JSON.stringify(DEFAULT_BOOKS));
            if (!localStorage.getItem('biblio_copies')) localStorage.setItem('biblio_copies', JSON.stringify(DEFAULT_COPIES));
            if (!localStorage.getItem('biblio_loans')) localStorage.setItem('biblio_loans', JSON.stringify(DEFAULT_LOANS));
            if (!localStorage.getItem('biblio_reservas')) localStorage.setItem('biblio_reservas', JSON.stringify(DEFAULT_RESERVAS));
            if (!localStorage.getItem('biblio_fines')) localStorage.setItem('biblio_fines', JSON.stringify(DEFAULT_FINES));
            if (!localStorage.getItem('biblio_parameters')) localStorage.setItem('biblio_parameters', JSON.stringify(DEFAULT_PARAMETERS));
            if (!localStorage.getItem('biblio_currentUser')) localStorage.setItem('biblio_currentUser', JSON.stringify(null));
        }

        initStorage();

        /* BiblioConnect: obras digitais de exemplo. Os PDFs devem ficar em acervo/pdf/.
           Inclua apenas arquivos cuja disponibilização você tenha autorização para realizar. */
        const BIBLIOCONNECT_DIGITAL_BOOKS = [
            { id:'edu-digital-helena', title:'Helena', author:'Machado de Assis', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1876, category:'Literatura Brasileira', synopsis:'Romance de Machado de Assis. Confira os dados editoriais da edição utilizada antes da publicação.', cover:'assets/capas/helena.jpg', pdfUrl:'acervo/pdf/Helena.pdf', digitalAvailable:true },
            { id:'edu-digital-iracema', title:'Iracema — Lenda do Ceará', author:'José de Alencar', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1865, category:'Literatura Brasileira', synopsis:'Romance indianista de José de Alencar. Confira os dados editoriais e as condições de uso desta edição.', cover:'assets/capas/iracema.jpg', pdfUrl:'acervo/pdf/Iracema.pdf', digitalAvailable:true },
            { id:'edu-digital-memorias', title:'Memórias Póstumas de Brás Cubas', author:'Machado de Assis', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1881, category:'Literatura Brasileira', synopsis:'Romance de Machado de Assis. Os dados da edição podem ser completados pelo bibliotecário.', cover:'assets/capas/memorias-postumas.jpg', pdfUrl:'acervo/pdf/Memorias Postumas de Bras Cubas.pdf', digitalAvailable:true },
            { id:'edu-digital-alienista', title:'O Alienista', author:'Machado de Assis', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1882, category:'Literatura Brasileira', synopsis:'Novela de Machado de Assis. Confirme a licença da edição específica antes de liberar o PDF.', cover:'assets/capas/o-alienista.jpg', pdfUrl:'acervo/pdf/O Alienista.pdf', digitalAvailable:true },
            { id:'edu-digital-cortico', title:'O Cortiço', author:'Aluísio Azevedo', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1890, category:'Literatura Brasileira', synopsis:'Romance naturalista de Aluísio Azevedo. Confirme as condições de distribuição do arquivo utilizado.', cover:'assets/capas/o-cortico.jpg', pdfUrl:'acervo/pdf/O cortiço.pdf', digitalAvailable:true },
            { id:'edu-digital-quincas', title:'Quincas Borba', author:'Machado de Assis', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1891, category:'Literatura Brasileira', synopsis:'Romance de Machado de Assis. Confira os dados e direitos da edição selecionada.', cover:'assets/capas/quincas-borba.jpg', pdfUrl:'acervo/pdf/Quincas Borba.pdf', digitalAvailable:true },
            { id:'edu-digital-senhora', title:'Senhora', author:'José de Alencar', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1875, category:'Literatura Brasileira', synopsis:'Romance de José de Alencar. Confirme a autorização para disponibilizar esta edição em PDF.', cover:'assets/capas/senhora.jpg', pdfUrl:'acervo/pdf/Senhora.pdf', digitalAvailable:true },
            { id:'edu-digital-perfeicao', title:'A Perfeição', author:'Eça de Queirós', publisher:'Edição conforme arquivo fornecido', isbn:'', year:1897, category:'Literatura Portuguesa', synopsis:'Conto de Eça de Queirós. Complete os dados editoriais conforme o arquivo utilizado.', cover:'assets/capas/a-perfeicao.jpg', pdfUrl:'acervo/pdf/A Perfeição.pdf', digitalAvailable:true }
        ];

        function ensureBiblioConnectDigitalBooks() {
            const existing = getBooks();
            let changed = false;
            BIBLIOCONNECT_DIGITAL_BOOKS.forEach(seed => {
                const current = existing.find(book => book.id === seed.id);
                if (!current) { existing.push({...seed}); changed = true; }
                else if (current.cover !== seed.cover || current.pdfUrl !== seed.pdfUrl || current.digitalAvailable !== seed.digitalAvailable) {
                    current.cover = seed.cover; current.pdfUrl = seed.pdfUrl; current.digitalAvailable = seed.digitalAvailable; changed = true;
                }
                else if (!current.pdfUrl) { current.pdfUrl = seed.pdfUrl; current.digitalAvailable = true; changed = true; }
            });
            if (changed) saveBooks(existing);
            const cats = getCategories();
            if (!cats.includes('Literatura Portuguesa')) { cats.push('Literatura Portuguesa'); saveCategories(cats); }
        }
        ensureBiblioConnectDigitalBooks();

        // Helper getters
        function getUsers() { return JSON.parse(localStorage.getItem('biblio_users')); }
        function saveUsers(data) { localStorage.setItem('biblio_users', JSON.stringify(data)); }
        function getUnits() { return JSON.parse(localStorage.getItem('biblio_units')); }
        function saveUnits(data) { localStorage.setItem('biblio_units', JSON.stringify(data)); }
        function getCategories() { return JSON.parse(localStorage.getItem('biblio_categories')); }
        function saveCategories(data) { localStorage.setItem('biblio_categories', JSON.stringify(data)); }
        function getBooks() { return JSON.parse(localStorage.getItem('biblio_books')); }
        function saveBooks(data) { localStorage.setItem('biblio_books', JSON.stringify(data)); }
        function getCopies() { return JSON.parse(localStorage.getItem('biblio_copies')); }
        function saveCopies(data) { localStorage.setItem('biblio_copies', JSON.stringify(data)); }
        function getLoans() { return JSON.parse(localStorage.getItem('biblio_loans')); }
        function saveLoans(data) { localStorage.setItem('biblio_loans', JSON.stringify(data)); }
        function getReservas() { return JSON.parse(localStorage.getItem('biblio_reservas')); }
        function saveReservas(data) { localStorage.setItem('biblio_reservas', JSON.stringify(data)); }
        function getFines() { return JSON.parse(localStorage.getItem('biblio_fines')); }
        function saveFines(data) { localStorage.setItem('biblio_fines', JSON.stringify(data)); }
        function getParameters() { return JSON.parse(localStorage.getItem('biblio_parameters')); }
        function saveParameters(data) { localStorage.setItem('biblio_parameters', JSON.stringify(data)); }
        function getCurrentUser() { return JSON.parse(localStorage.getItem('biblio_currentUser')); }
        function setCurrentUser(user) { localStorage.setItem('biblio_currentUser', JSON.stringify(user)); updateNavAuth(); }

        /* ==========================================
           ROUTER & NAVIGATION CONTROLLER
           ========================================== */
        const router = {
            currentRoute: 'home',
            param: null,
            history: [],
            navigate(route, param = null) {
                if (this.currentRoute !== route || this.param !== param) this.history.push({ route: this.currentRoute, param: this.param });
                this.currentRoute = route;
                this.param = param;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.render();
            },
            back() {
                const previous = this.history.pop();
                if (previous) { this.currentRoute = previous.route; this.param = previous.param; this.render(); window.scrollTo({top:0,behavior:'smooth'}); }
                else this.navigate('home');
            },
            render() {
                const container = document.getElementById('app-content');
                container.innerHTML = '';
                const back = document.getElementById('global-back-control');
                if (back) back.hidden = this.currentRoute === 'home';
                
                switch(this.currentRoute) {
                    case 'home':
                        container.innerHTML = renderHomeView();
                        break;
                    case 'catalog':
                        container.innerHTML = renderCatalogView();
                        initCatalogEvents();
                        break;
                    case 'book-detail':
                        recordBiblioBookView(this.param);
                        container.innerHTML = renderBookDetailView(this.param);
                        break;
                    case 'reader':
                        container.innerHTML = renderDigitalReaderView(this.param);
                        break;
                    case 'contacts':
                        container.innerHTML = renderContactsView();
                        break;
                    case 'profile':
                        if (!getCurrentUser()) { this.navigate('home'); openLoginModal(); return; }
                        container.innerHTML = renderProfileView();
                        break;
                    case 'admin':
                        const user = getCurrentUser();
                        if (!user || user.profile !== 'Bibliotecário/Administrador') {
                            showToast('Acesso negado. Apenas administradores.', 'error');
                            this.navigate('home');
                            return;
                        }
                        container.innerHTML = renderAdminDashboard();
                        initAdminDashboardEvents();
                        break;
                    default:
                        container.innerHTML = renderHomeView();
                }
            }
        };

        /* ==========================================
           UI COMPONENTS & VIEWS
           ========================================== */

        // Toast Notification System
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            const bgClass = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-amber-600';
            const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info';
            
            toast.className = `${bgClass} text-white px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 text-sm font-medium pointer-events-auto fade-in transition duration-300`;
            toast.innerHTML = `<i class="fa-solid ${icon} text-lg"></i><span>${message}</span>`;
            
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-4px)';
                setTimeout(() => toast.remove(), 180);
            }, 1600);
        }

        // Update Header Auth Navbar
        function updateNavAuth() {
            const navAuth = document.getElementById('nav-auth-container');
            const mobileNavAuth = document.getElementById('mobile-nav-auth');
            const user = getCurrentUser();

            if (!user) {
                const html = `
                    <button onclick="openLoginModal()" class="text-white hover:text-biblio-accent text-sm font-semibold transition"><i class="fa-solid fa-right-to-bracket mr-1"></i> Entrar</button>
                    <button onclick="openRegisterModal()" class="bg-biblio-accent hover:bg-amber-600 text-biblio-dark font-semibold px-4 py-2 rounded-lg text-sm shadow transition">Cadastre-se</button>
                `;
                navAuth.innerHTML = html;
                mobileNavAuth.innerHTML = `
                    <button onclick="openLoginModal(); toggleMobileMenu();" class="w-full text-left py-2 px-3 rounded hover:bg-[#401322] text-white"><i class="fa-solid fa-right-to-bracket mr-2"></i> Entrar</button>
                    <button onclick="openRegisterModal(); toggleMobileMenu();" class="w-full text-left py-2 px-3 rounded bg-biblio-accent text-biblio-dark font-semibold mt-1"><i class="fa-solid fa-user-plus mr-2"></i> Cadastre-se</button>
                `;
            } else {
                const isAdmin = user.profile === 'Bibliotecário/Administrador';
                const initial = user.name.charAt(0).toUpperCase();
                const html = `
                    <div class="flex items-center space-x-3">
                        ${isAdmin ? `<button onclick="router.navigate('admin')" class="bg-amber-500 hover:bg-amber-600 text-biblio-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow"><i class="fa-solid fa-gauge mr-1"></i> Painel Admin</button>` : ''}
                        <div class="flex items-center space-x-2 cursor-pointer" onclick="router.navigate('profile')">
                            <div class="w-9 h-9 rounded-full bg-biblio-accent text-biblio-dark font-bold flex items-center justify-center shadow">${initial}</div>
                            <div class="hidden lg:block text-left">
                                <p class="text-xs font-bold text-white leading-tight">${user.name.split(' ')[0]}</p>
                                <p class="text-[10px] text-sky-200">${user.profile}</p>
                            </div>
                        </div>
                        <button onclick="handleLogout()" class="text-sky-200 hover:text-white p-2" title="Sair"><i class="fa-solid fa-right-from-bracket text-base"></i></button>
                    </div>
                `;
                navAuth.innerHTML = html;
                mobileNavAuth.innerHTML = `
                    <div class="py-2 px-3 text-white">
                        <p class="font-bold text-sm">${user.name}</p>
                        <p class="text-xs text-sky-200">${user.profile}</p>
                    </div>
                    ${isAdmin ? `<button onclick="router.navigate('admin'); toggleMobileMenu();" class="w-full text-left py-2 px-3 rounded bg-amber-500 text-biblio-dark font-bold mb-1"><i class="fa-solid fa-gauge mr-2"></i> Painel Admin</button>` : ''}
                    <button onclick="router.navigate('profile'); toggleMobileMenu();" class="w-full text-left py-2 px-3 rounded hover:bg-[#401322] text-white"><i class="fa-solid fa-user mr-2"></i> Meu Perfil & Empréstimos</button>
                    <button onclick="handleLogout(); toggleMobileMenu();" class="w-full text-left py-2 px-3 rounded text-rose-300 hover:bg-[#401322]"><i class="fa-solid fa-right-from-bracket mr-2"></i> Sair</button>
                `;
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // 1. Home View
        function getBiblioBookPopularity(book) {
            let views = {};
            try { views = JSON.parse(localStorage.getItem('biblio_book_views') || '{}'); } catch (_) { views = {}; }
            const loans = getLoans().filter(item => item.bookId === book.id).length;
            const reservations = getReservas().filter(item => item.bookId === book.id).length;
            const year = Number(book.year || 0);
            const recencyBonus = year >= 2020 ? 1 : 0;
            return (Number(views[book.id]) || 0) * 3 + loans * 5 + reservations * 2 + recencyBonus;
        }

        function recordBiblioBookView(bookId) {
            try {
                const views = JSON.parse(localStorage.getItem('biblio_book_views') || '{}');
                views[bookId] = (Number(views[bookId]) || 0) + 1;
                localStorage.setItem('biblio_book_views', JSON.stringify(views));
            } catch (_) { /* Ranking is an enhancement; book details must still work. */ }
        }

        function renderHomeView() {
            const books = getBooks();
            const copies = getCopies();
            const totalCopies = copies.length;
            const availableCopies = copies.filter(c => c.status === 'Disponível').length;
            const categories = getCategories();

            return `
                <div class="space-y-12 pb-12">
                    <!-- Hero Section -->
                    <div class="relative bg-gradient-to-r from-biblio-primary to-sky-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden">
                        <div class="absolute -right-10 -bottom-10 opacity-10 text-white text-9xl">
                            <i class="fa-solid fa-book-bookmark"></i>
                        </div>
                        <div class="relative z-10 max-w-2xl space-y-4">
                            <span class="bg-biblio-accent text-biblio-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Sua biblioteca, em um só lugar</span>
                            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Sistema Integrado de Gestão de Acervo e Empréstimos</h2>
                            <p class="text-sky-100 text-sm sm:text-base">Consulte o catálogo em tempo real, verifique disponibilidade por unidade física, faça reservas, gerencie renovações e acompanhe suas pendências com facilidade.</p>
                            
                            <!-- Search Bar on Hero -->
                            <div class="pt-2 flex flex-col sm:flex-row gap-2">
                                <div class="relative flex-grow">
                                    <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400"><i class="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" id="hero-search-input" placeholder="Pesquisar por título, autor, ISBN ou assunto..." class="w-full pl-10 pr-4 py-3 rounded-xl text-slate-800 text-sm focus:outline-none shadow-lg">
                                </div>
                                <button onclick="executeHeroSearch()" class="bg-biblio-accent hover:bg-amber-600 text-biblio-dark font-bold px-6 py-3 rounded-xl shadow-lg transition flex items-center justify-center space-x-2">
                                    <span>Buscar</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Statistics Bar -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div class="w-12 h-12 bg-blue-50 text-biblio-primary rounded-xl flex items-center justify-center text-xl font-bold">
                                <i class="fa-solid fa-book"></i>
                            </div>
                            <div>
                                <p class="text-2xl font-bold text-slate-900">${books.length}</p>
                                <p class="text-xs text-slate-500 font-medium">Obras Cadastradas</p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold">
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div>
                                <p class="text-2xl font-bold text-slate-900">${totalCopies}</p>
                                <p class="text-xs text-slate-500 font-medium">Exemplares Físicos</p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
                            <div class="w-12 h-12 bg-sky-50 text-biblio-secondary rounded-xl flex items-center justify-center text-xl font-bold">
                                <i class="fa-solid fa-check-circle"></i>
                            </div>
                            <div>
                                <p class="text-2xl font-bold text-slate-900">${availableCopies}</p>
                                <p class="text-xs text-slate-500 font-medium">Disponíveis p/ Empréstimo</p>
                            </div>
                        </div>
                        <button type="button" onclick="router.navigate('contacts')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4 text-left hover:shadow-md transition">
                            <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-xl font-bold">
                                <i class="fa-solid fa-building-columns"></i>
                            </div>
                            <div>
                                <p class="text-2xl font-bold text-slate-900">${getUnits().length}</p>
                                <p class="text-xs text-slate-500 font-medium">Unidades Atendidas · Ver unidades</p>
                            </div>
                        </button>
                    </div>

                    <!-- Categories Grid -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <h3 class="text-xl font-bold text-slate-900">Categorias em Destaque</h3>
                            <button onclick="router.navigate('catalog')" class="text-biblio-primary font-semibold text-sm hover:underline">Ver todas <i class="fa-solid fa-arrow-right ml-1"></i></button>
                        </div>
                        <div class="ec-category-strip flex flex-nowrap gap-3 overflow-x-auto pb-2">
                            ${categories.map(cat => `
                                <div onclick="router.navigate('catalog'); setTimeout(() => filterByCategory('${cat}'), 100);" class="ec-category-chip shrink-0 bg-white/75 backdrop-blur-md p-4 rounded-xl shadow-sm border border-slate-100 hover:border-biblio-primary cursor-pointer transition text-center group">
                                    <div class="w-10 h-10 mx-auto mb-2 bg-blue-50 text-biblio-primary rounded-lg flex items-center justify-center group-hover:bg-biblio-primary group-hover:text-white transition">
                                        <i class="fa-solid fa-bookmark"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-700 block">${cat}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Featured Books: ranking visual inspirado em listas de streaming -->
                    <section class="ec-ranking-section space-y-4">
                        <div class="flex items-center justify-between gap-3 flex-wrap">
                            <div>
                                <h3 class="text-xl font-bold text-slate-900">Obras recentes no acervo</h3>
                                <p class="text-sm text-slate-500">Top 5 do acervo em destaque</p>
                            </div>
                            <button onclick="router.navigate('catalog')" class="text-biblio-primary font-semibold text-sm hover:underline">Catálogo completo <i class="fa-solid fa-arrow-right ml-1"></i></button>
                        </div>
                        <div class="ec-ranking-row">
                            ${books.filter(book => book.cover && !/placehold\.co/i.test(book.cover)).sort((a, b) => getBiblioBookPopularity(b) - getBiblioBookPopularity(a)).slice(0,5).map((book, index) => {
                                const copiesOfBook = copies.filter(c => c.bookId === book.id);
                                const availableCount = copiesOfBook.filter(c => c.status === 'Disponível').length;
                                return `
                                    <button type="button" class="ec-ranking-item" onclick="router.navigate('book-detail', '${book.id}')" aria-label="Ver detalhes de ${book.title}">
                                        <span class="ec-rank-number">${index + 1}</span>
                                        <span class="ec-ranking-cover-wrap">
                                            <img src="${book.cover}" alt="Capa de ${book.title}" class="ec-ranking-cover" loading="lazy" onerror="this.closest('.ec-ranking-item').style.display='none'">
                                            <span class="ec-ranking-status ${availableCount > 0 ? 'is-available' : 'is-unavailable'}">${availableCount > 0 ? `${availableCount} disp.` : 'Indisponível'}</span>
                                        </span>
                                        <span class="ec-ranking-title">${book.title}</span>
                                        <span class="ec-ranking-author">${book.author}</span>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </section>
                </div>
            `;
        }

        function executeHeroSearch() {
            const query = document.getElementById('hero-search-input').value;
            router.navigate('catalog');
            setTimeout(() => {
                const searchInput = document.getElementById('catalog-search');
                if (searchInput) {
                    searchInput.value = query;
                    filterCatalog();
                }
            }, 100);
        }

        // 2. Catalog View
        function renderCatalogView() {
            const books = getBooks().filter(book => String(book.id || '').startsWith('edu-digital-') && book.cover && book.cover.startsWith('assets/capas/'));
            const categories = getCategories();
            const units = getUnits();

            return `
                <div class="space-y-6">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <div>
                            <h2 class="text-2xl font-bold text-slate-900">Catálogo do Acervo</h2>
                            <p class="text-xs text-slate-500">Explore obras, livros, periódicos e verifique a disponibilidade física em tempo real.</p>
                        </div>
                        <div class="flex flex-wrap items-center gap-3">
                            <div class="relative">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><i class="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" id="catalog-search" oninput="filterCatalog()" placeholder="Buscar por título, autor, ISBN..." class="pl-9 pr-4 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-biblio-primary focus:outline-none w-64">
                            </div>
                            <select id="catalog-category-filter" onchange="filterCatalog()" class="py-2 px-3 border border-slate-300 rounded-xl text-sm bg-white focus:ring-2 focus:ring-biblio-primary focus:outline-none">
                                <option value="">Todas as Categorias</option>
                                ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
                            </select>
                            <select id="catalog-unit-filter" onchange="filterCatalog()" class="py-2 px-3 border border-slate-300 rounded-xl text-sm bg-white focus:ring-2 focus:ring-biblio-primary focus:outline-none">
                                <option value="">Todas as Unidades</option>
                                ${units.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>

                    <!-- Catalog Grid -->
                    <div id="catalog-grid" class="flex flex-col gap-0 bg-white border border-slate-200 rounded-xl overflow-hidden">
                        ${renderCatalogCards(books)}
                    </div>
                </div>
            `;
        }

        function renderCatalogCards(books) {
            const copies = getCopies();
            if (books.length === 0) {
                return `
                    <div class="py-16 text-center bg-white">
                        <div class="text-slate-300 text-5xl mb-3"><i class="fa-solid fa-book-open"></i></div>
                        <h3 class="text-lg font-bold text-slate-700">Nenhuma obra encontrada</h3>
                        <p class="text-xs text-slate-500 mt-1">Tente ajustar seus termos de busca ou filtros.</p>
                    </div>
                `;
            }

            return books.map(book => {
                const bookCopies = copies.filter(c => c.bookId === book.id);
                const availableCount = bookCopies.filter(c => c.status === 'Disponível').length;
                const hasDigital = Boolean(book.digitalAvailable && book.pdfUrl);
                return `
                    <article class="flex items-center gap-3 sm:gap-4 p-3 sm:px-4 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition cursor-pointer" onclick="router.navigate('book-detail', '${book.id}')">
                        <img src="${book.cover}" alt="Capa completa de ${book.title}" loading="lazy" class="w-12 h-[72px] sm:w-14 sm:h-[84px] flex-shrink-0 object-contain bg-amber-50 rounded-md border border-slate-200 shadow-sm" onerror="this.closest('article').remove()">
                        <div class="min-w-0 flex-1 py-1">
                            <h4 class="font-bold text-sm text-slate-900 leading-snug">${book.title}</h4>
                            <p class="text-xs text-slate-600 mt-0.5">${book.author || 'Autor não informado'}</p>
                            <p class="text-[11px] text-slate-500 mt-1">${book.publisher || book.category || 'Acervo BiblioConnect'}${book.year ? ` · ${book.year}` : ''}</p>
                            <p class="text-[11px] text-slate-500 mt-1">${hasDigital ? 'Empréstimo digital disponível' : 'Consulte os exemplares físicos'}${book.isbn ? ` · ISBN: ${book.isbn}` : ''}</p>
                        </div>
                        <div class="hidden sm:flex flex-col items-end gap-1 flex-shrink-0 text-right">
                            <span class="text-[10px] font-semibold px-2 py-1 rounded-full ${availableCount > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}">${availableCount > 0 ? `${availableCount} exemplar(es)` : (hasDigital ? 'Digital' : 'Consultar')}</span>
                            <span class="text-xs font-semibold text-biblio-primary">Ver detalhes <i class="fa-solid fa-chevron-right ml-1"></i></span>
                        </div>
                    </article>
                `;
            }).join('');
        }

        function filterCatalog() {
            const query = document.getElementById('catalog-search').value.toLowerCase();
            const category = document.getElementById('catalog-category-filter').value;
            const unitId = document.getElementById('catalog-unit-filter').value;
            const books = getBooks().filter(book => String(book.id || '').startsWith('edu-digital-') && book.cover && book.cover.startsWith('assets/capas/'));
            const copies = getCopies();

            const filtered = books.filter(book => {
                const matchesQuery = book.title.toLowerCase().includes(query) || 
                                     book.author.toLowerCase().includes(query) || 
                                     String(book.isbn || '').toLowerCase().includes(query) ||
                                     book.category.toLowerCase().includes(query);
                const matchesCategory = category === '' || book.category === category;
                
                let matchesUnit = true;
                if (unitId !== '') {
                    const bookCopies = copies.filter(c => c.bookId === book.id && c.unitId === unitId);
                    matchesUnit = bookCopies.length > 0;
                }

                return matchesQuery && matchesCategory && matchesUnit;
            });

            document.getElementById('catalog-grid').innerHTML = renderCatalogCards(filtered);
        }

        function filterByCategory(cat) {
            const catFilter = document.getElementById('catalog-category-filter');
            if (catFilter) {
                catFilter.value = cat;
                filterCatalog();
            }
        }

        function initCatalogEvents() {
            // Event listeners initialization if needed
        }

        // 3. Book Detail View
        function renderBookDetailView(bookId) {
            const books = getBooks();
            const book = books.find(b => b.id === bookId);
            if (!book) return `<div class="p-12 text-center">Obra não encontrada. <button onclick="router.navigate('catalog')" class="text-biblio-primary underline">Voltar</button></div>`;

            const copies = getCopies().filter(c => c.bookId === bookId);
            const units = getUnits();
            const reservas = getReservas().filter(r => r.bookId === bookId);
            const user = getCurrentUser();

            return `
                <div class="space-y-6">
                    <button onclick="router.navigate('catalog')" class="text-xs font-semibold text-slate-500 hover:text-biblio-primary flex items-center space-x-1">
                        <i class="fa-solid fa-arrow-left"></i><span>Voltar ao Catálogo</span>
                    </button>

                    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="space-y-4">
                            <div class="min-h-80 bg-amber-50 rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-3">
                                <img src="${book.cover}" alt="Capa completa de ${book.title}" class="block w-full h-auto max-h-[560px] object-contain rounded-xl" onerror="this.closest('div').style.display='none'">
                            </div>
                        </div>
                        <div class="md:col-span-2 space-y-4">
                            <div>
                                <span class="bg-blue-50 text-biblio-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${book.category}</span>
                                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">${book.title}</h2>
                                <p class="text-sm font-medium text-slate-600 mt-1">Autor: <span class="text-slate-900">${book.author}</span></p>
                            </div>
                            
                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-slate-100 text-xs">
                                <div>
                                    <span class="text-slate-400 block">Editora</span>
                                    <span class="font-bold text-slate-800">${book.publisher}</span>
                                </div>
                                <div>
                                    <span class="text-slate-400 block">Ano</span>
                                    <span class="font-bold text-slate-800">${book.year}</span>
                                </div>
                                <div>
                                    <span class="text-slate-400 block">ISBN</span>
                                    <span class="font-bold text-slate-800 font-mono">${book.isbn}</span>
                                </div>
                            </div>

                            <div class="space-y-2">
                                <h4 class="text-xs font-bold text-slate-700 uppercase">Sinopse / Descrição</h4>
                                <p class="text-sm text-slate-600 leading-relaxed">${book.synopsis}</p>
                            </div>

                            <!-- Copies & Availability Status by Unit -->
                            <div class="space-y-3 pt-4">
                                <h4 class="text-xs font-bold text-slate-700 uppercase">Disponibilidade de Exemplares por Unidade Física</h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    ${units.map(unit => {
                                        const unitCopies = copies.filter(c => c.unitId === unit.id);
                                        const availableInUnit = unitCopies.filter(c => c.status === 'Disponível').length;
                                        return `
                                            <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                                                <div>
                                                    <span class="font-bold text-slate-800 block">${unit.name}</span>
                                                    <span class="text-[10px] text-slate-500">${unit.location}</span>
                                                </div>
                                                <div class="text-right">
                                                    <span class="font-bold ${availableInUnit > 0 ? 'text-emerald-600' : 'text-rose-600'} block">
                                                        ${availableInUnit} de ${unitCopies.length} disp.
                                                    </span>
                                                    <span class="text-[10px] text-slate-400">Total na Unidade</span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>

                            <!-- Digital file availability -->
                            ${book.pdfUrl ? `<div class="rounded-xl border border-sky-100 bg-sky-50 p-3 text-xs text-sky-900"><i class="fa-solid fa-file-pdf mr-1"></i> Versão digital cadastrada. A leitura é liberada após empréstimo digital ativo.</div>` : ''}

                            <!-- Action Buttons / Queue / Reservation -->
                            <div class="pt-4 flex flex-wrap items-center gap-3">
                                ${user ? renderBookActions(book, copies, reservas, user) : `
                                    <div class="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl text-xs flex items-center justify-between w-full">
                                        <span><i class="fa-solid fa-circle-info mr-1"></i> Faça login para solicitar empréstimos ou entrar na fila de espera.</span>
                                        <button onclick="openLoginModal()" class="bg-amber-600 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-700">Entrar</button>
                                    </div>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderBookActions(book, copies, reservas, user) {
            const digitalLoan = getLoans().find(l => l.userId === user.id && l.bookId === book.id && l.loanType === 'digital' && ['Ativo','Atrasado'].includes(l.status));
            const digitalButton = book.pdfUrl && book.digitalAvailable !== false ? (digitalLoan
                ? `<button onclick="router.navigate('reader','${book.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow"><i class="fa-solid fa-book-open-reader mr-1"></i> Continuar leitura</button>`
                : `<button onclick="requestDigitalLoan('${book.id}')" class="bg-sky-700 hover:bg-sky-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow"><i class="fa-solid fa-file-pdf mr-1"></i> Solicitar empréstimo digital</button>`)
                : '';
            const availableCopy = copies.find(c => c.status === 'Disponível');
            const userReservas = reservas.filter(r => r.userId === user.id && r.status === 'Ativa');
            const userHasActiveReservation = userReservas.length > 0;

            if (availableCopy) {
                if (user.profile === 'Bibliotecário/Administrador') {
                    return `
                        <button onclick="openLoanModal('${book.id}')" class="bg-biblio-primary hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-xl text-xs shadow transition">
                            <i class="fa-solid fa-hand-holding-hand mr-1"></i> Registrar Empréstimo (Admin)
                        </button>
                        ${digitalButton}
                    `;
                }
                return `
                    <div class="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs flex items-center justify-between w-full border border-emerald-200">
                        <span><i class="fa-solid fa-circle-check mr-1"></i> Exemplar disponível para retirada na unidade física!</span>
                        <span class="font-bold">Exemplar: ${availableCopy.id} (${availableCopy.location})</span>
                    </div>
                    ${digitalButton}
                `;
            } else {
                if (userHasActiveReservation) {
                    const myReserva = userReservas[0];
                    return `
                        ${digitalButton}
                        <div class="bg-blue-50 text-biblio-primary p-3 rounded-xl text-xs flex items-center justify-between w-full border border-blue-200">
                            <span><i class="fa-solid fa-clock mr-1"></i> Você está na fila de espera. Posição: <strong>#${myReserva.position}</strong></span>
                            <button onclick="cancelReserva('${myReserva.id}')" class="text-rose-600 hover:underline font-semibold">Cancelar Reserva</button>
                        </div>
                    `;
                } else {
                    return `
                        ${digitalButton}
                        <button onclick="requestReserva('${book.id}')" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-xl text-xs shadow transition flex items-center space-x-2">
                            <i class="fa-solid fa-hourglass-half"></i>
                            <span>Entrar na Fila de Espera (Posição #${reservas.length + 1})</span>
                        </button>
                    `;
                }
            }
        }

        // Empréstimo digital: reutiliza a estrutura de empréstimos e as regras de prazo atuais.
        function requestDigitalLoan(bookId) {
            const user = getCurrentUser();
            if (!user) { openLoginModal(); return; }
            const book = getBooks().find(b => b.id === bookId);
            if (!book || !book.pdfUrl || book.digitalAvailable === false) { showToast('Arquivo digital não cadastrado para esta obra.', 'error'); return; }
            const fines = getFines().filter(f => f.userId === user.id && f.status === 'Pendente');
            if (fines.length) { showToast('Há multas pendentes. Regularize-as antes de solicitar novo empréstimo.', 'error'); return; }
            const loans = getLoans();
            const activeForUser = loans.filter(l => l.userId === user.id && ['Ativo','Atrasado'].includes(l.status)).length;
            const params = getParameters();
            const max = user.profile === 'Professor' ? params.professorMaxLoans : user.profile === 'Público Geral' ? params.publicMaxLoans : params.alunoMaxLoans;
            if (activeForUser >= max) { showToast('Você atingiu o limite de empréstimos ativos do seu perfil.', 'error'); return; }
            if (loans.some(l => l.userId === user.id && l.bookId === bookId && l.loanType === 'digital' && ['Ativo','Atrasado'].includes(l.status))) {
                showToast('Você já possui um empréstimo digital ativo desta obra.', 'info'); router.navigate('reader', bookId); return;
            }
            const days = user.profile === 'Professor' ? params.professorDays : user.profile === 'Público Geral' ? params.publicDays : params.alunoDays;
            const start = new Date(); const due = new Date(); due.setDate(due.getDate() + days);
            loans.push({ id:'loan-digital-' + Date.now(), userId:user.id, copyId:null, bookId, unitId:null, loanDate:start.toISOString(), dueDate:due.toISOString(), returnDate:null, status:'Ativo', renewCount:0, operator:'Autoatendimento BiblioConnect', loanType:'digital' });
            saveLoans(loans);
            showToast('Empréstimo digital registrado. A leitura está liberada.', 'success');
            router.navigate('reader', bookId);
        }

        function renderDigitalReaderView(bookId) {
            const user = getCurrentUser();
            const book = getBooks().find(b => b.id === bookId);
            if (!user) { openLoginModal(); return `<div class="bg-white rounded-2xl p-8 text-center">Entre no sistema para acessar a leitura.</div>`; }
            const loan = getLoans().find(l => l.userId === user.id && l.bookId === bookId && l.loanType === 'digital' && ['Ativo','Atrasado'].includes(l.status));
            if (!book || !book.pdfUrl || !loan) return `<div class="bg-white rounded-2xl p-8 text-center"><h2 class="font-bold text-xl">Leitura não autorizada</h2><p class="mt-2 text-sm text-slate-600">É necessário ter um empréstimo digital ativo para ler esta obra.</p><button onclick="router.navigate('book-detail','${bookId}')" class="mt-4 bg-biblio-primary text-white px-4 py-2 rounded-lg">Voltar à obra</button></div>`;
            const late = new Date(loan.dueDate) < new Date();
            return `<div class="space-y-4"><div class="bg-white rounded-2xl p-5 shadow-sm flex flex-wrap justify-between items-center gap-3"><div><button onclick="router.navigate('book-detail','${book.id}')" class="text-sm text-biblio-primary mb-2"><i class="fa-solid fa-arrow-left mr-1"></i>Voltar à obra</button><h2 class="text-xl font-bold">${book.title}</h2><p class="text-sm text-slate-500">${book.author} · Vencimento: ${new Date(loan.dueDate).toLocaleDateString('pt-BR')}</p></div><div class="flex gap-2"><button onclick="renewLoan('${loan.id}')" class="bg-sky-700 text-white px-4 py-2 rounded-lg text-sm">Renovar</button><span class="px-3 py-2 rounded-lg text-sm ${late?'bg-rose-100 text-rose-700':'bg-emerald-100 text-emerald-700'}">${late?'Prazo vencido':'Empréstimo ativo'}</span></div></div><div class="bg-white rounded-2xl overflow-hidden border border-slate-200"><iframe src="${book.pdfUrl}#toolbar=1&navpanes=0" title="Leitor PDF: ${book.title}" class="w-full" style="height: min(78vh, 900px);" loading="lazy"></iframe></div><p class="text-xs text-slate-500">Se o PDF não abrir, extraia o pacote completo mantendo a pasta acervo/pdf e execute o sistema por um servidor HTTP local. O leitor do navegador não é uma proteção contra cópia do arquivo.</p></div>`;
        }

        // 4. Contacts View
        function renderContactsView() {
            const units = getUnits();
            return `
                <div class="space-y-8">
                    <div class="bg-gradient-to-r from-biblio-primary to-sky-800 rounded-3xl p-8 text-white shadow-xl">
                        <h2 class="text-2xl sm:text-3xl font-bold">Canais Oficiais e Unidades</h2>
                        <p class="text-sky-100 text-sm mt-1">Consulte endereços e canais de atendimento das nossas unidades.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${units.map(unit => `
                            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                                <div class="w-12 h-12 bg-blue-50 text-biblio-primary rounded-xl flex items-center justify-center text-xl font-bold">
                                    <i class="fa-solid fa-building-columns"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-slate-900 text-base">${unit.name}</h3>
                                    <p class="text-xs text-slate-500 mt-1"><i class="fa-solid fa-location-dot mr-1 text-biblio-secondary"></i> ${unit.location}</p>
                                    <p class="text-xs text-slate-500 mt-1"><i class="fa-solid fa-phone mr-1 text-biblio-secondary"></i> ${unit.phone}</p>
                                </div>
                                <div class="pt-4 border-t border-slate-100">
                                    <a href="https://wa.me/5587999999999" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-xl transition w-full justify-center">
                                        <i class="fa-brands fa-whatsapp text-sm"></i>
                                        <span>Falar via WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div class="space-y-2">
                            <h3 class="font-bold text-slate-900 text-lg">Redes Sociais Oficiais</h3>
                            <p class="text-xs text-slate-500">Siga @ no Instagram para acompanhar avisos de acervo, novos lançamentos e horários especiais.</p>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer" class="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow transition flex items-center space-x-2">
                            <i class="fa-brands fa-instagram text-lg"></i>
                            <span>Acessar Instagram</span>
                        </a>
                    </div>
                </div>
            `;
        }

        // 5. User Profile View
        function renderProfileView() {
            const user = getCurrentUser();
            if (!user) return '';

            const loans = getLoans().filter(l => l.userId === user.id);
            const reservas = getReservas().filter(r => r.userId === user.id);
            const fines = getFines().filter(f => f.userId === user.id);
            const books = getBooks();
            const units = getUnits();
            const initial = user.name.charAt(0).toUpperCase();

            return `
                <div class="space-y-8">
                    <!-- Profile Header Card -->
                    <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div class="flex items-center space-x-6">
                            <div class="w-20 h-20 rounded-full bg-biblio-accent text-biblio-dark text-3xl font-extrabold flex items-center justify-center shadow-md">
                                ${initial}
                            </div>
                            <div class="space-y-1">
                                <h2 class="text-2xl font-bold text-slate-900">${user.name}</h2>
                                <p class="text-xs text-slate-500">${user.email} &bull; ${user.phone}</p>
                                <div class="flex items-center space-x-2 pt-1">
                                    <span class="bg-blue-50 text-biblio-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full">${user.profile}</span>
                                    <span class="bg-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-0.5 rounded-full">${user.course || 'Comunidade'}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button onclick="openEditProfileModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs transition flex items-center space-x-1.5">
                                <i class="fa-solid fa-user-pen"></i>
                                <span>Editar Perfil</span>
                            </button>
                            <button onclick="openChangePasswordModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-xl text-xs transition flex items-center space-x-1.5">
                                <i class="fa-solid fa-key"></i>
                                <span>Alterar Senha</span>
                            </button>
                        </div>
                    </div>

                    <!-- Tabs Content: Empréstimos, Reservas, Multas -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Loans Section -->
                        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 space-y-4">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 class="font-bold text-slate-900 text-sm flex items-center"><i class="fa-solid fa-book-bookmark text-biblio-primary mr-2"></i> Meus Empréstimos</h3>
                                <span class="bg-blue-50 text-biblio-primary text-xs font-bold px-2 py-0.5 rounded-full">${loans.filter(l => l.status !== 'Devolvido').length}</span>
                            </div>
                            <div class="space-y-3">
                                ${loans.length === 0 ? `<p class="text-xs text-slate-400 text-center py-6">Nenhum empréstimo registrado.</p>` : loans.map(loan => {
                                    const book = books.find(b => b.id === loan.bookId) || {};
                                    const isLate = loan.status === 'Atrasado';
                                    return `
                                        <div class="p-3 rounded-2xl border ${isLate ? 'border-rose-200 bg-rose-50/50' : 'border-slate-100 bg-slate-50'} text-xs space-y-2">
                                            <div class="flex justify-between items-start">
                                                <span class="font-bold text-slate-900 line-clamp-1">${book.title || 'Livro'}</span>
                                                <span class="${isLate ? 'text-rose-600 bg-rose-100' : 'text-emerald-600 bg-emerald-100'} px-2 py-0.5 rounded font-bold text-[10px]">${loan.status}</span>
                                            </div>
                                            <p class="text-slate-500">Vencimento: <span class="font-semibold text-slate-800">${new Date(loan.dueDate).toLocaleDateString()}</span></p>
                                            ${loan.loanType === 'digital' && ['Ativo','Atrasado'].includes(loan.status) ? `<button onclick="router.navigate('reader','${loan.bookId}')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1.5 rounded-xl text-[11px] transition"><i class="fa-solid fa-book-open-reader mr-1"></i> Ler PDF</button>` : ''}
                                            ${loan.status === 'Ativo' ? `
                                                <button onclick="renewLoan('${loan.id}')" class="w-full bg-biblio-primary hover:bg-blue-900 text-white font-semibold py-1.5 rounded-xl text-[11px] transition">
                                                    Renovar Empréstimo (${loan.renewCount}/2)
                                                </button>
                                            ` : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        <!-- Reservations Section -->
                        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 space-y-4">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 class="font-bold text-slate-900 text-sm flex items-center"><i class="fa-solid fa-hourglass-half text-amber-500 mr-2"></i> Minhas Reservas & Fila</h3>
                                <span class="bg-amber-50 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">${reservas.filter(r => r.status === 'Ativa').length}</span>
                            </div>
                            <div class="space-y-3">
                                ${reservas.length === 0 ? `<p class="text-xs text-slate-400 text-center py-6">Nenhuma reserva na fila.</p>` : reservas.map(res => {
                                    const book = books.find(b => b.id === res.bookId) || {};
                                    return `
                                        <div class="p-3 rounded-2xl border border-slate-100 bg-slate-50 text-xs space-y-2">
                                            <div class="flex justify-between items-start">
                                                <span class="font-bold text-slate-900 line-clamp-1">${book.title || 'Livro'}</span>
                                                <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold text-[10px]">Posição #${res.position}</span>
                                            </div>
                                            <p class="text-slate-500">Solicitado em: ${new Date(res.requestDate).toLocaleDateString()}</p>
                                            <button onclick="cancelReserva('${res.id}')" class="text-rose-600 hover:underline font-semibold">Cancelar Reserva</button>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        <!-- Fines Section -->
                        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 space-y-4">
                            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                                <h3 class="font-bold text-slate-900 text-sm flex items-center"><i class="fa-solid fa-triangle-exclamation text-rose-500 mr-2"></i> Multas & Pendências</h3>
                                <span class="bg-rose-50 text-rose-700 text-xs font-bold px-2 py-0.5 rounded-full">${fines.filter(f => f.status === 'Pendente').length}</span>
                            </div>
                            <div class="space-y-3">
                                ${fines.length === 0 ? `<p class="text-xs text-slate-400 text-center py-6">Nenhuma multa pendente.</p>` : fines.map(fine => `
                                    <div class="p-3 rounded-2xl border border-rose-100 bg-rose-50/50 text-xs space-y-1">
                                        <div class="flex justify-between items-start">
                                            <span class="font-bold text-rose-900">R$ ${fine.amount.toFixed(2)}</span>
                                            <span class="bg-rose-200 text-rose-800 px-2 py-0.5 rounded font-bold text-[10px]">${fine.status}</span>
                                        </div>
                                        <p class="text-slate-600 text-[11px]">${fine.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // 6. Admin Dashboard View
        function renderAdminDashboard() {
            const books = getBooks();
            const copies = getCopies();
            const users = getUsers();
            const loans = getLoans();
            const reservas = getReservas();
            const fines = getFines();
            const units = getUnits();

            const availableCount = copies.filter(c => c.status === 'Disponível').length;
            const borrowedCount = copies.filter(c => c.status === 'Emprestado').length;
            const activeLoansCount = loans.filter(l => l.status === 'Ativo' || l.status === 'Atrasado').length;
            const pendingFinesTotal = fines.filter(f => f.status === 'Pendente').reduce((acc, f) => acc + f.amount, 0);

            return `
                <div class="space-y-8">
                    <div class="bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Painel do Bibliotecário</span>
                            <h2 class="text-2xl sm:text-3xl font-extrabold mt-2">Gestão Integral de Circulação e Acervo</h2>
                            <p class="text-slate-400 text-xs sm:text-sm mt-1">Monitore empréstimos, devoluções, multas, relatórios e parâmetros institucionais.</p>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <button onclick="openAddBookModal()" class="bg-biblio-accent hover:bg-amber-600 text-biblio-dark font-bold px-4 py-2.5 rounded-xl text-xs shadow transition">
                                <i class="fa-solid fa-plus mr-1"></i> Nova Obra
                            </button>
                            <button onclick="openAddCopyModal()" class="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl text-xs backdrop-blur transition">
                                <i class="fa-solid fa-layer-group mr-1"></i> Novo Exemplar
                            </button>
                        </div>
                    </div>

                    <!-- Admin KPI Cards -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button type="button" onclick="showAdminKpiDetails('books')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition">
                            <p class="text-xs text-slate-400 font-semibold uppercase">Obras / Exemplares</p>
                            <p class="text-2xl font-bold text-slate-900 mt-1">${books.length} / <span class="text-biblio-primary">${copies.length}</span></p><p class="text-[10px] text-slate-400 mt-1">Clique para ver detalhes</p>
                        </button>
                        <button type="button" onclick="showAdminKpiDetails('loans')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition">
                            <p class="text-xs text-slate-400 font-semibold uppercase">Empréstimos Ativos</p>
                            <p class="text-2xl font-bold text-emerald-600 mt-1">${activeLoansCount}</p><p class="text-[10px] text-slate-400 mt-1">Clique para ver detalhes</p>
                        </button>
                        <button type="button" onclick="showAdminKpiDetails('reservas')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition">
                            <p class="text-xs text-slate-400 font-semibold uppercase">Reservas na Fila</p>
                            <p class="text-2xl font-bold text-amber-600 mt-1">${reservas.filter(r => r.status === 'Ativa').length}</p><p class="text-[10px] text-slate-400 mt-1">Clique para ver detalhes</p>
                        </button>
                        <button type="button" onclick="showAdminKpiDetails('fines')" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition">
                            <p class="text-xs text-slate-400 font-semibold uppercase">Multas Pendentes</p>
                            <p class="text-2xl font-bold text-rose-600 mt-1">R$ ${pendingFinesTotal.toFixed(2)}</p><p class="text-[10px] text-slate-400 mt-1">Clique para ver detalhes</p>
                        </button>
                    </div>

                    <!-- Admin Management Tabs Navigation -->
                    <div class="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                        <button onclick="switchAdminTab('loans')" id="tab-btn-loans" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-biblio-primary text-white shadow">Circulação & Empréstimos</button>
                        <button onclick="switchAdminTab('books')" id="tab-btn-books" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200">Obras & Acervo</button>
                        <button onclick="switchAdminTab('copies')" id="tab-btn-copies" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200">Exemplares Físicos</button>
                        <button onclick="switchAdminTab('users')" id="tab-btn-users" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200">Usuários</button>
                        <button onclick="switchAdminTab('fines')" id="tab-btn-fines" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200">Multas</button>
                        <button onclick="switchAdminTab('reports')" id="tab-btn-reports" class="admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200">Relatórios & Estatísticas</button>
                    </div>

                    <!-- Admin Tab Content Container -->
                    <div id="admin-tab-content" class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
                        <!-- Populated dynamically -->
                    </div>
                </div>
            `;
        }

        function showAdminKpiDetails(type) {
            const books = getBooks(), copies = getCopies(), loans = getLoans(), reservas = getReservas(), fines = getFines(), users = getUsers();
            const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
            let title = '', rows = [], headers = [];
            if (type === 'books') {
                title = 'Obras e exemplares'; headers = ['Obra / Exemplar', 'Autor / Unidade', 'Situação'];
                rows = [...books.map(b => [b.title, b.author, 'Obra']), ...copies.map(c => { const b=books.find(x=>x.id===c.bookId); const u=getUnits().find(x=>x.id===c.unitId); return [b?.title || 'Obra não encontrada', u?.name || 'Unidade não informada', c.status || 'Sem status']; })];
            } else if (type === 'loans') {
                title = 'Empréstimos ativos'; headers = ['Usuário', 'Obra', 'Vencimento / Estado'];
                rows = loans.filter(l => ['Ativo','Atrasado'].includes(l.status)).map(l => [users.find(u=>u.id===l.userId)?.name || l.userName || l.userId, books.find(b=>b.id===l.bookId)?.title || l.bookTitle || l.bookId, `${l.dueDate ? new Date(l.dueDate).toLocaleDateString('pt-BR') : 'Sem data'} · ${l.status}`]);
            } else if (type === 'reservas') {
                title = 'Reservas na fila'; headers = ['Usuário', 'Obra', 'Data / Situação'];
                rows = reservas.filter(r => r.status === 'Ativa').map(r => [users.find(u=>u.id===r.userId)?.name || r.userName || r.userId, books.find(b=>b.id===r.bookId)?.title || r.bookTitle || r.bookId, `${r.createdAt ? new Date(r.createdAt).toLocaleDateString('pt-BR') : 'Data não informada'} · ${r.status}`]);
            } else {
                title = 'Multas pendentes'; headers = ['Usuário', 'Motivo / Obra', 'Valor'];
                rows = fines.filter(f => f.status === 'Pendente').map(f => [users.find(u=>u.id===f.userId)?.name || f.userName || f.userId, f.reason || books.find(b=>b.id===f.bookId)?.title || f.bookTitle || 'Multa pendente', `R$ ${Number(f.amount || 0).toFixed(2)}`]);
            }
            let modal = document.getElementById('admin-kpi-modal');
            if (!modal) { modal=document.createElement('div'); modal.id='admin-kpi-modal'; modal.className='ec-modal-overlay'; modal.onclick=e=>{if(e.target===modal) modal.remove();}; document.body.appendChild(modal); }
            modal.innerHTML = `<div class="ec-modal-card" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="ec-modal-heading"><h2>${esc(title)}</h2><button onclick="document.getElementById('admin-kpi-modal').remove()" aria-label="Fechar">✕</button></div><div class="ec-modal-body">${rows.length ? `<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '<p class="ec-empty">Não há registros para exibir neste indicador.</p>'}</div></div>`;
        }

        function initAdminDashboardEvents() {
            switchAdminTab('loans');
        }

        function switchAdminTab(tabName) {
            document.querySelectorAll('.admin-tab-btn').forEach(btn => {
                btn.className = "admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200";
            });
            const activeBtn = document.getElementById(`tab-btn-${tabName}`);
            if (activeBtn) activeBtn.className = "admin-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-biblio-primary text-white shadow";

            const container = document.getElementById('admin-tab-content');
            
            switch(tabName) {
                case 'loans':
                    container.innerHTML = renderAdminLoansTable();
                    break;
                case 'books':
                    container.innerHTML = renderAdminBooksTable();
                    break;
                case 'copies':
                    container.innerHTML = renderAdminCopiesTable();
                    break;
                case 'users':
                    container.innerHTML = renderAdminUsersTable();
                    break;
                case 'fines':
                    container.innerHTML = renderAdminFinesTable();
                    break;
                case 'reports':
                    container.innerHTML = renderAdminReportsView();
                    break;
            }
        }

        // Admin Table Renderers
        function renderAdminLoansTable() {
            const loans = getLoans();
            const users = getUsers();
            const books = getBooks();
            const copies = getCopies();

            return `
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-slate-900 text-sm">Controle de Empréstimos e Devoluções</h3>
                        <button onclick="openLoanModal()" class="bg-biblio-primary text-white text-xs font-semibold px-3 py-2 rounded-xl shadow">Novo Empréstimo</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-400 uppercase font-semibold">
                                <tr>
                                    <th class="p-3">Usuário</th>
                                    <th class="p-3">Livro / Exemplar</th>
                                    <th class="p-3">Empréstimo</th>
                                    <th class="p-3">Vencimento</th>
                                    <th class="p-3">Status</th>
                                    <th class="p-3 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${loans.map(loan => {
                                    const usr = users.find(u => u.id === loan.userId) || {};
                                    const book = books.find(b => b.id === loan.bookId) || {};
                                    const isLate = loan.status === 'Atrasado' || (loan.status === 'Ativo' && new Date() > new Date(loan.dueDate));
                                    return `
                                        <tr class="hover:bg-slate-50">
                                            <td class="p-3 font-semibold text-slate-900">${usr.name || loan.userId}</td>
                                            <td class="p-3 text-slate-600">${book.title || 'Livro'} <span class="text-[10px] text-slate-400 font-mono">(${loan.copyId})</span></td>
                                            <td class="p-3 text-slate-600">${new Date(loan.loanDate).toLocaleDateString()}</td>
                                            <td class="p-3 text-slate-600">${new Date(loan.dueDate).toLocaleDateString()}</td>
                                            <td class="p-3">
                                                <span class="${isLate ? 'bg-rose-100 text-rose-800' : loan.status === 'Devolvido' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-100 text-emerald-800'} px-2 py-0.5 rounded font-bold text-[10px]">
                                                    ${isLate && loan.status !== 'Devolvido' ? 'Atrasado' : loan.status}
                                                </span>
                                            </td>
                                            <td class="p-3 text-right">
                                                ${loan.status !== 'Devolvido' ? `
                                                    <button onclick="returnBook('${loan.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1.5 rounded-lg text-[11px] shadow">Devolver</button>
                                                ` : '<span class="text-slate-400 font-medium">Finalizado</span>'}
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function renderAdminBooksTable() {
            const books = getBooks();
            return `
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-slate-900 text-sm">Obras Cadastradas no Catálogo</h3>
                        <button onclick="openAddBookModal()" class="bg-biblio-primary text-white text-xs font-semibold px-3 py-2 rounded-xl shadow">Cadastrar Obra</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-400 uppercase font-semibold">
                                <tr>
                                    <th class="p-3">Título</th>
                                    <th class="p-3">Autor</th>
                                    <th class="p-3">ISBN</th>
                                    <th class="p-3">Categoria</th>
                                    <th class="p-3 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${books.map(book => `
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-slate-900">${book.title}</td>
                                        <td class="p-3 text-slate-600">${book.author}</td>
                                        <td class="p-3 text-slate-600 font-mono">${book.isbn}</td>
                                        <td class="p-3 text-slate-600">${book.category}</td>
                                        <td class="p-3 text-right">
                                            <button onclick="router.navigate('book-detail', '${book.id}')" class="text-biblio-primary font-semibold hover:underline mr-2">Ver</button>
                                            <button onclick="deleteBook('${book.id}')" class="text-rose-600 font-semibold hover:underline">Inativar</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function renderAdminCopiesTable() {
            const copies = getCopies();
            const books = getBooks();
            const units = getUnits();

            return `
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-slate-900 text-sm">Exemplares Físicos por Unidade</h3>
                        <button onclick="openAddCopyModal()" class="bg-biblio-primary text-white text-xs font-semibold px-3 py-2 rounded-xl shadow">Adicionar Exemplar</button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-400 uppercase font-semibold">
                                <tr>
                                    <th class="p-3">ID Exemplar</th>
                                    <th class="p-3">Obra Bibliográfica</th>
                                    <th class="p-3">Unidade Física</th>
                                    <th class="p-3">Localização (Estante)</th>
                                    <th class="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${copies.map(copy => {
                                    const book = books.find(b => b.id === copy.bookId) || {};
                                    const unit = units.find(u => u.id === copy.unitId) || {};
                                    return `
                                        <tr class="hover:bg-slate-50">
                                            <td class="p-3 font-mono font-bold text-slate-800">${copy.id}</td>
                                            <td class="p-3 font-semibold text-slate-900">${book.title || 'Desconhecido'}</td>
                                            <td class="p-3 text-slate-600">${unit.name || 'Unidade'}</td>
                                            <td class="p-3 text-slate-600">${copy.location}</td>
                                            <td class="p-3">
                                                <span class="${copy.status === 'Disponível' ? 'bg-emerald-100 text-emerald-800' : copy.status === 'Emprestado' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'} px-2 py-0.5 rounded font-bold text-[10px]">
                                                    ${copy.status}
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function renderAdminUsersTable() {
            const users = getUsers();
            return `
                <div class="space-y-4">
                    <h3 class="font-bold text-slate-900 text-sm">Usuários Cadastrados no Sistema</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-400 uppercase font-semibold">
                                <tr>
                                    <th class="p-3">Nome</th>
                                    <th class="p-3">CPF</th>
                                    <th class="p-3">E-mail</th>
                                    <th class="p-3">Perfil</th>
                                    <th class="p-3">Curso / Instituição</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${users.map(usr => `
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-3 font-semibold text-slate-900">${usr.name}</td>
                                        <td class="p-3 text-slate-600 font-mono">${usr.cpf}</td>
                                        <td class="p-3 text-slate-600">${usr.email}</td>
                                        <td class="p-3"><span class="bg-blue-50 text-biblio-primary px-2 py-0.5 rounded font-bold text-[10px]">${usr.profile}</span></td>
                                        <td class="p-3 text-slate-600">${usr.course || '-'}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function renderAdminFinesTable() {
            const fines = getFines();
            const users = getUsers();

            return `
                <div class="space-y-4">
                    <h3 class="font-bold text-slate-900 text-sm">Controle de Multas e Regularizações</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-slate-50 text-slate-400 uppercase font-semibold">
                                <tr>
                                    <th class="p-3">Usuário</th>
                                    <th class="p-3">Descrição</th>
                                    <th class="p-3">Valor</th>
                                    <th class="p-3">Status</th>
                                    <th class="p-3 text-right">Ação</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${fines.map(fine => {
                                    const usr = users.find(u => u.id === fine.userId) || {};
                                    return `
                                        <tr class="hover:bg-slate-50">
                                            <td class="p-3 font-semibold text-slate-900">${usr.name || 'Usuário'}</td>
                                            <td class="p-3 text-slate-600">${fine.description}</td>
                                            <td class="p-3 font-bold text-rose-600">R$ ${fine.amount.toFixed(2)}</td>
                                            <td class="p-3"><span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold text-[10px]">${fine.status}</span></td>
                                            <td class="p-3 text-right">
                                                ${fine.status === 'Pendente' ? `
                                                    <button onclick="payFine('${fine.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-1 rounded text-[11px]">Regularizar</button>
                                                ` : '<span class="text-slate-400 font-medium">Pago</span>'}
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function renderAdminReportsView() {
            const books = getBooks();
            const loans = getLoans();
            const copies = getCopies();
            const fines = getFines();

            return `
                <div class="space-y-6">
                    <div class="flex items-center justify-between">
                        <h3 class="font-bold text-slate-900 text-sm">Relatórios e Estatísticas de Circulação</h3>
                        <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow flex items-center space-x-1">
                            <i class="fa-solid fa-print"></i><span>Imprimir Relatório</span>
                        </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                            <h4 class="font-bold text-slate-800 text-xs uppercase"><i class="fa-solid fa-chart-pie mr-1 text-biblio-primary"></i> Status dos Exemplares Físicos</h4>
                            <ul class="space-y-2 text-xs">
                                <li class="flex justify-between py-1 border-b border-slate-200"><span>Disponíveis:</span><span class="font-bold text-emerald-600">${copies.filter(c => c.status === 'Disponível').length}</span></li>
                                <li class="flex justify-between py-1 border-b border-slate-200"><span>Emprestados:</span><span class="font-bold text-blue-600">${copies.filter(c => c.status === 'Emprestado').length}</span></li>
                                <li class="flex justify-between py-1"><span>Em Manutenção:</span><span class="font-bold text-amber-600">${copies.filter(c => c.status === 'Manutenção').length}</span></li>
                            </ul>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                            <h4 class="font-bold text-slate-800 text-xs uppercase"><i class="fa-solid fa-chart-line mr-1 text-biblio-primary"></i> Circulação Total</h4>
                            <ul class="space-y-2 text-xs">
                                <li class="flex justify-between py-1 border-b border-slate-200"><span>Total de Empréstimos Históricos:</span><span class="font-bold text-slate-800">${loans.length}</span></li>
                                <li class="flex justify-between py-1 border-b border-slate-200"><span>Total Arrecadado em Multas:</span><span class="font-bold text-emerald-600">R$ ${fines.filter(f => f.status === 'Pago').reduce((a,b) => a + b.amount, 0).toFixed(2)}</span></li>
                                <li class="flex justify-between py-1"><span>Multas Pendentes:</span><span class="font-bold text-rose-600">R$ ${fines.filter(f => f.status === 'Pendente').reduce((a,b) => a + b.amount, 0).toFixed(2)}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        /* ==========================================
           BUSINESS LOGIC & MODAL CONTROLLERS
           ========================================== */

        function openLoginModal() { document.getElementById('login-modal').classList.remove('hidden'); }
        function closeLoginModal() { document.getElementById('login-modal').classList.add('hidden'); }
        function openRegisterModal() { document.getElementById('register-modal').classList.remove('hidden'); }
        function closeRegisterModal() { document.getElementById('register-modal').classList.add('hidden'); }
        function openForgotPasswordModal() { closeLoginModal(); document.getElementById('forgot-modal').classList.remove('hidden'); }
        function closeForgotPasswordModal() { document.getElementById('forgot-modal').classList.add('hidden'); }

        function togglePasswordVisibility(fieldId, btn) {
            const input = document.getElementById(fieldId);
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
            }
        }

        function fillDemoLogin(email, pass) {
            document.getElementById('login-email').value = email;
            document.getElementById('login-pass').value = pass;
        }

        function handleLogin(e) {
            e.preventDefault();
            const identifier = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-pass').value.trim();

            const users = getUsers();
            const found = users.find(u => (u.email === identifier || u.cpf === identifier) && u.pass === pass);

            if (found) {
                setCurrentUser(found);
                closeLoginModal();
                showToast(`Bem-vindo(a) de volta, ${found.name}!`, 'success');
                router.navigate('home');
            } else {
                showToast('Credenciais inválidas. Verifique seu e-mail/CPF e senha.', 'error');
            }
        }

        function handleLogout() {
            setCurrentUser(null);
            showToast('Sessão encerrada com sucesso.', 'info');
            router.navigate('home');
        }

        function toggleStudentFields() {
            const profile = document.getElementById('reg-profile').value;
            const container = document.getElementById('reg-course-container');
            if (profile === 'Público Geral') {
                container.style.display = 'none';
            } else {
                container.style.display = 'block';
            }
        }

        function maskCPF(input) {
            let v = input.value.replace(/\D/g, '');
            if (v.length > 11) v = v.slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            input.value = v;
        }

        function maskPhone(input) {
            let v = input.value.replace(/\D/g, '');
            if (v.length > 11) v = v.slice(0, 11);
            v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
            v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
            input.value = v;
        }

        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const cpf = document.getElementById('reg-cpf').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const profile = document.getElementById('reg-profile').value;
            const course = document.getElementById('reg-course').value.trim();
            const pass = document.getElementById('reg-pass').value;
            const passConfirm = document.getElementById('reg-pass-confirm').value;

            if (pass !== passConfirm) {
                showToast('As senhas não coincidem.', 'error');
                return;
            }

            const users = getUsers();
            if (users.some(u => u.email === email)) {
                showToast('Este e-mail já está cadastrado no sistema.', 'error');
                return;
            }
            if (users.some(u => u.cpf === cpf)) {
                showToast('Este CPF já está cadastrado no sistema.', 'error');
                return;
            }

            const newUser = {
                id: 'usr-' + Date.now(),
                name, cpf, email, phone, profile, course: course || 'Comunidade', pass, status: 'Ativo'
            };

            users.push(newUser);
            saveUsers(users);
            setCurrentUser(newUser);
            closeRegisterModal();
            showToast('Cadastro realizado com sucesso!', 'success');
            router.navigate('home');
        }

        function handleForgotPassword(e) {
            e.preventDefault();
            closeForgotPasswordModal();
            showToast('Instruções de recuperação enviadas para o e-mail informado.', 'success');
        }

        // Reservation & Queue Logic
        function requestReserva(bookId) {
            const user = getCurrentUser();
            if (!user) { openLoginModal(); return; }

            const reservas = getReservas();
            const bookReservas = reservas.filter(r => r.bookId === bookId && r.status === 'Ativa');
            
            if (bookReservas.some(r => r.userId === user.id)) {
                showToast('Você já possui uma reserva ativa para esta obra.', 'info');
                return;
            }

            const newReserva = {
                id: 'res-' + Date.now(),
                bookId,
                userId: user.id,
                requestDate: new Date().toISOString(),
                position: bookReservas.length + 1,
                status: 'Ativa'
            };

            reservas.push(newReserva);
            saveReservas(reservas);
            showToast(`Reserva realizada com sucesso! Posição na fila: #${newReserva.position}`, 'success');
            router.navigate('book-detail', bookId);
        }

        function cancelReserva(reservaId) {
            let reservas = getReservas();
            const target = reservas.find(r => r.id === reservaId);
            if (!target) return;

            reservas = reservas.filter(r => r.id !== reservaId);
            // Reorder positions for same book
            let pos = 1;
            reservas.forEach(r => {
                if (r.bookId === target.bookId && r.status === 'Ativa') {
                    r.position = pos++;
                }
            });

            saveReservas(reservas);
            showToast('Reserva cancelada com sucesso.', 'info');
            router.navigate('profile');
        }

        // Loan & Renewal Logic
        function renewLoan(loanId) {
            let loans = getLoans();
            const loan = loans.find(l => l.id === loanId);
            if (!loan) return;

            if (loan.renewCount >= 2) {
                showToast('Limite máximo de renovações atingido (2 vezes).', 'error');
                return;
            }

            // Check if there is active queue for this book
            const reservas = getReservas().filter(r => r.bookId === loan.bookId && r.status === 'Ativa');
            if (reservas.length > 0) {
                showToast('Não é possível renovar: há usuários na fila de espera para esta obra.', 'error');
                return;
            }

            const currentDue = new Date(loan.dueDate);
            currentDue.setDate(currentDue.getDate() + 7);
            loan.dueDate = currentDue.toISOString();
            loan.renewCount += 1;

            saveLoans(loans);
            showToast(`Empréstimo renovado com sucesso! Novo vencimento: ${currentDue.toLocaleDateString()}`, 'success');
            router.navigate('profile');
        }

        // Admin Actions Modals & Handlers
        function openAddBookModal() {
            const categories = getCategories();
            const modal = document.getElementById('dynamic-modal');
            const content = document.getElementById('dynamic-modal-content');

            content.innerHTML = `
                <button onclick="closeDynamicModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl"><i class="fa-solid fa-xmark"></i></button>
                <h3 class="text-xl font-bold text-slate-900 mb-4">Cadastrar Nova Obra Bibliográfica</h3>
                <form onsubmit="handleSaveBook(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Título *</label>
                        <input type="text" id="admin-book-title" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Autor *</label>
                            <input type="text" id="admin-book-author" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Editora *</label>
                            <input type="text" id="admin-book-publisher" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">ISBN *</label>
                            <input type="text" id="admin-book-isbn" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Ano *</label>
                            <input type="number" id="admin-book-year" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" value="2024">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 mb-1">Categoria *</label>
                            <select id="admin-book-cat" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
                                ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Sinopse / Descrição *</label>
                        <textarea id="admin-book-synopsis" rows="3" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">URL da Capa (Opcional)</label>
                        <input type="url" id="admin-book-cover" placeholder="https://..." class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <button type="submit" class="w-full bg-biblio-primary text-white font-semibold py-2.5 rounded-lg text-sm shadow">Salvar Obra</button>
                </form>
            `;
            modal.classList.remove('hidden');
        }

        function closeDynamicModal() {
            document.getElementById('dynamic-modal').classList.add('hidden');
        }

        function handleSaveBook(e) {
            e.preventDefault();
            const books = getBooks();
            const newBook = {
                id: 'book-' + Date.now(),
                title: document.getElementById('admin-book-title').value,
                author: document.getElementById('admin-book-author').value,
                publisher: document.getElementById('admin-book-publisher').value,
                isbn: document.getElementById('admin-book-isbn').value,
                year: parseInt(document.getElementById('admin-book-year').value),
                category: document.getElementById('admin-book-cat').value,
                synopsis: document.getElementById('admin-book-synopsis').value,
                cover: document.getElementById('admin-book-cover').value || 'https://placehold.co/300x450/1e3a8a/ffffff?text=Livro'
            };

            books.push(newBook);
            saveBooks(books);
            closeDynamicModal();
            showToast('Obra cadastrada com sucesso!', 'success');
            router.navigate('admin');
        }

        function openAddCopyModal() {
            const books = getBooks();
            const units = getUnits();
            const modal = document.getElementById('dynamic-modal');
            const content = document.getElementById('dynamic-modal-content');

            content.innerHTML = `
                <button onclick="closeDynamicModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl"><i class="fa-solid fa-xmark"></i></button>
                <h3 class="text-xl font-bold text-slate-900 mb-4">Adicionar Novo Exemplar Físico</h3>
                <form onsubmit="handleSaveCopy(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Obra Bibliográfica *</label>
                        <select id="copy-book-id" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
                            ${books.map(b => `<option value="${b.id}">${b.title} (${b.author})</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Unidade Física *</label>
                        <select id="copy-unit-id" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
                            ${units.map(u => `<option value="${u.id}">${u.name}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Localização na Estante *</label>
                        <input type="text" id="copy-location" required placeholder="ex: Estante C3-Prateleira 1" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <button type="submit" class="w-full bg-biblio-primary text-white font-semibold py-2.5 rounded-lg text-sm shadow">Adicionar Exemplar</button>
                </form>
            `;
            modal.classList.remove('hidden');
        }

        function handleSaveCopy(e) {
            e.preventDefault();
            const copies = getCopies();
            const newCopy = {
                id: 'cop-' + Math.floor(1000 + Math.random() * 9000),
                bookId: document.getElementById('copy-book-id').value,
                unitId: document.getElementById('copy-unit-id').value,
                location: document.getElementById('copy-location').value,
                status: 'Disponível'
            };

            copies.push(newCopy);
            saveCopies(copies);
            closeDynamicModal();
            showToast(`Exemplar ${newCopy.id} adicionado com sucesso!`, 'success');
            router.navigate('admin');
        }

        function openLoanModal(preselectedBookId = null) {
            const users = getUsers().filter(u => u.profile !== 'Bibliotecário/Administrador');
            const copies = getCopies().filter(c => c.status === 'Disponível');
            const modal = document.getElementById('dynamic-modal');
            const content = document.getElementById('dynamic-modal-content');

            content.innerHTML = `
                <button onclick="closeDynamicModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl"><i class="fa-solid fa-xmark"></i></button>
                <h3 class="text-xl font-bold text-slate-900 mb-4">Registrar Novo Empréstimo Físico</h3>
                <form onsubmit="handleCreateLoan(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Usuário Solicitante *</label>
                        <select id="loan-user-id" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
                            ${users.map(u => `<option value="${u.id}">${u.name} (${u.profile})</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Exemplar Disponível *</label>
                        <select id="loan-copy-id" class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white">
                            ${copies.map(c => `<option value="${c.id}">Exemplar #${c.id} (Unidade: ${c.unitId})</option>`).join('')}
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-biblio-primary text-white font-semibold py-2.5 rounded-lg text-sm shadow">Confirmar Empréstimo</button>
                </form>
            `;
            modal.classList.remove('hidden');
        }

        function handleCreateLoan(e) {
            e.preventDefault();
            const userId = document.getElementById('loan-user-id').value;
            const copyId = document.getElementById('loan-copy-id').value;

            const users = getUsers();
            const user = users.find(u => u.id === userId);
            const copies = getCopies();
            const copy = copies.find(c => c.id === copyId);

            // Check if user has pending fines
            const fines = getFines().filter(f => f.userId === userId && f.status === 'Pendente');
            if (fines.length > 0) {
                showToast('Usuário possui multas pendentes e está bloqueado para novos empréstimos.', 'error');
                return;
            }

            // Loan limits calculation based on profile
            const params = getParameters();
            const days = user.profile === 'Professor' ? params.professorDays : params.alunoDays;

            const loanDate = new Date();
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + days);

            const loans = getLoans();
            const newLoan = {
                id: 'loan-' + Date.now(),
                userId,
                copyId,
                bookId: copy.bookId,
                unitId: copy.unitId,
                loanDate: loanDate.toISOString(),
                dueDate: dueDate.toISOString(),
                returnDate: null,
                status: 'Ativo',
                renewCount: 0,
                operator: getCurrentUser().name
            };

            loans.push(newLoan);
            saveLoans(loans);

            // Update copy status
            copy.status = 'Emprestado';
            saveCopies(copies);

            closeDynamicModal();
            showToast('Empréstimo registrado com sucesso!', 'success');
            router.navigate('admin');
        }

        function returnBook(loanId) {
            let loans = getLoans();
            const loan = loans.find(l => l.id === loanId);
            if (!loan) return;

            loan.returnDate = new Date().toISOString();
            loan.status = 'Devolvido';

            // Update copy status back to available
            let copies = getCopies();
            const copy = copies.find(c => c.id === loan.copyId);
            if (copy) {
                copy.status = 'Disponível';
            }

            // Check if there is queue for this book
            let reservas = getReservas();
            const nextReserva = reservas.find(r => r.bookId === loan.bookId && r.status === 'Ativa');
            if (nextReserva && copy) {
                // Automatically assign to first in queue
                copy.status = 'Reservado';
                nextReserva.status = 'Notificado';
                showToast(`Exemplar encaminhado para o primeiro da fila de espera (Usuário ID: ${nextReserva.userId})`, 'info');
            }

            saveLoans(loans);
            saveCopies(copies);
            saveReservas(reservas);

            showToast('Devolução registrada com sucesso!', 'success');
            router.navigate('admin');
        }

        function payFine(fineId) {
            let fines = getFines();
            const fine = fines.find(f => f.id === fineId);
            if (fine) {
                fine.status = 'Pago';
                saveFines(fines);
                showToast('Multa regularizada com sucesso!', 'success');
                router.navigate('admin');
            }
        }

        function deleteBook(bookId) {
            if (confirm('Deseja realmente inativar esta obra do catálogo?')) {
                let books = getBooks();
                books = books.filter(b => b.id !== bookId);
                saveBooks(books);
                showToast('Obra inativada.', 'info');
                router.navigate('admin');
            }
        }

        function openEditProfileModal() {
            const user = getCurrentUser();
            const modal = document.getElementById('dynamic-modal');
            const content = document.getElementById('dynamic-modal-content');

            content.innerHTML = `
                <button onclick="closeDynamicModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl"><i class="fa-solid fa-xmark"></i></button>
                <h3 class="text-xl font-bold text-slate-900 mb-4">Editar Perfil</h3>
                <form onsubmit="handleUpdateProfile(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Nome Completo</label>
                        <input type="text" id="edit-name" value="${user.name}" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Telefone / WhatsApp</label>
                        <input type="text" id="edit-phone" value="${user.phone}" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <button type="submit" class="w-full bg-biblio-primary text-white font-semibold py-2.5 rounded-lg text-sm shadow">Salvar Alterações</button>
                </form>
            `;
            modal.classList.remove('hidden');
        }

        function handleUpdateProfile(e) {
            e.preventDefault();
            let user = getCurrentUser();
            user.name = document.getElementById('edit-name').value;
            user.phone = document.getElementById('edit-phone').value;

            let users = getUsers();
            users = users.map(u => u.id === user.id ? user : u);
            saveUsers(users);
            setCurrentUser(user);

            closeDynamicModal();
            showToast('Perfil atualizado com sucesso!', 'success');
            router.navigate('profile');
        }

        function openChangePasswordModal() {
            const modal = document.getElementById('dynamic-modal');
            const content = document.getElementById('dynamic-modal-content');

            content.innerHTML = `
                <button onclick="closeDynamicModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl"><i class="fa-solid fa-xmark"></i></button>
                <h3 class="text-xl font-bold text-slate-900 mb-4">Alterar Senha</h3>
                <form onsubmit="handleChangePassword(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Senha Atual</label>
                        <input type="password" id="pass-current" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-700 mb-1">Nova Senha</label>
                        <input type="password" id="pass-new" required class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                    </div>
                    <button type="submit" class="w-full bg-biblio-primary text-white font-semibold py-2.5 rounded-lg text-sm shadow">Atualizar Senha</button>
                </form>
            `;
            modal.classList.remove('hidden');
        }

        function handleChangePassword(e) {
            e.preventDefault();
            const current = document.getElementById('pass-current').value;
            const newPass = document.getElementById('pass-new').value;

            let user = getCurrentUser();
            if (user.pass !== current) {
                showToast('Senha atual incorreta.', 'error');
                return;
            }

            user.pass = newPass;
            let users = getUsers();
            users = users.map(u => u.id === user.id ? user : u);
            saveUsers(users);
            setCurrentUser(user);

            closeDynamicModal();
            showToast('Senha alterada com sucesso!', 'success');
            router.navigate('profile');
        }

        /* Initial boot on window load */
        window.onload = function() {
            updateNavAuth();
            router.navigate('home');
        };
    