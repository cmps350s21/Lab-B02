/*
1.Rewrite the you created in Part-2 using promises.
*/
import fs from 'fs-extra'

function getCourses() {
    return fs.readJson('data/course.json')
        .then(courses => {
            return fs.readJson('data/staff.json')
                .then(staffs => {
                    for (const course of courses) {
                        const {firstname, lastname} = staffs.find(s => s.staffNo == course.instructorId)
                        course.instructorName = `${firstname} ${lastname}`
                    }
                    return courses
                })
        }) //courses with instruct name
        .then(courses => {
            return fs.readJson('data/student.json')
                .then(students => {
                    for (const course of courses) {
                        const registeredStudents = students.filter(s => s.courseIds.includes(course.crn))
                        course.studentCount = registeredStudents.length
                    }
                    return courses
                })
        })//courses with student count
        .catch(err => err)
}

getCourses().then(courses => console.log(courses))