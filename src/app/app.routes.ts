import { Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { MainComponent } from './views/main/main.component';
import { LandingComponent } from './views/landing/landing.component';
import { TimelogsComponent } from './views/main/timelogs/timelogs.component';
import { ProjectsComponent } from './views/main/projects/projects.component';
import { DepartmentComponent } from './views/main/department/department.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SigninComponent } from './views/auth/signin/signin.component';


export const routes: Routes = [
    {
        title: 'auth',
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                title: 'login',
                path: 'login',
                component: LoginComponent
            },
            {
                title: 'signin',
                path: 'signin',
                component: SigninComponent
            },
        ]
    },
    {
        title: 'app',
        path: 'app',
        component: MainComponent,
        children: [
            {
                title: 'department',
                path: 'department:id',
                component: DepartmentComponent
            },
            {
                title: 'project',
                path: 'project:id',
                component: ProjectsComponent
            },
            {
                title: 'timelogs',
                path: 'timelogs',
                component: TimelogsComponent
            }
        ]
    },
    {
        title: 'index',
        path: '',
        component: LandingComponent,
    }
];
