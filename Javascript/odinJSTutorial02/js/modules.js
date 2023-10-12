//Mocking document object for testing
const documentMock = (() => ({
    querySelector: (selector) => ({
        innerHTML: null,
    }),
}))();

//Think of it like making a class
const FormatterModule = (
    function (doc) { //akin to injecting dependencies
        let timesRun = 0;

        //akin to private function
        const log = (msg) => console.log(`${Date.now()} , Logger: ${msg}`);
        const getTimesRun = () => timesRun;
        const setTimesRun = () => {
            log("Setting times run");
            ++timesRun;
        }

        const makeUppercase = (text) => {
            log("Making uppercase");
            return text.toUpperCase();
        }

        const writeToDOM = (selector, msg) => {
            if (!!doc && "querySelector" in doc) {
                doc.querySelector(selector).textContent = msg;
            }
        }

        //expose function to be used (akin to public function/variable)
        //returns a new object with the function,variable,etc as properties
        return {
            makeUppercase,
            setTimesRun,
            getTimesRun,
            writeToDOM
        }
    }
    //if document not exist, use the mock we made
)(document || documentMock); //add dependencies here (pass in the value for the function arguments)

console.log(FormatterModule.makeUppercase("hello"));
FormatterModule.setTimesRun();
console.log(FormatterModule.getTimesRun());
FormatterModule.writeToDOM("#target-text", "Hello World!");
