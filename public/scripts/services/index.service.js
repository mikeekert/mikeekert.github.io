myApp
    .factory('UserService', function () {
        console.log('UserService Loaded');
        var userObject = [{}];
        


        return {
            userObject: userObject
        };
    });