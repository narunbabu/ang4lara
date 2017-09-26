"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var HomeComponent = (function () {
    function HomeComponent(articleService, userService) {
        this.articleService = articleService;
        this.userService = userService;
        this.articles = [];
        this.currentArticle = JSON.parse('{"title":"this","body":"this","created_at":"this","updated_at":"at this"}');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = JSON.parse(localStorage.getItem('currentUser')).username;
        console.log(this.currentUser);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllArticles();
        console.log(this.loadAllArticles());
    };
    // // deleteArtcle(id: number) {
    // //     this.articleService.delete(id).subscribe(() => { this.loadAllArticles() });
    // // }
    HomeComponent.prototype.loadAllArticles = function () {
        var _this = this;
        this.articleService.getAll().subscribe(function (articles) {
            _this.articles = articles;
            // console.log(this.articles);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
        // template: '<h1>Hellow World</h1>',
        // providers: [ArticleService]
    }),
    __metadata("design:paramtypes", [index_2.ArticleService, index_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map