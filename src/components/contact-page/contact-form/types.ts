export interface ContactFormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export enum ErrorMessages {
    FIRST_NAME_REQUIRED = "First name is required",
    LAST_NAME_REQUIRED = "Last name is required",
    EMAIL_REQUIRED = "Email is required",
    EMAIL_INVALID = "Invalid email address",
    PHONE_REQUIRED = "Phone number is required",
    PHONE_INVALID = "Invalid phone number",
    PHONE_TOO_SHORT = "Phone number should be at least 15 symbols",
    MESSAGE_REQUIRED = "Message is required",
}

export type FirstNameError = ErrorMessages.FIRST_NAME_REQUIRED | null;
export type LastNameError = ErrorMessages.LAST_NAME_REQUIRED | null;
export type EmailError =
    | ErrorMessages.EMAIL_REQUIRED
    | ErrorMessages.EMAIL_INVALID
    | null;
export type PhoneError =
    | ErrorMessages.PHONE_REQUIRED
    | ErrorMessages.PHONE_INVALID
    | ErrorMessages.PHONE_TOO_SHORT
    | null;
export type MessageError = ErrorMessages.MESSAGE_REQUIRED | null;

export interface ContactFormErrors {
    firstNameError: FirstNameError;
    lastNameError: LastNameError;
    emailError: EmailError;
    phoneError: PhoneError;
    messageError: MessageError;
}
