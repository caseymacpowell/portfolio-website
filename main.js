// var aboutImport = require('./about.html');
// // var resumeImport = require('./resume.html');
// // var portfolioImport = require('./portfolio.html');
// // var blogImport = require('./blog.html');
// // var contactImport = require('./contact.html');

// const about = {template: aboutImport};
// const resume = {template: }
// const portfolio = {template: }
// const blog = {template: }
// const contact = {template: }

var myRouter = new VueRouter({
	routes: [
		{
			path: '/',  //localhost:3000/#
			component: {
				template: '<h1>Hello there!</h1>'
			}
		},
		{
			path: '/about',
			component: {
				template: '<p>about</p>',
			},
		},
		{
			path: '/resume',
			component: {
				template: '<p>resume</p>',
			},
		},
		{
			path: '/portfolio',
			component: {
				template: '<p>portfolio</p>',
			},
		},
		{
			path: '/blog',
			component: {
				template: '<p>blog</p>',
			},
		},
		{
			path: '/contact',
			component: {
				template: '<p>contact</p>',
			},
		},
	]
});

var mainAppVm = new Vue({
	el: '#app',
	data: {},
	router: myRouter,
	computed: {},
	methods:{}

});