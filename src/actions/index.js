import {
    FETCH_COURSES,
    REMOVE_COURSE
} from './types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [

            {
                'title': 'Up and running with redis', 
                'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis',
                'enrolled': true
            },
            {
                'title': 'Ux for developers', 
                'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis',
                'enrolled': true
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