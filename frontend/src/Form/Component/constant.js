export const options = [
    { "name": "Mr.", "id": "Mr." },
    { "name": "Mrs.", "id": "Mrs." },
    { "name": "Miss.", "id": "Miss." },
    { "name": "Dr.", "id": "Dr." },
];
export const malePrefixOptions = [
    { "name": "Mr.", "id": "Mr." },
    { "name": "Dr.", "id": "Dr." },
];
export const femalePrefixOptions = [
    { "name": "Mrs.", "id": "Mrs." },
    { "name": "Miss.", "id": "Miss." },
    { "name": "Dr.", "id": "Dr." },
];

export const genderOption = [
    { "name": "Male", "id": "Male" },
    { "name": "Female", "id": "Female" },
    { "name": "Others", "id": "Others" },
];

export const districtList = [
    { "name": "Kamrup", "id": "1" },
    { "name": "Udalguri", "id": "2" },
    { "name": "Majuli", "id": "3" },
];

export const statusList = [
    { "name": "Unmarried", "id": "Unmarried" },
    { "name": "Married", "id": "Married" },
    { "name": "Widower", "id": "Widower" },
    { "name": "Widow", "id": "Widow" },
    { "name": "Divorce", "id": "Divorce" },
];

export const occupationList = [
    { "name": "Govt. Service", "id": "Govt. Service" },
    { "name": "Private Service", "id": "Private Service" },
    { "name": "Business", "id": "Business" },
    { "name": "Lawyers", "id": "Lawyers" },
    { "name": "Doctors", "id": "Doctors" },
    { "name": "Other", "id": "Other" },
];

export const yesNoOptions = [
    { "name": "Yes", "id": "Yes" },
    { "name": "No", "id": "No" },
];

export const disabilityOption = [
    { "name": "Visually Impaired", "id": "Visually Impaired" },
    { "name": "Differently Disabled", "id": "Differently Disabled" },
];

export const countryList = [
    { "name": "India", "id": "1" },
    { "name": "Australia", "id": "2" },
    { "name": "Argentina", "id": "3" },
];

export const stateList = [
    { "name": "Assam", "id": "1" },
    { "name": "West Bengal", "id": "2" },
    { "name": "Delhi", "id": "3" },
];

const currentYear = new Date().getFullYear();
const startYear = currentYear - 50; // Adjust the range as needed

export const years = Array.from({ length: 51 }, (_, index) => {
    const year = startYear + index;
    return { "name": year.toString(), "id": year.toString() };
});

export const months = [
    { "id": 'January', "name": 'January' },
    { "id": 'February', "name": 'February' },
    { "id": 'March', "name": 'March' },
    { "id": 'April', "name": 'April' },
    { "id": 'May', "name": 'May' },
    { "id": 'June', "name": 'June' },
    { "id": 'July', "name": 'July' },
    { "id": 'August', "name": 'August' },
    { "id": 'September', "name": 'September' },
    { "id": 'October', "name": 'October' },
    { "id": 'November', "name": 'November' },
    { "id": 'December', "name": 'December' },
];


export const identityProofList = [
    { "name": "Driving Licence", "id": "Driving Licence" },
    { "name": "Voter Id", "id": "Voter Id" },
    { "name": "Copy of Passport", "id": "Copy of Passport" },
    { "name": "Copy of PAN Card", "id": "Copy of PAN Card" },
];

export const ageProofList = [
    { "name": "Birth Certificate", "id": "Birth Certificate" },
    { "name": "A Copy of proof of date of birth", "id": "A Copy of proof of date of birth" },
];

export const presentAddressProofList = [
    { "name": "Telephone Bill", "id": "Telephone Bill" },
    { "name": "Copy of Passport", "id": "Copy of Passport" },
    { "name": "Photocopy of Bank Pass Book of the Applicant", "id": "Photocopy of Bank Pass Book of the Applicant" },
    { "name": "Driving Licence", "id": "Driving Licence" },
    { "name": "Photo Identity Card of Address(of Central GOvt./PSU or State Govt./PSU only)", "id": "Photo Identity Card of Address(of Central GOvt./PSU or State Govt./PSU only)" },
    { "name": "Address Card having Name and Photo issued by Department of Posts", "id": "Address Card having Name and Photo issued by Department of Posts" },
    { "name": "Electric Bill certified by Land Owner", "id": "Electric Bill certified by Land Owner" },
    { "name": "Telephone Bill certified by Land Owner", "id": "Telephone Bill certified by Land Owner" },
];

export const permanentAddressProofList = [
    { "name": "Telephone Bill", "id": "Telephone Bill" },
    { "name": "Copy of Passport", "id": "Copy of Passport" },
    { "name": "Photocopy of Bank Pass Book of the Applicant", "id": "Photocopy of Bank Pass Book of the Applicant" },
    { "name": "Driving Licence", "id": "Driving Licence" },
    { "name": "Photo Identity Card of Address(of Central GOvt./PSU or State Govt./PSU only)", "id": "Photo Identity Card of Address(of Central GOvt./PSU or State Govt./PSU only)" },
];

