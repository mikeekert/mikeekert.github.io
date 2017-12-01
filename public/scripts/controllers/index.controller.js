myApp
    .controller('UserController', function (IndexService) {
        console.log('UserController created');
        let vm = this;

        vm.image_week4 = ['image0', 'image1', 'image2'];
        vm.image_week5 = ['image0', 'image1'];
        vm.image_week6 = ['image0', 'image1'];
        vm.image_solo = [
            'image0',
            'image1',
            'image2',
            'image3',
            'image4',
            'image5'
        ];

        var slide = (arr) => {
            let slide=1;
            setInterval(3000, change => {
                slide+=1;
                return current[slide];
            });

        };
    });