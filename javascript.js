
// sets year 4 grades to default to display
document.getElementById('section1').classList.add('active');
       
// toggles to show years for grades
function toggleContent(sectionId) {
  // Hide content
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function(section) {
    section.classList.remove('active');
  });

  // Show content
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}


// make nav-bar contacts button also open contact info page
$(document).ready(function() {
  $("#contactInfoLink").on("click", function() {
      $("#ContactsModel").modal("show");
  });
});
