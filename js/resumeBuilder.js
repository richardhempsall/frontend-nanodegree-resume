
var bio =
{ "name" : "Persona Nongrata",
  "role" : "bossdude of the roolitude",
  "biopic"  : "images/nerdlaptop.png",
  "skills" : ["java","oracle Developer","oracle application framework","SQL","pl/sql"],
  "welcomeMessage" : "My name is rh and I welcome you sort of dudes",
  "contacts" : { "email"    : "png@example.com",
                 "mobile"   : "0404040202020",
                 "github"   : "ricardohemps",
                 "location" : "Gent Belgium"
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
       ]
};


var projects =
{ 	"projects" : [{
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
                }]
};

projects.display = function() {
  for (i in projects.projects)
  {


    var formattedTitle				= fillup(HTMLprojectTitle,projects.projects[i].title);
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



var education =
{ 	"schools" :
		[
			{
				"name" : "a school",
				"location" : "Tynemouth England",
				"degree" : "bsc",
				"majors" : ["science","art"],
				"dates" : "whenever",
				"url" : "school1@example.com"
			},
			{
				"name" : "school 2",
				"location" : "London England",
				"degree" : "ba",
				"majors" : ["poetry","french"],
				"dates" : "19something",
				"url" : "school2@example.com"
			}
    ],
    "onlinecourse" :
    [
    	{
    	"title" : "ltl",
    	"school" : "udemy",
    	"dates" : "2010",
    	"url" : "udemy.com"
    	},
     	{
    	"title" : "ltlsdf",
    	"school" : "udemy",
    	"dates" : "2011",
    	"url" : "udemy.com"
    	}
    ]
};

//
// ADD PIC and NAME
//
//var HTMLbioPic = '<img src="%data%" class="biopic">';
var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
$('#header').append(formattedBiopic);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$('#header').append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role.slice(0));
$('#header').append(formattedRole);


//
// ADD SKILLS
//

console.log(bio.skills[0]);

if ( bio.skills.length > 0 )
{



  var formattedSkill = "";
  $('#header').append(HTMLskillsStart);

  for (askill in bio.skills)
  {

    formattedSkill = HTMLskills.replace("%data%",bio.skills[askill]);
    $('#skills').append(formattedSkill);
  }

}
/*
  var formattedSkill = HTMLskills.replace( "%data%",bio.skills[0] );
  $('#skills').append(formattedSkill);

  formattedSkill = HTMLskills.replace( "%data%",bio.skills[1] );
  $('#skills').append(formattedSkill);

  $('#skills').append("HHHHH");

  console.log("skills exist");
*/


//
// ADD WORK EXPERIENCE ....
//

$(document).click(function(loc)
{
  return logClicks(loc.pageX,loc.pageY);
});

console.log(work.length);

var nothing = displaywork();

function displaywork ()
{
  for (i in work.jobs)
  {

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

//
// ADD PROJECTS
//
projects.display();


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

function fillup (source,data)
{

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

// MAP AT THE BOTTOM
$('#mapDiv').append(googleMap);


