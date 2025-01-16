const phone = document.querySelector("#phone");
let im = new Inputmask("+7(999)999-99-99");
im.mask(phone)

let validation = new JustValidate("#form",{
    errorLabelStyle: {
        color: "var(--error-color)",
        fontSize: "16px",
    }
});
validation.addField("#name",[
    {
        rule: "required",
        errorMessage: "Введите имя"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа"
    },
])
.addField("#phone",[
    {
        validator: () => {
            const numberPhone = phone.inputmask.unmaskedvalue();
            return Boolean(Number(numberPhone) && numberPhone.length > 0);
        },
        errorMessage: "Введите телефое"
    },
    {
        validator: () => {
            const numberPhone = phone.inputmask.unmaskedvalue();
            return Boolean(Number(numberPhone) && numberPhone.length === 10);
        },
        errorMessage: "Введите телефое полностью"
    },
])

  .onSuccess(() => {

});