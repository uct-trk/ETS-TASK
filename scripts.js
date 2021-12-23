//custom dropdown
jQuery(function ($) {
    $('.active-custom a.clickable-custom').on("click", function (e) {
        if ($(this).hasClass('panel-collapsed')) {
            // expand the panel
            $(this).parents('.active-custom').find('.collapsein-custom').slideUp();
            $(this).removeClass('panel-collapsed');
        }
        else {
            // collapse the panel
            $(this).parents('.active-custom').find('.collapsein-custom').slideDown();
            $(this).addClass('panel-collapsed');
        }
    });
});

// click inside dropdown and prevent closing
$('.counter-dropdown').click(function (e) {
    e.stopPropagation();
})

// counter button group
let counter = document.getElementById('counter');
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let count = 1
inc.addEventListener("click", () => {
    count++
    counter.innerHTML = count
})
dec.addEventListener("click", () => {
    let a = counter.innerHTML
    if (a == 1) {
        count = a
    } else {
        count--
    }
    counter.innerHTML = count
});


// date arrange
let basla = document.getElementById("begin")
let bitir = document.getElementById("end")
let gece = document.getElementById("nigth-count")
let day = document.getElementById("day")
last = document.getElementById("last")
let one_day = 1000 * 60 * 60 * 24;

$(function () {
    $('div[name="daterange"]').daterangepicker({
        opens: 'left',
        format: "mm/dd/yyyy",

    }, function (start, end, label) {
        basla.innerText = start.format('YYYY-MM-DD');
        bitir.innerText = end.format('YYYY-MM-DD');
        gece.innerText = Math.floor((end - start) / one_day);
        day.innerText = start.format("dd")
        last.innerText = end.format("dd")

    });
});

// CUSTOM MOBILE SLIDER
let currentIndex = 0;
items = $('.custom-slider .slide-item'),
    itemAmt = items.length;
function cycleItems() {
    var item = $('.custom-slider .slide-item').eq(currentIndex);
    items.hide().removeClass('active');;
    item.css('display', 'inline-block').addClass('custom-active');
}

var autoSlide = setInterval(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
    }, 6000);
    
    $('.next').click(function() {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
      currentIndex = 0;
    }
    cycleItems();
    });
    
    $('.prev').click(function() {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = itemAmt - 1;
    }
    cycleItems();
    });


