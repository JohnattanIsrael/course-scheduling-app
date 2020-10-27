import {
    FETCH_COURSES
} from './types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [

            {
                'title': 'Up and running with redis', 'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis'
            },
            {
                'title': 'Ux for developers', 'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis'
            }

        ]
    }
}