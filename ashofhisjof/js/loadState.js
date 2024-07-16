document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[data-state]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const stateCode = this.getAttribute('data-state');
            localStorage.setItem('selectedState', stateCode);
            window.location.href = this.href;
        });
    });
});
