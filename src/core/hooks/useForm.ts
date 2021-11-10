import { useState } from 'react'

export const useForm = (defaultFormValues) => {
    const [formValue, setFormValue] = useState(defaultFormValues)
    function changeFormValue(fieldName: string, fieldValue) {
        setFormValue({ ...formValue, [fieldName]: fieldValue })
    }
    function resetFormValue() {
        setFormValue(defaultFormValues)
    }
    return ({
        formValue,
        changeFormValue,
        resetFormValue,
    })
}