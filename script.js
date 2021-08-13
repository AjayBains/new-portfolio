const allSections = document.querySelectorAll("section");

const revealSection = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("hide");
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hide");
});
