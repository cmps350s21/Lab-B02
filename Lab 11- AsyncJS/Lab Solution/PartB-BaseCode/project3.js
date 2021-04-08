/*
1.Rewrite the you created in Part-1 using promises.
*/

import fs from 'fs-extra'

// fs.readFile('data/course.json', (err, data) => {
//     if (!err)
//         console.log(JSON.parse(data))
//     else
//         console.log(err)
// });
//
// function readJson(filename) {
//     return new Promise((resolve, reject) => {
//         //read the file and get the data from the hdd
//         const success = false
//         if (success)
//             resolve('they will provide the data')
//         else
//             reject('error that happened')
//     })
// }

// readJson('pathtofile')
//     .then(message => console.log(message))
//     .catch(err => console.log(err))

fs.readJson('data/course5.json')
    .then(courses => console.log(courses))
    // .then(courses => courses.map(c => c.crn))
    // .then(courseCRNs => courseCRNs.length)
    // .then(totalNumberOfCourses => console.log(totalNumberOfCourses))
    .catch(err => console.log(err))