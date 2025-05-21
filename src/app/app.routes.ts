import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { GetAPIComponent } from './components/get-api/get-api.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SelfProfileComponent } from './components/self-profile/self-profile.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [

    {
        path: 'user',
        component: UserComponent
    },

    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'data',
        component: DataBindingComponent
    },
    {
        path: 'control',
        component: ControlFlowComponent
    },
    {
        path: 'getapi',
        component: GetAPIComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'selfprofile/:studentId',
        component: SelfProfileComponent,
        canActivate: [AuthGuard]
    }
];
