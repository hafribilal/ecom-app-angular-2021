import { Admin } from '../models/admin/admin.module';
import { Client } from '../models/client/client.module';

export interface IAuth {
	login(username: string, password: string): Promise<boolean>;
	clientSignUp(client: Client): Promise<Client>;
	adminSignUp(admin: Admin): Promise<Admin>;
	logout(): void;
}
