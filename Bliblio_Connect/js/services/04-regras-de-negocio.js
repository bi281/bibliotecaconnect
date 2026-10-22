// BiblioConnect — arquivo separado por responsabilidade.
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
    