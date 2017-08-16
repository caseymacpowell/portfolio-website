var aboutImport = require('./about.html');
var resumeImport = require('./resume.html');
var portfolioImport = require('./portfolio.html');
var blogImport = require('./blog.html');
var contactImport = require('./contact.html');

const about = {template: aboutImport};
// const resume = {template: }
// const portfolio = {template: }
// const blog = {template: }
// const contact = {template: }

var myRouter = new VueRouter({
	routes: [
		{
			path: '/about',
			component: about,
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