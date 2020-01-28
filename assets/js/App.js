$( document ).ready(function () {

    // Mises en places de la sidebar

    $('#header-grow-button').click(function () {
        $('.sidebar').toggleClass('sidebar-minimized');
        $('.sidebar-item').toggleClass('sidebar-item-minimized');
    
        if (localStorage.getItem('menuCollapse') !== "Collapse") {
            localStorage.setItem('menuCollapse', "Collapse");
        }
        else
        {
            localStorage.setItem('menuCollapse', "NotCollapse");
        }
    });

    $('.item-grow').click(function () {
        $(this).next().toggleClass('dp-none');
    })

    $('a').click(function () {
        var item = $(this);
        if (!item.hasClass('item-grow')) {
            (item.hasClass('sidebar-item')) ? localStorage.setItem('currentActive', item.attr('id')) : localStorage.setItem('currentActive', undefined);
        }
    })

    
    if (localStorage.getItem('menuCollapse') === "Collapse") {
        $('.sidebar').toggleClass('sidebar-minimized');
        $('.sidebar-item').toggleClass('sidebar-item-minimized');
    }

    if(localStorage.getItem('currentActive'))
    {
        var currentObject = $('#' + localStorage.getItem('currentActive'));
        if (currentObject) {
            currentObject.toggleClass('active');
            currentObject.parents('.sidebar-subbed').toggleClass('dp-none')
        }
    }

    $('.sidebar').toggleClass('dp-none');

    
})

