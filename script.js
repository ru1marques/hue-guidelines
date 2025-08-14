//animação dos blocos do header
gsap.fromTo(".a1", 
  { y: 40, opacity: -0 }, 
  { y: 0, opacity: 1, duration: 1, ease: "slow2.out" }
);

gsap.fromTo(".a2", 
  { y: 40, opacity: -0 }, 
  { y: 0, opacity: 1, duration: 2, ease: "slow2.out" }
);

gsap.fromTo(".a3", 
  { y: 40, opacity: -0 }, 
  { y: 0, opacity: 1, duration: 2.5, ease: "slow2.out" }
);

//pequeno movimento das imagens quando são visualizadas
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img-grid").forEach((img) => {
  gsap.from(img, {
    y: 40,           // deslocamento para baixo
    opacity: 0,      // começa transparente
    duration: 1.2,   // duração da animação
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 90%",   // quando a imagem estiver 90% do viewport para baixo
      toggleActions: "play none none none",
      once: true          // anima apenas uma vez
    }
  });
});