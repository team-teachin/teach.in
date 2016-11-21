import { combineReducers } from 'redux';
import studentsReducer from './students_reducer';
import assignmentsReducer from './assignments_reducer';
import classesReducer from './classes_reducer';
import currentAssignmentReducer from './current_assignment_reducer';
import resources_reducer from './resources_reducer';
import photo_reducer from './photo_reducer';
import classPointsReducer from './class_points_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	students: studentsReducer,
	assignments: assignmentsReducer,
	classes: classesReducer,
	currentAssignment: currentAssignmentReducer,
	form: formReducer,
	resources: resources_reducer,
	profilePicture: photo_reducer,
	class_points: classPointsReducer,
});

export default rootReducer;
