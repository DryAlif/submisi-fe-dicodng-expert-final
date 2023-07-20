const DrawerInitiator = {
  init({
    togglebutton,
    navbarLinks,
    navbar,
    header /** skipContent, textContext, */,
  }) {
    window.addEventListener('scroll', (event) => {
      this._scrolled(navbar, header, event);
    });

    togglebutton.addEventListener('click', (event) => {
      this._togglebutton(navbarLinks, navbar, event);
    });
  },

  _togglebutton(navbarLinks, navbar, event) {
    event.stopPropagation();
    navbarLinks.classList.toggle('active');
    navbarLinks.classList.toggle('bg-dark');
    navbar.classList.toggle('bg-dark');
  },

  _scrolled(navbar, header, event) {
    event.stopPropagation();
    const Options = {
      threshold: 0.8,
    };

    const scrollObserver = new IntersectionObserver(
      (
        entries
        // scrollObserver,
      ) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navbar.style.backgroundColor = '#333';
          } else {
            navbar.style.backgroundColor = 'transparent';
          }
        });
      },
      Options
    );

    scrollObserver.observe(header);
  },
};

export default DrawerInitiator;
