var bio = {
    "name": "Meine Goy",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+41-78-000-000",
        "email": "m@rax.cx",
        "github": "ino1sr",
        "location": "Genève, Switzerland"
    },
    "welcomeMessage": "Welcome to my resume.",
    "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Photoshop", "Illustrator"],
    "biopic": "images/biopic.png"
};

// Encapsulation
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);

    $("#footerContacts").prepend(formattedMobile);
    $("#footerContacts").prepend(formattedEmail);
    $("#footerContacts").prepend(formattedGithub);
    $("#footerContacts").prepend(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Memoways",
            "title": "Designer",
            "location": "Genève, Switzerland",
            "dates": "May 2010 - Present",
            "description": "Graphic and Web design. Graphic prototype of new web applications."
        },
        {
            "employer": "Goyman",
            "title": "Designer",
            "location": "Genève, Switzerland",
            "dates": "Jan 2009 - Present",
            "description": "Web design. Web and mobile application UI design."
        }
    ]
};

// Encapsulation
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

var projects = {
    "projects": [
        {
            "title": "Udacity Online Resume",
            "dates": "Feb - Mar 2017",
            "description": "Build an online resume by using HTML5, CSS3, JavaScript and jQuery.",
            "images": ["images/img-p4-380_1x.png"],
            "url": "https://github.com/ino1sr/frontend-nanodegree-resume"
        },
        {
            "title": "Udacity Build a Portfolio Site",
            "dates": "Dec 2016 - Jan 2017",
            "description": "Develop a responsive website of the portfolio projects.",
            "images": ["images/img-p3-380_1x.png"],
            "url": "https://ino1sr.github.io/udacity-build-a-portfolio-site/"
        }
    ]
};

// Encapsulation
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "University of Lausanne",
            "location": "Lausanne, Switzerland",
            "degree": "Master of Law (MLaw)",
            "majors": ["International and Comparative Law"],
            "dates": "2007 - 2009",
            "url": "http://www.unil.ch/droit/home.html"
        },
        {
            "name": "Keio University",
            "location": "Tokyo, Japan",
            "degree": "Bachelor of Laws (LL.B.)",
            "majors": ["Law"],
            "dates": "2000 - 2004",
            "url": "https://www.keio.ac.jp/en/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016 - (in progress)",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

// Encapsulation
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.schools[i].url);

        $(".education-entry:last").append(formattedSchoolNameDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedSchoolURL);
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);

            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
