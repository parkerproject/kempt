$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
        return false
      }
    }
  })

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  $('.submit-js').click(function (e) {
    e.preventDefault()
    var self = $(this)
    var error = self.parents('form').find('.error')
    var email = self.parents('form').find('.email-js').val()
    var zip_code = self.parents('form').find('.zip_code-js').val()
    var form = self.parents('form')
    if (zip_code === '') {
      error.text('Enter zip code')
    } else if (!validateEmail(email)) {
      error.text('Enter valid email')
    } else {
      self.text('..processing')
      $(form).submit()
    }
  })
})