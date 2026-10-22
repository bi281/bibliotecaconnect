// BiblioConnect — arquivo separado por responsabilidade.
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

        