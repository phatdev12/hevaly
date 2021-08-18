function hevaly(options){
    options.class == '' || ""
    options.padding == '' || ""
    options.margin == '' || ""
    options.background == '' || ""
    options.shadow_type == '' || ""
    options.borderRadius == '' | ""
    try{
        const elements = document.querySelectorAll(options.class);
        const elementss = document.getElementById("test")
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
            if(options.borderRadius === options.borderRadius){
                element.style.borderRadius = options.borderRadius
            }
        });
    } catch(err) {
        console.log(err)
    }
    
}
module.exports = {
    hevaly: hevaly
}