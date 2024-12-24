// const { unmaskedvalue } = require("./inputmask.min")

let selector = document.querySelector("#tel")
let im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector)

let validation = new JustValidate("form")

validation.addField("#name", [
    {
        rule: "required",
        errorMessage: "Введите имя"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа"
    }
]).addField("#tel", [
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: "Введите телефон"
    },
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: "Введите телефон полностью"
    }
]).addField("#msg", [
    {
        rule: "required",
        errorMessage: "Введите сообщение"
    },
    {
        rule: "minLength",
        value: 5,
        errorMessage: "Минимум 5 символа"
    }
]).onSuccess(function(){
    
})