export interface Inotification {
    name : string;
    value: boolean;
}

export interface Ifacility {
    number: number;
    typeCode: string;
    typeName: string;
    siteUseId: number;
    careGiverId: string | null | any;
    facilityName: string | null | any ;
    address1: string | null;
    address2: string | null;
    city: string | null;
    state : string | null;
    zipCode : string |null;
    mode : number | null;
    facilityAddressID: number;
}



export interface IuserContext {
    firstName: string;
    lastName: string;
    userName: string;
    emailAddress: string,
    phoneNumber: string | any;
    mobilePhoneNumber: string | null  ; 
    licenceType: string;
    departmentName: string;
    title: string;
    eulaAcceptedDate: string;
    smsTnCAcceptedDate: string;
    emailContactPreference: boolean;
    smsContactPreference: boolean;
    keepMeUpdated: boolean;
    emailNotifications: Inotification[];
    extension: string;
    facilities: Ifacility[];
    userPermissions: any;
    employeeID: string | null ; 
    userID: number ;
}