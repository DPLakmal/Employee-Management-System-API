import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';
import { Employee } from './Employee.model';

@Controller('employees')
export class EmployeesController {

    constructor(private emplyoeeService: EmployeesService) { }

    @Get()
    getAllEmployees(@Query() param: EmployeeSearchDto) {
        if (Object.keys(param).length) {
            return this.emplyoeeService.searchEmployee(param);
        } else {
            return this.emplyoeeService.getAllEmployees()
        }
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

    @Get('/:id')
    getEmployeeById(@Param('id') id: string) {
        return this.emplyoeeService.getEmployeeById(id)
    }


    @Put('/:id/city')
    updateEmployee(@Param('id') id: string, @Body() employeeUpdateDto: EmployeeUpdateDto) {
        employeeUpdateDto.id = id
        return this.emplyoeeService.updateEmployee(employeeUpdateDto)
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteEmployee(@Param('id') id: string) {
        if (!this.emplyoeeService.deleteEmployee(id)) {
            throw new NotFoundException('Employee does not exsist')
        }

    }

}

