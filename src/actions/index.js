import {
    FETCH_COURSES,
    REMOVE_COURSE,
    ADD_COURSE
} from './types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [

            {
                'title': 'Up and running with redis', 
                'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis',
                'enrolled': false
            },
            {
                'title': 'Ux for developers', 
                'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis',
                'enrolled': false
            }

        ]
    }
}

export function removeCourse(course) {
    return {
        type: REMOVE_COURSE,
        payload: course
    }
}

export function addCourse(course){
    return {
        type: ADD_COURSE,
        payload: course
    }
}