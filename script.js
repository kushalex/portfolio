const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        let toggleIcon = item.querySelector(".toggle-icon");

        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            description.style.visibility = 'visible';
            toggleIcon.classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px";
            description.style.visibility = 'hidden';
            toggleIcon.classList.replace("fa-minus", "fa-plus");
        }
    });
});
