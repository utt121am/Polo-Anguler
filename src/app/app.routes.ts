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
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { MemberComponent } from './components/member/member.component';
import { HomeComponent } from './components/home/home.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FlameComponent } from './components/flame/flame.component';
import { CurrencyConvertComponent } from './components/currency-convert/currency-convert.component';
import { LearningComponent } from './components/learning/learning.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' }, // ✅ Default route

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'member',
        component: MemberComponent
    },
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
    ,
    {
        path: 'editprofile/:studentId',
        component: EditProfileComponent,
        canActivate: [AuthGuard]
    }
    ,
    {
        path: 'pass-change/:studentId',
        component: PasswordChangeComponent
    }
    ,
    {
        path: 'email-verification/:studentId',
        component: EmailVerificationComponent
    },
    {
        path: 'flame',
        component: FlameComponent
    }
    ,
    {
        path: 'currency',
        component: CurrencyConvertComponent
    },
    {
        path: 'learning',
        component: LearningComponent
    }
    ,
    {
        path: 'login',
        component: LoginComponent
    }
];
