
var bio =
{ "name" : "Ricardo Hemps",
  "role" : "Hypothetical Web Dev Persona",
  "biopic"  : "images/nerdlaptop.png",
  "skills" : ["javascript","css","html5","bootstrap","polymer"],
  "welcomeMessage" : "My name is rh and I welcome you sort of dudes",
  "contacts" : { "email"    : "png@example.com",
                 "mobile"   : "0404040202020",
                 "github"   : "ricardohemps",
                 "location" : "Gent Belgium",
                 "twitter" : "@ricardohemps"
               },



  display  : function() {

    function formatContact (itemName,itemValue)  {
      var formattedItem = HTMLcontactGeneric.replace("%data%",itemValue).replace("%contact%",itemName);
      $('#contacts').append(formattedItem);
    }

    //
    // ADD NAME and role
    //

    // Add Picture
    var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
    $('#header').append(formattedBiopic);


    //var HTMLbioPic = '<img src="%data%" class="biopic">';
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
      $('#header').append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role.slice(0));
      $('#header').append(formattedRole);

    $('#header').append(HTMLcontactsStart);

    formatContact("mobile",bio.contacts.mobile);
    formatContact("email",bio.contacts.email);
    formatContact("github",bio.contacts.github);
    formatContact("twitter",bio.contacts.twitter);
    formatContact("location",bio.contacts.location);

    //
    // ADD SKILLS
    //

    console.log(bio.skills[0]);

    if ( bio.skills.length > 0 )
    {

      var formattedSkill = "";
      $('#header').append(HTMLskillsStart);

      for (askill in bio.skills) {
        formattedSkill = HTMLskills.replace("%data%",bio.skills[askill]);
        $('#skills-h3').append(formattedSkill);
      }
    }





  }

};

var work =
{  "jobs" :
			 [  {"employer"    : "Coopers Animal Death",
		       "title"       : "developer",
  			   "location"    : "Berkhamsted England",
			     "dates"       : "1985-1986",
			     "description" : "Worked on Data General boxes with Oracle"
          },
          { "employer"    : "EASAMS Death From Above",
            "title"       :  "slave",
            "location"    : "Frimley England",
            "dates"       : "1988-1990",
            "description" : "Farmed out to various unlucky clients"
           },
           {"employer"    : "Oracle Switzerland",
            "title"       : "Pseudo Oracle Consultant",
            "location"    : "Baden Switzerland",
            "dates"       : "1988-1990",
            "description" : "Working the swiss market hard Dude"
           }
       ],
    display : function () {

      for (i in work.jobs) {

        console.log(i);

        // 1
        $('#workExperience').append(HTMLworkStart);

        // 2 format job employer with HTMLworkEmployer and title with HTMLworkTitle
        console.log(work.jobs[i].employer);
        console.log(work.jobs[i].title);
        console.log(work.jobs[i].location);
        console.log(work.jobs[i].dates);
        console.log(work.jobs[i].description);

        // var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedEmployer     = fillup(HTMLworkEmployer,    work.jobs[i].employer);
        var formattedTitle        = fillup(HTMLworkTitle,       work.jobs[i].title);
        var formattedDates        = fillup(HTMLworkDates,       work.jobs[i].dates);
        var formattedLocation     = fillup(HTMLworkLocation,    work.jobs[i].location);
        var formattedDescription  = fillup(HTMLworkDescription, work.jobs[i].description);

        // 3 append employer and title to the element with class work-entry:last
        $(".work-entry:last").append(   formattedEmployer
                                      + formattedTitle
                                      + formattedDates
                                      + formattedLocation
                                      + formattedDescription
                                    );
      }
  }

};



var projects = {
 	"projects" : [{
                  "title" : "Portfolio Project",
                  "dates" : "August 2015",
                  "description" :   "My first project, this involved a lot of doing what I was told and typing "
                                  + "into a thing called a text editor.  Then I opened up a browser and some stuff "
                                  + "appeared, this was deemed suitable for the task so I experienced a feeling of "
                                  + "deep satisfaction, although deep down I knew that I was only fooling myself.",
                  "images" : ["http://www.placehold.it/200x100","http://www.placehold.it/200x100"]
                },
                {
                  "title" : "resume project",
                  "dates" : "September 2015",
                  "description" : "second one, this time it's all about my resume",
                  "images" : ["http://www.placehold.it/200x100","http://www.placehold.it/200x100"]
                },
                {
                  "title" : "css project",
    	            "dates" : "October 2015",
    		          "description" : "first one b",
            	   	"images" : ["http://www.placehold.it/200x100","http://www.placehold.it/200x100"]
  }],

  display : function() {

    for (i in this.projects) {


      var formattedTitle        = fillup(HTMLprojectTitle,projects.projects[i].title);
      var formattedDates        = fillup(HTMLprojectDates,projects.projects[i].dates);
      var formattedDescription  = fillup(HTMLprojectDescription,projects.projects[i].description);

      $('#projects').append(HTMLprojectStart);
      $('#projects').append(formattedTitle);
      $('#projects').append(formattedDates);
      $('#projects').append(formattedDescription);

      var formattedImage = "";
      for (pic in this.projects[i].images) {
        formattedImage = fillup(HTMLprojectImage,projects.projects[i].images[pic]);
        $('#projects').append(formattedImage);
      }

    }

  }
};


