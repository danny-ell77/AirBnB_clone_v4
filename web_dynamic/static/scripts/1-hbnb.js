$(document).ready(function () {
  var amenities = {};
  $('input[type="checkbox"]').change(function () {
    var id = $(this).attr('data-id');
    var name = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      amenities[id] = name;
    } else {
      delete amenities[id];
    }
    $('div.amenities h4').text(Object.values(amenities).join(', '));
  });
});

