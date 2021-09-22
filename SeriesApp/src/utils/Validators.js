import React from 'react';

export default class Validators {
    static Validate_nonEmptyInput = (inputString) => {
        return inputString === "";
    }

    static Validate_nonEmptyInputList = (listInputString) => {
        for(var Input in listInputString){
            if(listInputString[Input] === undefined){
                return false;
            }
        }
        return true;
    }

    static Validate_EmailInput = (inputEmail) => {
        if(inputEmail.includes("@")){
            return true;
        }
        return false;
    }

    static Validate_MatchingPasswordInput = (inputPass_1, inputPass_2) => {
        if ( inputPass_1 === inputPass_2 ){
            return true;
        }
        return false;
    }
}