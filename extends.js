class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends TeamMember{
    // name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    // location;
    constructor(name, location){
        // this.name = name;
        // this.location = location;
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
    // provideFeedback(){
    //     console.log(`${this.name} thank you for your feedback`)
    // }
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the feature ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region){
       super(name, location)
       this.region = region;
    }
    provideResume(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const alia = new Developer('alia vat', 'dhaka', 'react');
console.log(alia)
alia.provideFeedback();

const bipasa = new JobPlacement('bipasa', 'kolkata', 'india');
console.log(bipasa)