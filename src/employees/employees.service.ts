import { Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus } from './Employee.model';
import { v1 as uuid } from 'uuid'

@Injectable()
export class EmployeesService {


    private employees: Employee[] = [];

    getAllEmployees() {
        return this.employees;

    }

    createEmployee(firstName: String, lastName: string, designation: string, nearestCity: string, tier: number) {

        const employee = {
            id: uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tier,
            status: EmployeeStatus.Active
        }

        this.employees.push(employee);
        return employee;


    }
}
