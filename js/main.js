// Home
$('#home .fa-caret-down').click(function() {
  $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000, 'swing');
});


// Work Experience
function renderWorkObject(title, position, time, duties, imgPath) {
  return {
    title: title,
    position: position,
    time: time,
    duties: duties, //an array that will be transformed into a list
    imgPath: imgPath
  };
}

//duties array for each work position
var verizonDuties = [
  'Developed new performance test suite and benchmark framework to provide users with additional flexibility and scalability features on new cloud based production platform',
  'Deployed dockerized web service to remotely invoke local test services for enhanced feature test metric collection',
  'Built and integrated system infrastructure components from bare metal structure for the racks in data center',
  'Automated performance modules for product feature testing using Python to invoke deployed webservice methods to enhance testing speed and performance.',
  'Created graphical user interfaces using JavaScript, Jquery, Ajax and the Jade Html engine. Used Nodejs for backend development to enable procedural testing and processing.',
  'Scripted a java client using JDBC to retrieve device information during onboarding process for device activation',
  'Regulated and monitored disk space usage on servers by alerting users once disk space threshold was reached and by cleaning any dangling docker images. This tool was used to create more space in the environment.',
  'Parsed test metric collection using Kibana test suite to consolidate reports and validate test data',
  'Reconfigured server IP addresses¬¬¬ and allotted system capacities for servers',
  'Learned system specific architecture and software to assist in deploying services for testing'
];
var icamDuties = [
  'Responsible for maintaining and hosting web page content on new domains using content manager engine',
  'Transferred content from multiple sources onto the staging site and to the web server periodically',
  'Updated web page designs and increased functionality of web pages to facilitate better user interaction',
  'Collected data for required annual research publications for documentation and dissemination of information',
  'Utilized finance module to generate expense reports for payments and purchases made for laboratory materials',
  'Additional duties involved managing file systems and assisting with clerical duties to run the office efficiently'
];
var dheemtanaDuties = [
  'Redesigned webpage layout using Html and CSS to facilitate user experience and interaction',
  'Setup domain name and utilized server side utilities to host webpage on a web server for the department web suite ',
  'Generated new web portal medium to educate users about the organization purpose by updating and enhancing webpage content as recommended by team members'
];
var asucdDuties = [
  'Collaborate with a team of justices to review current and past legislation amended by Senate',
  'Evaluate petitions concerning the presiding committees for those in office',
  'Advocate on behalf of the student body on legislation pursued by the legislative branch',
  'Revised legislation regarding circumstantial and sensitive information',
  'Brought awareness to potential risk of wrongful action in authoritative bodies'
];
var calpirgDuties = [
  'Advanced the club’s active efforts on public campaigns throughout campus and the community',
  'Organized events to encourage student involvement in organization ideals',
  'Directed interns and volunteers to monitor progress on campaigns and pledges for club funding',
  'Petitioned and advocated on behalf of student body on legislation present in Congress',
  'Promoted awareness of campaigns through campus by managing and coordinating workshops and related events',
  'Interacted with local businesses and media companies to coordinate donations and proceeds for campaign funding'
];

var verizon = renderWorkObject('Verizon, IOT Platform', 'Product and Software Development Intern', 'June 2016 - September 2016', verizonDuties, 'img/verizon.png');
var icam = renderWorkObject('NEAT/ICAM Laboratory', 'Student Computer Assistant', 'April 2016 - September 2016', icamDuties, 'img/icam.png');
var dheemtana = renderWorkObject('Davis Dheem Tana', 'Events Committee Chair and Website Manager', 'September 2015 - June 2017', dheemtanaDuties, 'img/ddtlogo.jpg');
var asucd = renderWorkObject('Associated Students of the University of California, Davis', 'Associate Court Justice', 'March 2015 - September 2016', asucdDuties, 'img/asucd.png');
var calpirg = renderWorkObject('California Public Interest Research Group', 'Visibility Chair', 'December 2013 - October 2014', calpirgDuties, 'img/Calpirg.jpg');

function genHTMLfromObject(workObj) {

};
