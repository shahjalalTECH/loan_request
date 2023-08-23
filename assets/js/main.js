//

var slider = document.getElementById("bob_myRange");
var output = document.getElementById("bob_demo");
if (output) {
  output.innerHTML = slider.value;
}
var slider_value_int = 0;
slider_value_int = parseInt(slider.value);
jQuery('.bob_range_slider').on('change', function () {
  slider_value_int = parseInt(jQuery(this).val())
})


var bob_range_decrement = document.querySelector(".bob_range_decrement");
if (bob_range_decrement) {
  bob_range_decrement.addEventListener("click", function () {
    slider_value_int -= 500;
    output.innerHTML = slider_value_int;
  });
}

var bob_range_increment = document.querySelector(".bob_range_increment");
if (bob_range_increment) {
  bob_range_increment.addEventListener("click", function () {
    slider_value_int += 500;
    output.innerHTML = slider_value_int;
  });
}

if (slider) {
  slider.oninput = function () {
    output.innerHTML = this.value;
  }
}

// Div show hide

var bob_main_section_title = document.querySelector(".bob_main_section_title");
var bob_loan_request_steps_second_part = document.querySelector("#bob-loan-request-steps_second_part");
var bob_loan_request_steps_first_part = document.querySelector("#bob-loan-request-steps_first_part");
if (bob_loan_request_steps_first_part) {
  var start_your_application = bob_loan_request_steps_first_part.querySelector(".start_your_application");
}
if (start_your_application) {
  start_your_application.addEventListener("click", function (e) {
    e.preventDefault();
    bob_loan_request_steps_first_part.style.display = "none";
    bob_loan_request_steps_second_part.style.display = "block";
    bob_main_section_title.style.display = "none";
  });
}
//first step
jQuery('.bob_input_box_fields6').on('click', function () {
  jQuery('.bob_input_box_fields6').removeClass('bob-required');
})
//second step
jQuery('.second-step-field').on('change', function () {
  var dataVal = jQuery(this).val();
  if (dataVal != null || dataVal != '') {
    jQuery(this).removeClass('bob-required')
    $(this).closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
  }
})
// third step
jQuery('.third-step-field').on('click', function () {
  if (jQuery(this).is(':checked')) {
    jQuery('.third-step-field').removeClass('bob-required');
    jQuery('.bob-third-error-msg').html('')
  }
})
// third step
jQuery('.fourth-step-field').on('click', function () {
  if (jQuery(this).is(':checked')) {
    jQuery('.fourth-step-field').removeClass('bob-required');
    jQuery('.bob-fourth-error-msg').html('')
  }
})
//fifth step
jQuery('.fifth-step-field').on('change', function () {
  var dataVal = jQuery(this).val();
  if (dataVal != null || dataVal != '') {
    // if (jQuery(this).hasClass('bob-email')) {
    //   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //   if (regex.test(jQuery(this).val())) {
    //     jQuery(this).removeClass('bob-required')
    //     $(this).closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
    //   } else {
    //     jQuery(this).removeClass('bob-required')
    //     $(this).closest('.bob-loan-request-multiple-steps-form-input-field').after('<p>Enter valid email</p>');
    //   }
    // } else {
    // }
    jQuery(this).removeClass('bob-required')
    $(this).closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
  }
})
//six step
jQuery('.six-step-field').on('change', function () {
  var dataVal = jQuery(this).val();
  if (dataVal != null || dataVal != '') {
    jQuery(this).removeClass('bob-required')
    $(this).next('p').remove();
  }
})
// seven step
jQuery('.seven-step-field').on('click', function () {
  if (jQuery(this).is(':checked')) {
    jQuery('.seven-step-field').removeClass('bob-required');
    jQuery('.bob-seven-error-msg').html('')
  }
})
// eight step
jQuery('.eight-step-field input').on('click', function () {
  if (jQuery(this).is(':checked')) {
    $(this).closest('.eight-step-field').next('p').remove();
    jQuery(this).closest('.eight-step-field').removeClass('bob-required');
  }
})
jQuery('.eight-step-field-text').on('change', function () {
  var dataVal = jQuery(this).val()
  if (dataVal != null || dataVal != '') {
    $(this).closest('.bob-add-inner-box').next('p').remove();
    jQuery(this).removeClass('bob-required');
  } else {
    jQuery(this).addClass('bob-required');
  }
})
// nine step
jQuery('.nine-step-field').on('change', function () {
  if (jQuery(this).is(':checked')) {
    jQuery(this).closest('.cutsom-checkbox-row').next('p').remove();
    jQuery(this).removeClass('bob-required');
  }
})
jQuery('.bob-next-btn').on('click', function (e) {
  e.preventDefault();
  var step = parseInt(jQuery(this).attr('data-step'));
  var nextStep = 0;
  if (step == 1) {
    if (jQuery('.bob_input_box_fields6').hasClass('bob-required')) {
      nextStep = 0;
    } else {
      nextStep = 1;
    }
  } else if (step == 2) {
    if (jQuery('.second-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.second-step-field.bob-required').closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
      jQuery('.second-step-field.bob-required').closest('.bob-loan-request-multiple-steps-form-input-field').after('<p>This field is required</p>');
    } else {
      nextStep = 1;
    }
  } else if (step == 3) {
    if (jQuery('.third-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.bob-third-error-msg').html('<p>This field is required.</p>')
    } else {
      nextStep = 1;
    }
  } else if (step == 4) {
    if (jQuery('.fourth-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.bob-fourth-error-msg').html('<p>This field is required.</p>')
    } else {
      nextStep = 1;
    }
  } else if (step == 5) {
    if (jQuery('.fifth-step-field').hasClass('bob-required')) {
      if (jQuery('.fifth-step-field').hasClass('bob-email')) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(jQuery('.bob-email').val())) {
          nextStep = 1;
          jQuery('.bob-email').removeClass('bob-required')
          jQuery('.bob-email').closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
        } else {
          nextStep = 0;
          jQuery('.bob-email').addClass('bob-required')
          jQuery('.bob-email').closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
          jQuery('.bob-email').closest('.bob-loan-request-multiple-steps-form-input-field').after('<p>Enter valid email</p>');
        }
      } else {
        nextStep = 0;
        jQuery('.fifth-step-field.bob-required').closest('.bob-loan-request-multiple-steps-form-input-field').next('p').remove();
        jQuery('.fifth-step-field.bob-required').closest('.bob-loan-request-multiple-steps-form-input-field').after('<p>This field is required</p>');
      }


    } else {
      nextStep = 1;
    }
  } else if (step == 6) {
    if (jQuery('.six-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.six-step-field.bob-required').next('p').remove();
      jQuery('.six-step-field.bob-required').after('<p>This field is required</p>');
    } else {
      nextStep = 1;
    }
  } else if (step == 7) {
    if (jQuery('.seven-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.bob-seventh-error-msg').html('<p>This field is required.</p>')
    } else {
      nextStep = 1;
    }
  } else if (step == 8) {
    if (jQuery('.eight-step-field-text').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.eight-step-field-text.bob-required').closest('.bob-add-inner-box').next('p').remove();
      jQuery('.eight-step-field-text.bob-required').closest('.bob-add-inner-box').after('<p>This field is required</p>');
    } else {
      nextStep = 1;
    }
  } else if (step == 9) {
    if (jQuery('.nine-step-field').hasClass('bob-required')) {
      nextStep = 0;
      jQuery('.nine-step-field.bob-required').closest('.cutsom-checkbox-row').next('p').remove();
      jQuery('.nine-step-field.bob-required').closest('.cutsom-checkbox-row').after('<p>This field is required</p>');
    } else {
      if (jQuery('.nine-step-field').is(':checked')) {
        nextStep = 1;
      } else {
        jQuery('.nine-step-field').addClass('bob-required')
      }
    }
  }
  if (nextStep == 1) {
    step++;
    var totalPercentage = jQuery('.bob-progress-container').attr('data-percentage')
    jQuery('.bob-progress-container').attr('data-percentage', parseInt(totalPercentage) + 10)
    if (step != 10) {
      jQuery('.bob-loan-request-multiple-steps').hide();
    }
    jQuery(".bob-step-" + step).show();
    setPercentage();
  }
});


