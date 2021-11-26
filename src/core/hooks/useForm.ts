import { useState } from 'react'

export const useForm = <T,>(defaultFormValues) => {
    const [formValue, setFormValue] = useState<T>(defaultFormValues)
    function changeFormValue(fieldName: string, fieldValue) {
        setFormValue({ ...formValue, [fieldName]: fieldValue })
    }
    function resetFormValue() {
        setFormValue(defaultFormValues)
    }
    return ({ formValue, changeFormValue, resetFormValue })
}