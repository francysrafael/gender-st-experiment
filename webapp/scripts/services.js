var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {
    
    const baseURL = '/francys';

    const baseURL = '';

    var opts = ["default", "stMale", "stFemale"];

    var random = Math.floor((Math.random() * 123457)) % 3;
    var currentTheme = opts[random];

    var next = false;

    var badgeFlags = [false, false, false];

    this.getBaseURL = function() {
        return baseURL;
    }

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.setNext = function(value) {
        next = value;
    };

    this.getNext = function() {
        return next;
    };

    this.addBadge = function(id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function() {
        return badgeFlags;
    };

});

tutorServices.service("User", function($http) {

    const baseURL = '/francys';
    
    var resp = {
        id: '',
        testType: "",
        startTime: 0,
        endTime: 0,
        activityPoints: 0
    };

    this.setRespId = function(value) {
        resp.id = value;
    }

    this.setStType = function(value) {
        resp.stType = value;
    };

    this.setStartTime = function(value) {
        resp.startTime = value;
    };

    this.setEndTime = function(value) {
        resp.endTime = value;
    };

    this.setActivityPoints = function(value) {
        resp.activityPoints = value;
    };

    this.getResponse = function() {
        return resp;
    };

    this.save = function(fcallback) {
        $http({
            url: baseURL+"/save-response/"+resp.id,
            dataType: "json",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: resp
        }).then(function(response) { // success
            console.log("response sent!"); fcallback();
        }, function(response) { // failed
            console.error("Failed to submit participant response. " + response);
        });
    };

});
