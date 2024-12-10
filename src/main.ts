// Smooth scrolling functionality
document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = (event.target as HTMLAnchorElement).getAttribute('href')?.slice(1);
      const targetElement = document.getElementById(targetId!);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    });
  });