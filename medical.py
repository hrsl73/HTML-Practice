class MedicalDiagnosisSystem:
    def __init__(self):
        self.rules={
            "flu":["fever","cough","headache"],
            "cold":["cough","runny nose"],
            "covid":["fever","cough","shortness of breath"],
            "migrane":["headache","nausea"]
        }
    
    def diagnose(self,symptoms):
        diagnosis = []
        for illness,required_symptoms in self.rules.items():
            if all(symptom in symptoms for symptom in required_symptoms):
                diagnosis.append(illness)
        return diagnosis 
    def ask_for_symptoms(self):
        symptoms = []
        print("please answer the following questions with 'yes' or 'no' .")
        fever = input("do you have a fever?(yes/no):").strip().lower()
        if fever == "yes":
            symptoms.append("fever")
            
        cough = input("do you have a cough?(yes/no):").strip().lower()
        if cough == "yes":
            symptoms.append("cough")
        
        headache = input("do you have headache?(yes/no): ")
        if headache == "yes":
            symptoms.append("headache")
        
        runny_nose = input("do you have runny nose?(yes/no):")
        if runny_nose == "yes":
            symptoms.append("runny nose")

        shortness_of_breath = input("do you have shortness of breath?(yes/no)")
        if shortness_of_breath == "yes":
            symptoms.append("shortness of breath")
        
        nausea = input("do you have nausea?(yes/no): ")
        if nausea == "yes":
            symptoms.append("nausea")

        return symptoms 
    
def main():
    system = MedicalDiagnosisSystem()
    symptoms = system.ask_for_symptoms()
    diagnosis = system.diagnose(symptoms)
    if diagnosis:
        print("possible diagnosis: ", diagnosis)
    else:
        print("no possible diagnosis")

if __name__ == "__main__":
    main()
    
