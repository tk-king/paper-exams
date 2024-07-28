from db.questions import QuestionDB


class QuestionController():
    def __init__(self):
        self.questionDB = QuestionDB()

    def add_question(self, user, question):
        return self.questionDB.add(user.id, question)
    
    def get_questions(self, user):
        return self.questionDB.get(user.id)