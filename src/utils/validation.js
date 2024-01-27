import { personalInfo, plan } from "../store/store";
import { errors } from "../store/store";

export function personalInfoValidation() {
    Object.assign(errors, { name: "", email: "", phone: "" });
    errors.errors = 0;

    if (personalInfo.name !== "") {
    } else {
        errors.name = "Name - Please enter a valid name";
        errors.errors++;
    }

    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personalInfo.email)
    ) {
    } else {
        errors.email = "Email - Please enter a valid email";
        errors.errors++;
    }

    if (
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            personalInfo.phone
        )
    ) {
    } else {
        errors.phone = "Phone - Please enter a valid phone number";
        errors.errors++;
    }

    if (errors.errors === 0) {
        return true;
    }
}

export function selectPlanValidation() {
    if (plan.plan === "") {
        return false;
    } else {
        return true;
    }
}
