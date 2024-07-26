from db.courses import CourseDB

class CourseController:
    def __init__(self):
        self.courseDB = CourseDB()

    def get_courses(self, user):
        return self.courseDB.get(user.id)
    
    def get_course(self, user, course_id):
        return self.courseDB.get_by_id(user.id, course_id)
    
    def add_course(self, user, course):
        return self.courseDB.add(user.id, course)
    
