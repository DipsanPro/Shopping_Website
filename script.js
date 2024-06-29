// reveal.js

// Select all elements with the class 'content'
const sections = document.querySelectorAll('.content');

// Observer options: define threshold for when the elements should start revealing
const options = {
    root: null, // use the viewport as the root
    rootMargin: '0px', // no margin around the root
    threshold: 0.3 // reveal when 30% of the element is visible
};

// Intersection Observer callback function
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // add 'reveal' class when target is in view
            observer.unobserve(entry.target); // stop observing after revealing
        }
    });
}, options);

// Observe each section with the class 'content'
sections.forEach(section => {
    observer.observe(section);
});
