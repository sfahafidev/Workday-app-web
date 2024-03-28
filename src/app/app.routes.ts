import { Routes } from '@angular/router';

export const routes: Routes = [


    {
        path: 'dashboard',
        loadComponent: () => import('./workday-app/dashboard.component'),
        children: [
            {
                path: 'workdays',
                title: 'Workdays',
                loadComponent: () => import('./workday-app/pages/workday/workday.component'),
            },
            {
                path: 'employees',
                title: 'Employees',
                loadComponent: () => import('./workday-app/pages/employee/employee.component'),
            },
            {
                path: '',
                redirectTo: '/workdays',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }


];