var education =
{ 	"schools" :
		[
			{
				"name" : "Tynemouth Awesome School",
				"location" : "Tynemouth England",
				"degree" : "BSc",
				"majors" : ["science","art"],
				"dates" : 2010,
				"url" : "school1@example.com"
			},
			{
				"name" : "Teesside polytechnic",
				"location" : "Middlesbrough England",
				"degree" : "BA",
				"majors" : ["poetry","french"],
				"dates" : 1932,
				"url" : "school2@example.com"
			}
    ],
    "onlinecourse" :
    [
    	{
    	"title" : "Existential javascript",
    	"school" : "Whodemy",
    	"dates" : "2010",
    	"url" : "http://udemy.example.com"
    	},
     	{
    	"title" : "Experimental css",
    	"school" : "Codemy",
    	"dates" : "2011",
    	"url" : "htpp://udemy.example.com"
    	}
    ],


    display : function() {

      var education = $('#education');
      education.append(HTMLschoolStart);

      for (aschool in this.schools) {

        education.append(  HTMLschoolName.replace("%data%",this.schools[aschool].name)
                         + HTMLschoolDegree.replace("%data%",this.schools[aschool].degree));
        // education.append(HTMLschoolDegree.replace("%data%",this.schools[aschool].degree));
        education.append(HTMLschoolDates.replace('%data%',this.schools[aschool].dates));
        education.append(HTMLschoolLocation.replace('%data%',this.schools[aschool].location));
        education.append(HTMLschoolMajor.replace('%data%',this.schools[aschool].majors));

      }

      education.append(HTMLonlineClasses);
      for (amooc in this.onlinecourse) {
        education.append(  HTMLonlineTitle.replace ('%data%',this.onlinecourse[amooc].title)
                         + HTMLonlineSchool.replace('%data%',this.onlinecourse[amooc].school));
        // education.append(HTMLonlineSchool.replace('%data%',this.onlinecourse[amooc].school));
        education.append(HTMLonlineDates.replace ('%data%',this.onlinecourse[amooc].dates));
        education.append(HTMLonlineURL.replace   ('%data%',this.onlinecourse[amooc].url));
      }

    }
/*
    var HTMLschoolStart = '<div class="education-entry"></div>';
    var HTMLschoolName = '<a href="#">%data%';
    var HTMLschoolDegree = ' -- %data%</a>';
    var HTMLschoolDates = '<div class="date-text">%data%</div>';
    var HTMLschoolLocation = '<div class="location-text">%data%</div>';
    var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';

var HTMLonlineTitle = '<h2> href="#">%data% ;
var HTMLonlineSchool = ' - %data%</a>;

var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><br><br><a href="#">%data%</a>'; */
};


//
// Click Log
//

$(document).click(function(loc)
{
  return logClicks(loc.pageX,loc.pageY);
});

console.log(work.length);

// Call Display Functions
work.display();
projects.display();
bio.display();
education.display();


// MAP AT THE BOTTOM
$('#mapDiv').append(googleMap);


astring = locationizer(work);
console.log(astring);

function locationizer(workobject) {

  var myArray = [];

  for (ajob in workobject.jobs)
  {
    myArray.push(workobject.jobs[ajob].location);
  }

  return myArray;

};

function fillup (source,data) {

  var mystring = source.replace("%data%",data);
  return mystring;

};


//
// INTERNATIONALIZE
//

$('#main').append(internationalizeButton);

var aName = inName(bio.name);
console.log(aName);

function inName ()
{
  var aname = bio.name.trim().split(" ");


  aname[1] = aname[1].toUpperCase();
  aname[0] = aname[0].slice(0,1).toUpperCase() + aname[0].slice(1).toLowerCase();

  return aname[0] + " " + aname[1];

}




