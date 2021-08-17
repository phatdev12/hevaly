// Code by Phat's Dev

const elements = document.getElementById("hevaShadow");

function hevaShadow(options)
    if(options.shadowType === 'hard')
        options.shadowType = '0px';
    else
        options.shadowType = '15px';
    elements.array.forEach(element => {
        elements.style.boxShadow = `10px 10px ${options.shadowType} 1px rbg(0,0,0,0.12)`
        if(options.padding)
            elements.style.padding = '1rem';
    });


function hevaButton()
    let button = document.createElement('a')
    button.setAttribute('class', 'button');
    function setPadding()
        const padding = '';
        button.style.padding = padding;

    function setPadding()
        const background = '';
        button.style.background = '' ;
