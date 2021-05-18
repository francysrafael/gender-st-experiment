## Gender stereotypes, student anxiety, and gamification


This repository contains the code for the experiment described in the article, "[Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study](https://www.sciencedirect.com/science/article/abs/pii/S0360131517301914)."

- The original code was changed to allow manual configuration of pre-test and pos-test questionnaires using http://jotform.com

### How to cite
* Albuquerque, J., Bittencourt, I. I., Coelho, J. A., & Silva, A. P. (2017). Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study. Computers & Education, 115, 161-170.
* Bibtex:
```
@article{albuquerque2017does,
	title = "Does gender stereotype threat in gamified educational environments cause anxiety? An experimental study",
	journal = "Computers & Education",
	volume = "115",
	pages = "161 - 170",
	year = "2017",
	issn = "0360-1315",
	doi = "https://doi.org/10.1016/j.compedu.2017.08.005",
	url = "http://www.sciencedirect.com/science/article/pii/S0360131517301914",
	author = "Josmario Albuquerque and Ig I. Bittencourt and Jorge A.P.M. Coelho and Alan P. Silva",
	keywords = "Gender studies, Anxiety, Stereotype threat, Gamification in education",
}
```

## Overview
This project comprises an experimental environment to study the impact of gender stereotype threat on student anxiety. In summary, the application has the following workflow:
1. Consent form
2. Pre-test (anxiety assessment)
3. Gamified activity. There are three different design flavours for this activity: male-stereotyped, female-stereotyped, and neutral. Upon finishing the pre-test, one of the three flavours is randomly selected for the current participant. Please note the activity content does not change across versions (only UI elements like colours and images).
4. Post-test (anxiety assessment, same as the pre-test).


## Getting started

In order to setup this project for a real use in your research, you will need to follow two basic steps: (1) adapt the project for your research needs; and (2) actual run the project. If you just want to see how it looks like, you can go straight to step 2 and run the project locally.  

### Step 1: Adapting the project for your needs

* In general, most textual content can be changed by editing the '*.html' files located in:
	* `webapp/views/`
* For server configurations and where the responses are submited, refer to:
	* `Server.js` - port 
* For changing the baseURL refer to the files:
    * `server.js` - const `baseURL`
    * `webapp/services.js`  - const `baseURL`

### Step 3: Running the project
A simple way to run this project is:

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Go to the project directory
2. Install the dependencies:
```
npm install
```
3. Run the project:
```
npm start
```

## Guide

### Setting the pre-test questionnaire

**Step 0**: Define the questionnaire to be applied in the pre-test. Each one of its section may be used to define a specific test, such as DFS-2, anxiety-trait, self-confidence.

**Step 1**: Add an input text field named as `ID` to define the response identifier.

**Step 2**: Define this text field as a required field.

![step 1 and 2 for setting the pre-test](imgs/pre-1-2.png)


**Step 3**: Define the input text field `ID` as read-only and hide field in the advanced tab of the field.

![step 3 for setting the pre-test](imgs/pre-3.png)


**Step 4**: Define the unique name for the text field `ID` as `respId` - This unique name will be used to pass the value for the field Id using the request parameter as `?respId=xxxx`.

![step 4 for setting the pre-test](imgs/pre-4.png)


**Step 5**: Define the URL where the page will be redirected after to submit a response. This URL should be the webserver URL where the tutor app has been installed following by the `/#/home?respId={respId}` <- parameter used to pass the response identificator.

![step 5 for setting the pre-test](imgs/pre-5.png)


**Step 6**: In the file Server.js, replace the redirect URL for the pre-test questionnaire URL. The value for the input text field `ID` is defined passing the parameter `?respId=:respId` 

![step 6 for setting the pre-test](imgs/pre-6.png)

### Setting the pos-test questionnaire

**Step 0**: Define the questionnaire to be applied in the pos-test. Each one of its section may be used to define a specific test, such as FSS-2, anxiety-state, self-confidence.

**Step 1**: Add an input text field named as `ID` to define the response identifier.

**Step 2**: Define this text field as a required field.

![step 1 and 2 for setting the pos-test](imgs/pos-1-2.png)


**Step 3**: Define the input text field `ID` as read-only and hide field in the advanced tab of the field.

![step 3 for setting the pos-test](imgs/pos-3.png)


**Step 4**: Define the unique name for the text field `ID` as `respId` - This unique name will be used to pass the value for the field Id using the request parameter as `?respId=xxxx`.

![step 4 for setting the pos-test](imgs/pos-4.png)


**Step 5**: In the file Server.js, replace the redirect URL for the pos-test questionnaire URL. The value for the input text field `ID` is defined passing the parameter `?respId=:respId` 

![step 5 for setting the pos-test](imgs/pos-5.png)


### Frameworks
This project was made using the following frameworks:

* AngularJS
	* [Documentation](https://material.angularjs.org/latest/)
* Express.js
	* [Documentation](https://expressjs.com/en/4x/api.html)
