const accordionItems = document.querySelectorAll(".accordionItem");
const accordionTitleRows = document.querySelectorAll(".accordionTitleRow");

// add event listener to each title row
accordionTitleRows.forEach(function(e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion() {
  const itemClass = this.parentNode.className;
  accordionItems.forEach(function(e) {
    e.className = "accordionItem closed";
  });

  if (itemClass === "accordionItem closed") {
    this.parentNode.className = "accordionItem";
  }
}