//Active Class 1

var bob_loan_request_third_step = document.getElementById("bob-loan-request-third-step");
if (bob_loan_request_third_step) {
  var bob_input_box_fields = bob_loan_request_third_step.getElementsByClassName("bob_input_box_fields");
}

if (bob_input_box_fields) {
  for (var i = 0; i < bob_input_box_fields.length; i++) {
    bob_input_box_fields[i].addEventListener("click", function () {
      var current = bob_loan_request_third_step.getElementsByClassName("bob_active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" bob_active", "");
      }
      this.className += " bob_active";
    });
  }
}


//Active Class 2

var bob_loan_request_fourth_step = document.getElementById("bob-loan-request-fourth-step");
if (bob_loan_request_fourth_step) {

  var bob_input_box_fields2 = bob_loan_request_fourth_step.getElementsByClassName("bob_input_box_fields2");
}
if (bob_input_box_fields2) {
  for (var i = 0; i < bob_input_box_fields2.length; i++) {
    bob_input_box_fields2[i].addEventListener("click", function () {
      var current = bob_loan_request_fourth_step.getElementsByClassName("bob_active2");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" bob_active2", "");
      }
      this.className += " bob_active2";
    });
  }
}


//Active Class 3

var bob_loan_request_eighth_step = document.getElementById("bob-loan-request-eighth-step");
if (bob_loan_request_eighth_step) {
  var bob_input_box_fields3 = bob_loan_request_eighth_step.getElementsByClassName("bob_input_box_fields3");
}
if (bob_input_box_fields3) {

  for (var i = 0; i < bob_input_box_fields3.length; i++) {
    bob_input_box_fields3[i].addEventListener("click", function () {
      var current = bob_loan_request_eighth_step.getElementsByClassName("bob_active3");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" bob_active3", "");
      }
      this.className += " bob_active3";
    });
  }
}


