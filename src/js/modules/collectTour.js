export const  collectTour = () => {

    const phoneValidator = () =>{
        const inputField = document.getElementById("tel");
        const numberReg = new RegExp(/\D/g);

        const getInputNumbersValue = (input) => {
            return input.value.replace(numberReg, '');
        }
        
        const updateText = (inputNumbersValue) =>{
            let formattedInputValue = "";
            if (inputNumbersValue[0] === "9" || inputNumbersValue[0] === "7") {

                if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
                
                formattedInputValue =  "+ 7 ";

                const cases = [
                    { length: 1, start: 1, end: 4, separator: '(' },
                    { length: 5, start: 4, end: 7, separator: ') ' },
                    { length: 8, start: 7, end: 9, separator: '-' },
                    { length: 10, start: 9, end: 11, separator: '-' }
                ];
        
                for (const { length, start, end, separator } of cases) {
                    if (inputNumbersValue.length >= length) {
                        formattedInputValue += separator + inputNumbersValue.substring(start, end);
                    }
                }

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
                    input.value = updateText(inputNumbersValue);
                    input.selectionEnd= selectionStart - 1
                    input.selectionStart= selectionStart -1
                }
                input.value = updateText(inputNumbersValue);
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

        // handling the case of text cutting so that the appearance does not change
        const onPhoneCut = (e) => {
            setTimeout(()=>{
                const input = e.target
                const inputNumbersValue = getInputNumbersValue(input)
                const selectionStart = input.selectionStart
                const selectionEnd = input.selectionStart
                if (!inputNumbersValue)  return input.value = "";
                input.value = updateText(inputNumbersValue, input);
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
