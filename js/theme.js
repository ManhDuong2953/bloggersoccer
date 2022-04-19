window.onload = function () {
    const themeBtn = document.getElementById('toggleBtn');
    themeBtn.addEventListener('click', function () {
      const root = document.querySelector(':root');
      console.log(root)
      const isLightMode = root.getAttribute('data-theme') === 'dark' ? false : true;
      if (isLightMode) {
        root.setAttribute('data-theme', 'dark');
        root.style.transition= "all .5s ease";
      } else {
        root.setAttribute('data-theme', 'light');
        root.style.transition= "all .5s ease";
      }
      this.classList.toggle('active');
    });
  };