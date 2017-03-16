var bio = {
    "name": "Meine Goy",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+41-78-000-000",
        "email": "m@rax.cx",
        "github": "https://github.com/ino1sr",
        "location": "Genève, Switzerland"
    },
    "welcomeMessage": "Welcome to my resume.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Photoshop", "Illustrator"],
    "biopic": "images/biopic.png"
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

var projects = {
    "projects": [
        {
            "title": "Udacity Build a Portfolio Site",
            "dates": "Dec 2016 - Jan 2017",
            "description": "Develop a responsive website of the portfolio projects.",
            "images": ["images/img-portfolio.png"]
        }
    ],
    display() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImages);
                }
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
    "onlineCoureses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016 - (in progress)",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
}


function displaywork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

displaywork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    console.log(x, y);
});

function inName(name) {
    var fullNameArray = name.trim().split(" ");
    var firstName = fullNameArray[0];
    var lastName = fullNameArray[1];
    var internationalizedName = firstName + " " + lastName.toUpperCase();
    return internationalizedName;
}

$("#main").append(internationalizeButton);

projects.display();
