const accordionItemHeaders = document.querySelectorAll('.accordion__item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {
        accordionItemHeader.classList.toggle('active');

        const accordionItemBodyWrap = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains('active')) {
            accordionItemBodyWrap.style.maxHeight = accordionItemBodyWrap.scrollHeight + 'px';
        } else {
            accordionItemBodyWrap.style.maxHeight = 0;
        }
    });
});


const accordionTableItemHeaders = document.querySelectorAll('.acc-table__item-header');

accordionTableItemHeaders.forEach(accordionTableItemHeader => {
    accordionTableItemHeader.addEventListener('click', () => {
        accordionTableItemHeader.classList.toggle('active');

        const accordionTableItemBodyWrap = accordionTableItemHeader.nextElementSibling;

        const accordionTableItemBody = accordionTableItemBodyWrap.querySelector('.acc-body-wrap div');

        if(accordionTableItemHeader.classList.contains('active')) {
                accordionTableItemBody.style.maxHeight = accordionTableItemBody.scrollHeight + 'px';
        } else {
            accordionTableItemBody.style.maxHeight = 0;
        }
    });
});