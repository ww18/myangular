import {TestComponent} from './test.component';
import {UserComponent} from '../user/user.component';
export const testRoutes = [{
	path: '',
	component: TestComponent,
	children: [{
		path: ':id',
		component: UserComponent
	}]
}]