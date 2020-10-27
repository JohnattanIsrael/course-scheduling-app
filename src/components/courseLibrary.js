import React, { Component } from 'react';

class CourseLibrary extends Component {

    constructor(props) {
        super(props);

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
            <li className='course'>
                <div className='course__info'>
                    <div className='course__title-container'>
                        <div className='course__title'>
                            {course.title}
                        </div>
                    </div>
                </div>
                <div className='course__description'>
                    <h6 className='course__description-title'>
                        Course Description
                    </h6>
                    <p>{course.description}</p>
                </div>
            </li>
        )
    }

    render() {
        return (
            <ul>
                {this.renderCourse({ 'title': 'Up and running with redis', 'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis' })}
                {this.renderCourse({ 'title': 'Up and running with redis', 'description': 'Up and runing with redis, Up and runing with redis, Up and runing with redis, Up and runing with redis' })}
            </ul>
        );
    }
}

export default CourseLibrary;