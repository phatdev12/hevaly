class hevalyButton {
    constructor(data = {}){
        try {
            this.setup(data)
        } catch (error) {
            return
        }       
    }
    setup(data){
        try {
            let btn = document.createElement("button");
            if(data.style === false){
                btn.style = "none"
            }
            else{
                btn.style.background = "#e0e0e0"
                btn.style.borderStyle = "none"
                btn.style.borderRadius = "8px"
                btn.style.color = "#696969"
                btn.style.padding = "1rem 1rem"
            }
            /**
             * setText for button
             * @typedef {Object}
             * @property {string}
             * @property {string}
             * @property {string}
             */

            this.setText = (options) => {
                options.text == '' || "" ?? null;
                if(options.text === null || options.text === undefined){
                    return
                }
                if(options.text === options.text){
                    btn.innerHTML = options.text
                }
                return options.text
            }

            /**
             * setClass for button
             * @typedef {Object}
             * @property {string}
             * @property {string}
             * @property {string}
             */

            this.setClass = (options) => {
                options.class == '' || "" ?? null;
                if(options.class === null || options.class === undefined){
                    return
                }
                if(options.class === options.class){
                    btn.className = options.class

                }
                return options.class
            }

            document.body.appendChild(btn);
            return this.setClass, this.setText
        } catch (error) {
            return
        }  
    }
};
module.exports = {
    hevalyButton: hevalyButton
};