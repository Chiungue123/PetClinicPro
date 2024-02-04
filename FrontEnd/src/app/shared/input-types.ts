export class InputTypes {
    ownerTypes: { [key: string]: string } = {
        firstName: 'text',
        lastName: 'text',
        email: 'email',
        phone: 'tel'
    };
    visitTypes: { [key: string]: string } = {
        dateOfVisit: 'date',
        reasonOfVisit: 'text',
        treatmentNotes: 'text',
        visitID: 'number',
        petID: 'number'

    };
    petTypes: { [key: string]: string } = {
        name: 'text',
        breed: 'text',
        age: 'number',
        ownerID: 'number'
    };
}
