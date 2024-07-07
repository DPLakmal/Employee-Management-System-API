import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private emplyoeeService: EmployeesService) { }

    @Get()
    getEmployees() {
        // todo: implemt
        this.emplyoeeService.getAllEmployees();
    }

    @Post()
    createEmployee(@Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('designnation') designation: string,
        @Body('nearestCity') nearestCity: string,
        @Body('tier') tier: number
    ) {
        return this.emplyoeeService.createEmployee(firstName, lastName, designation, nearestCity, tier)
    }
}
