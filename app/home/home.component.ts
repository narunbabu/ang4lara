import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Article } from '../_models/index';
import { ArticleService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
    // template: '<h1>Hellow World</h1>',
    // providers: [ArticleService]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    currentArticle: Article;
    articles: Article[] = [];
    user:string;

    constructor(private articleService: ArticleService, private userService: UserService) {
        this.currentArticle = JSON.parse('{"title":"this","body":"this","created_at":"this","updated_at":"at this"}');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user=JSON.parse(localStorage.getItem('currentUser')).username;
        console.log(this.currentUser);
    }

    ngOnInit() {
        this.loadAllArticles();
        console.log(this.loadAllArticles());
    }

    // // deleteArtcle(id: number) {
    // //     this.articleService.delete(id).subscribe(() => { this.loadAllArticles() });
    // // }

    private loadAllArticles() {
        this.articleService.getAll().subscribe(articles => { this.articles = articles; 
            // console.log(this.articles);
        });
    }
}