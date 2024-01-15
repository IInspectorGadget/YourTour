export const  collectTour = () => {

    const phoneValidator = () =>{
        const inputField = document.getElementById("tel");
        const numberReg = new RegExp(/\D/g);

        const getInputNumbersValue = (input) => {
            return input.value.replace(numberReg, '');
        }
        
        const updateText = (inputNumbersValue, input) =>{
            let formattedInputValue = "";
            if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
                if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
                let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+ 7";
                formattedInputValue = input.value = firstSymbols + " ";
                if (inputNumbersValue.length > 1) {
                    formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
                }
                if (inputNumbersValue.length >= 5) {
                    formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
                }
                if (inputNumbersValue.length >= 8) {
                    formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
                }
                if (inputNumbersValue.length >= 10) {
                    formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
                }
            } else {
                formattedInputValue = '+ ' + inputNumbersValue.substring(0, 16);
            }
            return formattedInputValue
        }

        const onPhoneInput = (e) => {
            const input = e.target
            const inputNumbersValue = getInputNumbersValue(input)
            const selectionStart = input.selectionStart
            
            if (!inputNumbersValue)  return input.value = "";

            // Change characters in the middle of text
            if (input.value.length != selectionStart) {
                    //We make changes if the input is correct and change the cursor location
                    if (e.data && numberReg.test(e.data)) {
                        input.value = updateText(inputNumbersValue, input);
                        input.selectionEnd= selectionStart - 1
                        input.selectionStart= selectionStart -1
                    }
                    input.value = updateText(inputNumbersValue, input);
                    return 
            
            }
            
            
            input.value = updateText(inputNumbersValue, input);

        }
        
        
        const onPhoneKeyDown =  (e) => {
            // Remove the last character
            const inputValue = e.target.value.replace(numberReg, '');
            if (e.keyCode == 8 && inputValue.length == 1) {
                e.target.value = "";
            }
        }

        const onPhoneCut = (e) => {
            setTimeout(()=>{
                const input = e.target
                const inputNumbersValue = getInputNumbersValue(input)
                const selectionStart = input.selectionStart
                const selectionEnd = input.selectionStart
                console.log(inputNumbersValue)
                if (!inputNumbersValue)  return input.value = "";
                input.value = updateText(inputNumbersValue, input);
                console.log(selectionStart)
                input.selectionStart = selectionEnd
                input.selectionEnd = selectionEnd
            }, 0)
            
        }

        inputField.addEventListener('keydown', onPhoneKeyDown);
        inputField.addEventListener('cut', onPhoneCut);
        inputField.addEventListener('input', onPhoneInput);
    }
    
    phoneValidator();

}
