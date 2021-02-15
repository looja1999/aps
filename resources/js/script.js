// Variables
const header = document.querySelector("header");

// Adding observer on header
const headerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};
const headerObs = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting)
    header.querySelector("nav").classList.add("sticky");
  else header.querySelector("nav").classList.remove("sticky");
  console.log(entry);
};
const headerObserver = new IntersectionObserver(headerObs, headerOptions);
headerObserver.observe(header);
