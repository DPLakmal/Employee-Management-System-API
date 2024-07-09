export interface Employee {
    id: String,
    firstName: String,
    lastName: string
    designation: string
    nearestCity: string
    tier: EmployeeTier
    status: EmployeeStatus

}

export enum EmployeeTier {
    TIER_ONE = 1,
    TIER_TWO = 2,
    TIER_THREE = 3
}

export enum EmployeeStatus {
    Active = 'Active',
    Suspended = 'Suspended'
}