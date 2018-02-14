$( document ).ready(function () {
    'use strict';

    function openChat() {
      if($('.chat_container').is(":visible")) {
        $('.chat_container').width(254);
        $(".chat_container").css('right', 20);
        $('.from_row').show();
        $('.chat_content').show();
        $('.chat_input_container').show();
        $('.close_chat').show();
      } else {
        $('.chat_container').show();
      }
    }

    $('#resume_chat_link').click(function () {
      if($('.chat_content').is(":visible")) {
        $('.chat_container').width(149);
        $(".chat_container").css('right', 120);
        $('.from_row').hide();
        $('.chat_content').hide();
        $('.chat_input_container').hide();
        $('.close_chat').hide();
      } else {
        openChat()
      }
    })

    $('.close_chat').click(function () {
      $('.chat_container').hide();
    })

    $('#btn_message').click(function () {
      openChat()
    })
});
