
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('[id^="filter-button"]');

    // Get all sections
    const sections = document.querySelectorAll(".section");

    // Add click event listeners to filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");

        // Hide all sections
        sections.forEach((section) => {
          section.classList.add("d-none");
        });

        // Show the selected section
        document.getElementById(filterValue).classList.remove("d-none");

        // Remove active class from all buttons
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });

        // Add active class to the clicked button
        button.classList.add("active");
      });
    });