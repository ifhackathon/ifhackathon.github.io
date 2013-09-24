$('#registration').on('submit', function(event){
    $('.btn-submit').prop('disabled', true);
    event.preventDefault();
    var values = $(this).serialize(),
        url    = $(this).attr('action'),
        jqxhr = $.post(url, values, function(){}, 'text');

   
    jqxhr.always(function(jqXHR, textStatus, errorThrown){
      $('.slide3').addClass('success');
    });
});