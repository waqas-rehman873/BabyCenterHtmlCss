document.addEventListener('DOMContentLoaded', function () {
    // Get all links with class 'comm-nav-a'
    const links = document.querySelectorAll('.comm-nav-a');
    // Add click event listener to each link
    links.forEach(link => {
      link.addEventListener('click', function () {
        this.classList.toggle('active');
        links.forEach(l => {
          if (l !== this) {
            l.classList.remove('active');
          }
        });
      });
    });
});