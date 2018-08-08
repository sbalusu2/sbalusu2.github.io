<script type="text/javascript">
	$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
</script>
<script type="text/javascript">
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
</script>

<script type="text/javascript">
$(document).ready(function () {
    setTimeout(function(){
        $('#down').fadeIn(500);
    }, 3400);
});
</script>

 <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init({
  duration: 1200,
})
  </script>
  <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<script type="text/javascript">
	 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
</script>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>