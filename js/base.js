/* Elements animations with IntersectionObserver in modern browsers */
if("IntersectionObserver" in window){
    document.body.classList.add("modernbrws");
  
    const animDivs = document.querySelectorAll('div');
    const options = { threshold: [0.5] };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry => {
            if (entry.intersectionRatio >= 0.5) {
                entry.target.classList.add('anim');
                observer.unobserve(entry.target);
            }
        }));
    }, options);

    animDivs.forEach(div => {
      observer.observe(div);
    });
}