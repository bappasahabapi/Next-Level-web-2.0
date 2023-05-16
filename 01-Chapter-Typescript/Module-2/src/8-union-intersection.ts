
//todo: union

type NoobDeveloper={
    name:string
}

type JuniorDeveloper={
    name:string,
    expertise:string,
    experience:number
}

const interDeveloper:NoobDeveloper|JuniorDeveloper={
    name:'bappa',
    expertise:'JavaScript',
    experience:1
}

// console.log(interDeveloper)

enum Level{
    junior='intern',
    mid='mid',
    senior='senior'
}
//todo: intersection

type SeniorDeveloper=NoobDeveloper &{
    expertise:string,
    experience:number,
    level:Level
    // level:'junior | mid |senior'
}

type NextLevelDeveloper=SeniorDeveloper &{
    leadership:number
}

const developer:NextLevelDeveloper={
    name:"Next bappa",
    experience:1,
    expertise:'java',
    leadership:2,
    level:Level.junior
    // level:"junior | mid |senior"
}
// console.log(developer);

//todo: we can use enum to develop this type