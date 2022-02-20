//This is how to write a validator library in javascript

//Destination
function Validator(options) {

    function getParentUtil(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    //Rule storage array
    let selectorRules = {};

    //Validate fn
    function validate(inputElement, rule, errorEle) {
        //Validate form
        let rules = selectorRules[rule.selector];
        let errorMsg
        //For multiple rule
        //Extract rule of selector, check rule
        for (let subRule of rules) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMsg = subRule(formElement.querySelector(rule.selector + ':checked'));
                    break;
                default:
                    errorMsg = subRule(inputElement.value);
            }
            if (errorMsg) break;
        }

        if (errorMsg) {
            errorEle.innerText = errorMsg;
            //Add class list to element
            getParentUtil(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorEle.innerText = '';
            //Remove a class list
            getParentUtil(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMsg;
    }

    let formElement = document.querySelector(options.form);
    if (formElement) {
        //When submit form
        formElement.addEventListener('submit', (e) => {
            let isFormValid = true;
            e.preventDefault();
            //Validate each rule
            options.rules.forEach((rule) => {
                let inputElement = formElement.querySelector(rule.selector);
                let parentEle = getParentUtil(inputElement, options.formGroupSelector);
                let errorEle = parentEle.querySelector(options.errorSelector);
                let isValid = validate(inputElement, rule, errorEle);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //sUBMIT WITH js
                if (typeof options.onSubmit === 'function') {
                    //Get all of the form not disable element
                    let enableInput = formElement.querySelectorAll('[name]');
                    let formValue = Array.from(enableInput).reduce((values, input) => {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                //If only a single element
                                if (!input.matches(':checked')) {
                                    return values;
                                }
                                //If multiple options is being choosen
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            default:
                                values[input.name] = input.value;
                                break;
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValue);
                }
                //Submit with default action
            } else {
                // formElement.submit();
            }
        });

        //Iterate through rule and treat the value (event listener etc..)
        options.rules.forEach((rule) => {
            //Can only save 1 rule per field, have to use this technique
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            let inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(
                (inputElement) => {
                    let errorEle = getParentUtil(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    if (inputElement) {
                        //Get input form user - if blur away from input
                        inputElement.addEventListener('blur', (event) => {
                            validate(inputElement, rule, errorEle);
                        });
                    }
                    // Xu ly truong hop khi nhap input
                    inputElement.addEventListener('input', (event) => {
                        errorEle.innerText = '';
                        //Remove a class list
                        getParentUtil(inputElement, options.formGroupSelector).classList.remove('invalid');
                    });
                }
            );
        });
    }
}

//Rules Definition
//Rule of all rule, error, return error, else undefined
Validator.isRequired = function (selector, literalString) {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : literalString || 'Field is require'
        }
    };
}

Validator.isEmail = function (selector, literalString) {
    return {
        selector: selector,
        test: (value) => {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : literalString || 'Not a valid email address';
        }
    };
}


Validator.minLength = function (selector, min, literalString) {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : literalString || 'Password length must be {$min} characters';
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, literalString) {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : literalString || 'The field enter is not match';
        }
    };
}
