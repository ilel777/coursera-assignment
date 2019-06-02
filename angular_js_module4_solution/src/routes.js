(function(){
  'use strinct';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "./src/templates/home.template.html"
      })

      .state('categories',{
        url: '/categories',
        templateUrl: "./src/templates/categories.template.html",
        controller: 'CategoriesController as categoriesCtrl',
        resolve:{
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items',{
        url: '/items/{short_name}',
        templateUrl: './src/templates/items.template.html',
        controller: 'CategoryItemsController as itemsCtrl',
        params: {
          short_name: null
        },
        resolve:{
          items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
            return MenuDataService.getItemsForCategory($stateParams.short_name);
          }]
        }
      })
  }
})();
