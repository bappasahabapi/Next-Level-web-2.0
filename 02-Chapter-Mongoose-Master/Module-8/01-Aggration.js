db.practice.aggregate([])

db.practice.aggregate([
    { $match: { gender: 'Male', age: 18 } }
]).project({ age: 1, name: 1 })

// ------------- Add a new field to all document
db.practice.aggregate([
    { $addFields: { salary: 20000 } },
    { $project: { salary: 1 } }
])

db.practice.aggregate([
    {
        $addFields: {
            salary: {
                $floor: {
                    $multiply: [{ $rand: {} }, 100]
                }
            }
        }
    },
    { $project: { salary: 1 } }
])

db.practice.aggregate([
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 1000]
                    }
                }
            }
        }
    },
    { $project: { salary: 1 } }
])

//  salarywithpractise data new array te pabo but practise data pabo na.
db.practice.aggregate([
     //1st stage
    {
       
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 1000]
                    }
                }
            }
        },
       
        
    },
     //2nd stage
    { $project: { salary: 1 } },
    //3rd stage
    { $out: "salarywithpractice"}
])
//ager field pabo sei sathe salarywithpractise data new array te pabo
db.practice.aggregate([
     //1st stage
    {
       
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 1000]
                    }
                }
            }
        },
       
        
    },
     //2nd stage
    // { $project: { salary: 1 } },
    //3rd stage
    { $out: "salarywithpractice"}
])

// -------
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 
// ------------------------------ 