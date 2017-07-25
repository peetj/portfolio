window.onload = function(){
    // Initialise

    // Get first project
    let currP = projects[0];

    // Set project title, image, description and details
    $('.project-title').html(currP.title);
    $('.project-image').attr('src', 'img/1.png');
    $('.project-desc').html(currP.desc);
    let listItems = "";
    for(let i=0; i<currP.details.length;i++){
        listItems += "<li>"+currP.details[i]+"</li>";
    }
    $('.project-details-list').html(listItems)
}

function setProject(pId) {
    console.log("Set Project:", pId);

    // Get the project
    let currP = projects[pId];

    // Set project title
    $('.project-title').html(currP.title);
    $('.project-image').attr('src', currP.image);
    $('.project-desc').html(currP.desc);
    let listItems = "";
    for(let i=0; i<currP.details.length;i++){
        listItems += "<li>"+currP.details[i]+"</li>";
    }
    $('.project-details-list').html(listItems)
}

projects = [
    {
        title: "The Darling Hotel",
        image: "img/1.png",
        desc: 'A complete build of <a href="thedarling.com.au" target="_blank">The Darling Hotel</a> from the ground up using ReactJS, GraphQL and Drupal. I built much of the frontend. The build took 3 months',
        details: ["Cutting edge technology was used.","SASS framework bulma.io utilised.","50 components built."]
    },
    {
        title: "ABC Environment Portal",
        image: "img/2.png",
        desc: "A brand new (from the ground up) CMS for the ABC. My HTML was <em>the best we have ever seen</em> - from the .NET backend team",
        details: ["I setup the frontend architecture.","Used local storage to cache portal content.","Completely decoupled the frontend from the backend."]
    },
    {
        title: "The ABC Channel Widget",
        image: "img/3.png",
        desc: "This widget was built in (Javascript) and took RSS channels for display",
        details: ["Built in Flex and Javascript.","Downloadable and usable anywhere.","Javascript build took 3 weeks."]
    },
    {
        title: "Nexgen Codecamp",
        image: "img/4.png",
        desc: "Nexgen Codecamp is a tech startup that educates 10-16 year olds in coding and robotics.",
        details: ["Bootstrap build.","Integrated with forms and payments."]
    },
    {
        title: "Open Data Stream",
        image: "img/5.png",
        desc: "A public datastream of temperature sensor readings published every 2 seconds",
        details: ["Built with Arduino & Raspberry Pi 3.","Languages: C, Python, Javascript, Bash.","Published to satori.com."]
    },
    {
        title: "SongCat for iPad",
        image: "img/6.png",
        desc: "Complete build in Objective-C of a music app for live musicians",
        details: ["I built the whole frontend","I learnt Objective-C on the way","I designed the UX as well"]
    },
    {
        title: "Space Invaders",
        image: "img/7.png",
        desc: "Clone of Space Invaders. One of the many games I have built",
        details: ["Object oriented build.","Almost identical to original","I also built a course around it."]
    },
    {
        title: "STEM English",
        image: "img/8.png",
        desc: "Counting the number of words equal to 100 points",
        details: ["Scrabble like points per letter.","Analyses 100,000+ words.","Ability to throttle the run speed."]
    },
]
