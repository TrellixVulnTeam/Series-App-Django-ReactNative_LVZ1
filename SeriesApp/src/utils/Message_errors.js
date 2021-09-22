import React from 'react';

export default class Message_errors {
    static NotMatchingPasswordError = () => {
        return "The password and confirm password is not matching";
    }

    static NotaEmailType = () => {
        return "Not a valid email";
    }

    static InputIsEmpty = () => {
        return "Some input string is empty"
    }
}