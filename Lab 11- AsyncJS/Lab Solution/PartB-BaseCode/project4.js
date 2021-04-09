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
        .catch(err => err)
}

getCourses().then(courses => console.log(courses))