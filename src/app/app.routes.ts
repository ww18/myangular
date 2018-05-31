import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import {}
export const appRoutes = [{
	path: '',
	redirectTo: '/index.html',
	pathMatch: 'full'
},{
	path: 'index.html',
	component: IndexComponent
},{
	path: 'test',
	loadChildren: './test/test.module#TestModule'
},{
	path: '**',
	component: ErrorComponent
}]