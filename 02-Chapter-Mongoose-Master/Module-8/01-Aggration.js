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
                        $multiply: [{ $rand: {} }, 100]
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
    { $out: "salarywithpractice" }
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
    { $out: "salarywithpractice" }
])

// ------- $merge:practise --> new collection e sob kichuke merge korbo



db.practice.aggregate([])


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
    // { $out: "salarywithpractice"}
    { $merge: "practice" }
])

// --------------------------------------------------- 🗂️ Modle-_ 4-------------------------------------------------------

// ------- gorup: unique gulo return kore gender er

db.practice.aggregate([
    //group stage
    // {$group: { _id: "$gender"}},
    // {$group: { _id: "$age"}}
    // {$group: { _id: "$age", gender: "$gender"}} is not working
])

// age and gender mile jotogulo unique combination hoi ta

db.practice.aggregate([
    {
        $group: {
            _id: {
                age:"$age",
                gender:"$gender"
            }
        }
    }
])

db.practice.aggregate([
    {
        $group: {
            _id: {
                age:"$age",
                gender:"$gender",
                occupation:"$occupation",
                mobileNo:"$phone"
            }
        }
    }
])

// --------------------------------------------------- 🗂 Module-5------------------------------------------------------

db.practice.aggregate([
    {
        $group: {
            _id: {
                _id:"$salary",
                person:{$sum: 1} //accmulator
            }
        }
    },
    //sort 
    {
        $sort: {_id:-1}
    }
  
])

db.practice.aggregate([
    //match
    {
        $match: {age: {$gt: [18]}}
    },
    //group
    {
        $group: {
            _id: {
                _id:"$salary",
                person:{$sum: 1} //accmulator
            }
        }
    },
    //project
    {
        $project: {
            _id:0,
            salary:"$_id",
            person:1
        }
    }, 
    //sort 
    {
        $sort: {_id:-1}
    },
    //limit
    {
        $limit: 3
    }
    
])






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