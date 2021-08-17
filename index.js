// Code by Phat's Dev

function hevaly(options){
    options.class == '' || ""
    options.padding == '' || ""
    options.margin == '' || ""
    options.background == '' || ""
    options.shadow_type == '' || ""

    const elements = document.querySelectorAll(options.class);
    elements.forEach(element => {
        if(options.shadow_type == options.shadow_type){
            element.style.boxShadow = options.shadow_type;
        }
        if(options.padding === options.padding){
            element.style.padding = options.padding;
        }
        if(options.margin === options.margin){
            element.style.margin = options.margin;
        }
        if(options.background === options.background){
            element.style.background = options.background;
        }
    });
}


module.exports.hevaly = hevaly;