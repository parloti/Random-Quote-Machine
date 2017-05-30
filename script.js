'use strict';
angular
	.module('randomQuoteMachine')
	.controller('dynamicColors', ['$scope', function ($scope) {
		$scope.headerColor = "#FFFFFF";
		$scope.divStyle = {
			"background-color": $scope.headerColor
		}
	}])
	.controller('dynamicQuote', ['$scope', function ($scope) {
		$scope.quotes = [
			{
				name: 'About',
				iconClass: 'fa fa-info-circle icon-white',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Skills',
				iconClass: 'fa fa-wrench icon-white',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Projects',
				iconClass: 'fa fa-cogs icon-white',
				isVisible: true,
				isActive: true
			},
			{
				name: 'Testimonials',
				iconClass: 'fa fa-comments icon-white',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Articles',
				iconClass: 'fa fa-pencil-square-o icon-white',
				isVisible: false,
				isActive: true
			},
			{
				name: 'Contacts',
				iconClass: 'fa fa-address-book-o icon-white',
				isVisible: true,
				isActive: true,
				navigation: [
					{
						name: 'QR Code',
						href: '#qr-code-panel',
						iconClass: 'fa fa-user-circle-o',
						isVisible: true,
						isActive: true
					},
					{
						name: 'vCard',
						href: '#vcard-panel',
						iconClass: 'fa fa-address-card-o',
						isVisible: true,
						isActive: true
					},
					{
						name: 'Social',
						href: '#social-panel',
						iconClass: 'fa fa-share-alt',
						isVisible: true,
						isActive: true
					},
					{
						name: 'Message',
						href: '#message-panel',
						iconClass: 'fa fa-envelope-o',
						isVisible: true,
						isActive: true
					}
				],
				content: [
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
					{
						caption: 'Add Me to Your Contacts List'
					},
				]
			},
			{
				name: 'Footer',
				iconClass: 'fa fa-arrow-down',
				isVisible: true,
				isActive: true
			}
		];
		
	}]);