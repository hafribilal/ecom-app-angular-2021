import { Compt } from '../compt/compt.module';
import { ArticleModule } from '../article/article.module';

export class Admin extends Compt {
	nom!: string;
	tele!: string;
	listArticles!: ArticleModule[];
}