//Active Class 4

// var bob_loan_request_years_box_parent4 = document.querySelector(".bob-loan-request-years-box-parent4");
// var bob_input_box_fields4 = bob_loan_request_years_box_parent4.getElementsByClassName("bob_input_box_fields4");
// for (var i = 0; i < bob_input_box_fields4.length; i++) {
//   bob_input_box_fields4[i].addEventListener("click", function () {
//     var current = bob_loan_request_years_box_parent4.getElementsByClassName("bob_active4");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" bob_active4", "");
//     }
//     this.className += " bob_active4";
//   });
// }

//Active Class 5

// var bob_loan_request_ninth_step = document.getElementById("bob-loan-request-ninth-step");
// var bob_input_box_fields5 = bob_loan_request_ninth_step.getElementsByClassName("bob_input_box_fields5");
// for (var i = 0; i < bob_input_box_fields5.length; i++) {
//   bob_input_box_fields5[i].addEventListener("click", function () {
//     var current = bob_loan_request_ninth_step.getElementsByClassName("bob_active5");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" bob_active5", "");
//     }
//     this.className += " bob_active5";
//   });
// }

//Active Class 6

var bob_loan_request_years_box_parent6 = document.querySelector(".bob-loan-request-years-box-parent6")
if (bob_loan_request_years_box_parent6) {

  var bob_input_box_fields6 = bob_loan_request_years_box_parent6.getElementsByClassName("bob_input_box_fields6");
}
if (bob_input_box_fields6) {

  for (var i = 0; i < bob_input_box_fields6.length; i++) {
    bob_input_box_fields6[i].addEventListener("click", function () {
      var current = bob_loan_request_years_box_parent6.getElementsByClassName("bob_active6");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" bob_active6", "");
      }
      this.className += " bob_active6";
    });
  }
}

