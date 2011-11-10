function minimaliseTwitterByDotJS() {
  $('.trends-inner').parent().hide();
  $('.dashboard-activity-teaser-inner').parent().hide();
  $('.recommended-followers').parent().hide();
  $('.definition .promo').parent().parent().hide();
  setTimeout(minimaliseTwitterByDotJS, 500);
}

setTimeout(minimaliseTwitterByDotJS, 2000);
