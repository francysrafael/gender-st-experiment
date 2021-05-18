
angular.module('tutor').controller("IndexCtrl", function($scope, $location, $window, configService) {
    if ($location.path() != '/home') {
        console.log('Missing :respId in /#home?respId=:respId');
        console.log('Going to '+configService.getBaseURL()+'/pre');
        $window.location.href = configService.getBaseURL()+'/pre';
    }
});