//Active Class 6

// var bob_loan_request_years_box_parent_last = document.querySelector(".bob-loan-request-years-box-parent-last")
// var bob_input_box_fields_last = bob_loan_request_years_box_parent_last.getElementsByClassName("bob_input_box_fields_last");
// for (var i = 0; i < bob_input_box_fields_last.length; i++) {
//   bob_input_box_fields_last[i].addEventListener("click", function () {
//     var current = bob_loan_request_years_box_parent_last.getElementsByClassName("bob_active_last");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" bob_active_last", "");
//     }
//     this.className += " bob_active_last";
//   });
// }


jQuery(document).ready(function () {

  jQuery('.bob_please_specify2_click').on('click', function () {
    jQuery('.bob_please_specify2').removeClass('bob-display-hide');
    jQuery('.bob_please_specify2').addClass('bob-display-show');
  })
  jQuery('.bob_please_specify2_click_hide').on('click', function () {
    jQuery('.bob_please_specify2').removeClass('bob-display-show');
    jQuery('.bob_please_specify2').addClass('bob-display-hide');
  })

  jQuery('.bob_please_specify_click').on('click', function () {
    jQuery('.bob_please_specify').removeClass('bob-display-hide');
    jQuery('.bob_please_specify').addClass('bob-display-show');
  })
  jQuery('.bob_please_specify_click_hide').on('click', function () {
    jQuery('.bob_please_specify').removeClass('bob-display-show');
    jQuery('.bob_please_specify').addClass('bob-display-hide');
  })

  jQuery('.bob_please_specify3_click').on('click', function () {
    jQuery('.bob_please_specify3').removeClass('bob-display-hide');
    jQuery('.bob_please_specify3').addClass('bob-display-show');
  })
  jQuery('.bob_please_specify3_click_hide').on('click', function () {
    jQuery('.bob_please_specify3').removeClass('bob-display-show');
    jQuery('.bob_please_specify3').addClass('bob-display-hide');
  })

})

//initial call

const progressContainer = document.querySelector('.bob-progress-container');

setPercentage();



function setPercentage() {
  if (progressContainer) {

    const percentage = progressContainer.getAttribute('data-percentage') + '%';
    const progressEl = progressContainer.querySelector('.bob-progress');
    const percentageEl = progressContainer.querySelector('.bob-percentage');
  }

  if (progressEl) {
    progressEl.style.width = percentage;
  }

  if (percentageEl) {
    percentageEl.innerText = percentage;
    percentageEl.style.left = percentage;
  }
}


//=============== Loader Design =====================


var circularProgress = document.querySelector(".bob-loader-circular-progress");
var progressValue = document.querySelector(".bob-loader-progress-value");
var bob_loader_parent_container = document.querySelector(".bob-loader-parent-container");
var bob_loader_text = document.querySelector(".bob-loader-text");
console.log();



// final button
jQuery('.bob-final-step').on('click', function (e) {
  e.preventDefault();
  var progressStartValue = 0,
    progressEndValue = 100,
    speed = 40;

  var progress = setInterval(() => {

    progressStartValue++;
    if (progressValue) {

      progressValue.textContent = `${progressStartValue}%`;
    }

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
      if (bob_loader_text) {

        bob_loader_text.textContent = "Successful";
      }
    }

    if (progressStartValue == 100) {
      jQuery('.bob-loan-request-multiple-steps-form').submit()
    }

    // if(bob_loader_parent_container.style.display == "none") {
    //   clearInterval(progress);
    // }

  }, speed);

  jQuery('.bob-loader-parent-container').css('display', 'flex')

})