import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeCourse } from '../actions/';

class Schedule extends Component {

    constructor(props) {
        super(props);

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
            <div key={this.props.courses.indexOf(course)} className={`slot ${course.enrolled ? 'slot__course' : 'slot__empty'}`}>
                <div>
                    {course.enrolled ? course.title : 'Empty Slot'}
                </div>
                <a className={`action slot__remove ${course.enrolled ? 'show-content' : 'hide-content' }`} onClick={() => this.props.removeCourse(course)}>
                    Remove Course
                </a>
            </div>
        )
    }
    render() {
        return (
            <div className='schedule__slots'>
                <div>
                    {this.props.courses.map(this.renderCourse)}
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { courses: state.courses };
}


function mapDispatchToProps(dispatch) {
    return{ 
        removeCourse: (course) => {
            dispatch(removeCourse(course))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);