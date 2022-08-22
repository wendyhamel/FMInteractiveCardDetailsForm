window.card = function () {
    return {
        completed: Alpine.$persist(false),
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
        validation : {
            name: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { error: false, message: ''}
                        } else {
                            return { error: true, message: 'Can\'t be blank'}
                        }
                    },
                }
            },
            number: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { error: false, message: ''}
                        } else {
                            return { error: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 19) {
                        if (field && field.length === value) {
                            return {error: false, message: ''}
                        } else {
                            return {
                                error: true, message: 'Wrong format, number is too short'
                            }
                        }
                    }
                }
            },
            month: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { error: false, message: ''}
                        } else {
                            return { error: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 2) {
                        if (field && field.length === value) {
                            return {error: false, message: ''}
                        } else {
                            return {
                                error: true, message: 'Wrong format, number is too short'
                            }
                        }
                    }
                }
            },
            year: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { error: false, message: ''}
                        } else {
                            return { error: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 2) {
                        if (field && field.length === value) {
                            return {error: false, message: ''}
                        } else {
                            return {
                                error: true, message: 'Wrong format, number is too short'
                            }
                        }
                    }
                }
            },
            cvc: {
                rule: {
                    required: function(field){
                        if (field) {
                            return { error: false, message: ''}
                        } else {
                            return { error: true, message: 'Can\'t be blank'}
                        }
                    },
                    length: function (field, value = 2) {
                        if (field && field.length === value) {
                            return {error: false, message: ''}
                        } else {
                            return {
                                error: true, message: 'Wrong format, number is too short'
                            }
                        }
                    }
                }
            }
        },
        validate (field) {
            for (const key in this.validation[field].rule) {
                const validationResult = this.validation[field].rule[key](this[field])
                if (validationResult.error) {
                    this.validation[field].error = true
                    this.validation[field].message = validationResult.message
                    break
                }
                this.validation[field].error = false
                this.validation[field].message = ''
                continue
            }
        }

    }
}