/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.
 */
//


import fs from 'fs'

function getCourses(cb) {
    fs.readFile('data/course.json', (err, data) => {
        if (!err) {
            const courses = JSON.parse(data)
            fs.readFile('data/staff.json', (err, data) => {
                if (!err) {
                    const staffs = JSON.parse(data)
                    for (const course of courses) {
                        const {firstname, lastname} = staffs.find(s => s.staffNo == course.instructorId)
                        course.instructorName = `${firstname} ${lastname}`
                    }
                    fs.readFile('data/student.json', (err, data) => {
                        if (!err) {
                            const students = JSON.parse(data)
                            for (const course of courses) {
                                const registeredStudents = students.filter(s => s.courseIds.includes(course.crn))
                                course.studentCount = registeredStudents.length
                            }

                            cb(null, courses)
                        } else {
                            cb(err, null)
                        }
                    })

                } else
                    cb(err, null)
            })
        } else
            cb(err, null)

    })
}

getCourses((err, data) => {
    if (!err) console.log(data)
    else console.log(err)
})

console.log('this code is below the call back but it will run before it')