myApp
    .controller('UserController', function (UserService) {
        console.log('UserController created');
        let vm = this;
        vm.move = false;

        vm.fadeIn = (i) => {
            i.appClass = true;
        };
        vm.fadeOut = (i) => {
            i.appClass = false;
        };
        vm.moveDiv = (i) => {
            vm.move = !vm.move;
            i.featured = true;
            vm.showAll = false;
            console.log(vm.articleArrays);            
        };
        vm.closeDiv = (i) => {
            vm.move = !vm.move;
            i.featured = false;
            vm.showAll = true;
        };

        vm.articleArrays = [
            {
                'name': 'Image Gallery',
                'week': '4',
                'link': 'https://github.com/mikeekert/Weekend4-ImageGallery',
                'image': '/assets/images/week4/image0.png',
                'desc': 'Created Image Gallery of favorite moments, complete with db hosted Comments, and' +
                        ' Likes.',
                'featured': null,
                'tech': 'AngularJS, Express.js, Node.js, postgreSQL, HTML5/CSS3, Javascript.'
            }, {
                'name': 'Real Estate',
                'week': '5',
                'link': 'https://github.com/mikeekert/Weekend5-RealEstate',
                'image': '/assets/images/week5/image0.png',
                'desc': 'Sample Real Estate listing application, with ability to sort by types and add li' +
                        'stings.',
                'featured': null,
                'tech': 'AngularJS, Express.js, Node.js, mongoDB, HTML5/CSS3, Material Design, Javascript.'
            }, {
                'name': 'Sample Portfolio',
                'week': '6',
                'link': 'https://github.com/mikeekert/Weekend6-Portfolio',
                'image': '/assets/images/week6/image0.png',
                'desc': 'Initial personal portfolio page created for weekend assignment. Utilized the Git' +
                        'Hub API.',
                'featured': null,
                'tech': 'AngularJS, Express.js, Node.js, HTML5/CSS3, Javascript, GitHub API.'
            }, {
                'name': 'QuestLog',
                'week': 'Solo Project',
                'link': 'https://github.com/mikeekert/soloproject',
                'link2': 'http://questlog.mikeekert.com/',
                'image': '/assets/images/solo/image0.png',
                'desc': 'Personal project created to track video game progress in personal collection. Fu' +
                        'll CSS3 coding done without any addtional libraries.Retro style themes.',
                'featured': null,
                'tech': 'AngularJS, Express.js, Node.js, postgreSQL, HTML5/CSS3, Javascript.'

            }, {
                'name': 'MusicNerdz',
                'week': 'Group Project',
                'link': 'https://github.com/ericbfriday/MusicNerdz',
                'image': '/assets/images/group/image0.png',
                'desc': 'Group project for Prime Academy. Completed with a team of 5 developers, the appl' +
                        'ication was created to enhance History curriculum in the classroom by fusing mus' +
                        'ic and history together. Application allows for admin staff to create content,Te' +
                        'achers to assign homework, and for Students to take the lessons.',
                'featured': null,
                'tech': 'AngularJS, Express.js, Node.js, postgreSQL, HTML5/CSS3, Material Design, Javascript.'
            }
        ];
    });