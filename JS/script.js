document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Abre o modal
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
        });
    });

    // Fecha o modal ao clicar no X
    modalCloseButtons.forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
         });
    });

  // Fecha o modal ao clicar fora
    window.addEventListener('click', function(event) {
       modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });


    // Alterna o tema
    themeToggleBtn.addEventListener('click', function() {
        if (this.checked) { //this referencia o input
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
});