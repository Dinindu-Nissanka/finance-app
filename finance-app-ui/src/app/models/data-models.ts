export class LoginResponse {
  loggedIn: boolean;
  userName: string;
  userRole: string;
}

export class UserRole {
    roleId: number;
    roleName: string;
}


export class SignupResponse {
  success: boolean;
}

export class MenuItem {
    id: number;
    route: string;
    name: string;
    position: string;
    iconName: string;
    pattern: string; // EX: permission1:add,permission2:add

}

export class ElectricityBill {
    id: number;
    period: string;
    previousReading: number;
    currentReading: number;
    noOfUnits: number;
    amount: number;
    billNo: string;
    location: string;
    certification: string;
    certifiedDate: string;
    datetime: string;
    traineeStaffId: number;
    userKey: number;
}

export class WaterBill {
    id: number;
    period: string;
    previousReading: number;
    currentReading: number;
    noOfUnits: number;
    amount: number;
    location: string;
    billNo: string;
    certification: string;
    certifiedDate: string;
    datetime: string;
    traineeStaffId: number;
    userKey: number;
}

export class TelephoneBill {
    id: number;
    period: string;
    category: string;
    amount: number;
    billId: string;
    location: string;
    certification: string;
    certifiedDate: string;
    datetime: string;
    traineeStaffId: number;
    userKey: number;
}

export class InternetBill {
    id: number;
    period: string;
    amount: number;
    billNo: string;
    location: string;
    certification: string;
    certifiedDate: string;
    datetime: string;
    traineeStaffId: number;
    userKey: number;
}

export class CreateBillResponse {
    success: boolean;
}

export class UpdateBillResponse {
    success: boolean;
}

export class User {
  userName: string;
  password: string;
}

export class TempResponse {
   success: boolean;
   message: string;
}

export class Profile {
  userName: string;
  password: string;
  userRole: number;
}

export class Certify {
    type: string;
    icon: string;
    color: string;
    pendingCertifcations: number;
    route: string;
}

export class PendingCertification {
    billType: string;
    status: string;
    count: number;
}

export class MonthlyExpenseInYear {
    month: string;
    expense: number;
}

export class LocationExpenseInYear {
    location: string;
    expense: number;
}

export class YearlyExpenseOfMonth {
    year: string;
    expense: number;
}

export class BillToApprove {
    billId: string;
    status: string;
    comment: string;
	billType: string;
    userId: number;
}

export class ApprovalResponse {
    success: boolean;

}
