window.card = function () {
    return {
        completed: Alpine.$persist(false),
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
    }
}