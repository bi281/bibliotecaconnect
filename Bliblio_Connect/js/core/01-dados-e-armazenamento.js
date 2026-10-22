// BiblioConnect — arquivo separado por responsabilidade.

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

        