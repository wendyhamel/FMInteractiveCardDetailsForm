window.card = function () {
    return {
        completed: Alpine.$persist(false),
        name: Alpine.$persist(''),
        number: Alpine.$persist(''),
        month: Alpine.$persist(''),
        year: Alpine.$persist(''),
        cvc: Alpine.$persist(''),
        validation : {
            name: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { invalid: false, message: ''}
                        } else {
                            return { invalid: true, message: 'Can\'t be blank'}
                        }
                    },
                }
            },
            number: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { invalid: false, message: ''}
                        } else {
                            return { invalid: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 19) {
                        if (field && field.length === value) {
                            return {invalid: false, message: ''}
                        } else {
                            return {
                                invalid: true, message: 'Card number needs to be 16 numbers'
                            }
                        }
                    }
                }
            },
            month: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { invalid: false, message: ''}
                        } else {
                            return { invalid: true, message: 'Can\'t be blank'}
                        }
                    },
                    range: function (field) {
                        const rangeRegex = /\b([1-9]|1[0-2])\b/
                        if (rangeRegex.test(field)) {
                            return {invalid: false, message: ''}
                        } else {
                            return {
                                invalid: true, message: 'Wrong format, month needs to be between 01 and 12'
                            }
                        }
                    }
                }
            },
            year: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { invalid: false, message: ''}
                        } else {
                            return { invalid: true, message: 'Can\'t be blank'}
                        }
                    },
                    range: function (field) {
                        const rangeRegex = /\b([2-9][0-9])\b/
                        if (rangeRegex.test(field)) {
                            return {invalid: false, message: ''}
                        } else {
                            return {
                                invalid: true, message: 'Wrong format, year needs to be at least 22'
                            }
                        }
                    }
                }
            },
            cvc: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { invalid: false, message: ''}
                        } else {
                            return { invalid: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 3) {
                        if (field && field.length === value) {
                            return {invalid: false, message: ''}
                        } else {
                            return {
                                invalid: true, message: 'Wrong format, cv needs to be 3 numbers'
                            }
                        }
                    }
                }
            }
        },
        validate (field) {
            for (const key in this.validation[field].rule) {
                const validationResult = this.validation[field].rule[key](this[field])
                if (validationResult.invalid) {
                    this.validation[field].invalid = true
                    this.validation[field].message = validationResult.message
                    break
                }
                this.validation[field].invalid = false
                this.validation[field].message = ''
            }
        },
        confirm () {
            this.completed = true
        },
        finish () {
            this.completed = false
            this.name = ''
            this.number = ''
            this.month = ''
            this.year = ''
            this.cvc = ''
        }
    }
}