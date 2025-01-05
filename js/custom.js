document.addEventListener("scroll", function () {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    const circle = document.getElementById("progress-circle");
    circle.style.background = `conic-gradient(#37c6c0 ${scrolled}%, #f5f5f5 ${scrolled}%)`;
    circle.textContent = `${Math.round(scrolled)}%`;
  });
  