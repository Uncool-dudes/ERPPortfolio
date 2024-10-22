
struct Student{
    name: String,
    usn: String,
    branch: Branch,
    semester: u8,
    academic_record: AcademicRecord,
    portfolio: Portfolio,

    email: String,
    phone: String,
    password: String,
}

struct AcademicRecord {
    cgpa: f32,
    major: Major,
    minor: Option<Minor>,
    electives: Vec<Elective>,
    specialization: SpecializationStatus,
}

enum Major {
    BTech,
}

enum Minor {
    IEPD 
}

enum Elective {
    Guitar,
}



enum SpecializationStatus {
    None,
    Specialized { specialization: Specialization, score: f32 },
}

enum Specialization {
    DataScience,
}



enum Branch {
    CSE,
    BSC,
    BCA
}

struct Portfolio {
    projects: Vec<Project>,
    internships: Vec<Internship>,
    skills: Vec<Skill>,
    achievements: Vec<Achievement>,
}

struct Project {
    title: String,
    description: String,
    technologies: Vec<String>,
    evidence: Vec<Evidence>,
}

struct Internship {
    title: String,
    description: String,
    company: String,
    evidence: Vec<Evidence>,
}

struct Skill {
    name: String,
    level: SkillLevel,
}   

enum SkillLevel {
    Basic,
    Intermediate,
    Advanced,
}

struct Achievement {
    title: String,
    description: String,
    evidence: Vec<Evidence>,
}

enum Evidence {
    Link(String),
    Video(String),
    Image(String),
}

fn main() {
    let student = Student {
        name: "John Doe".to_string(),
        usn: "1CR18CS001".to_string(),
        branch: Branch::CSE,
        semester: 5,
        academic_record: AcademicRecord {
            cgpa: 8.0,
            major: Major::BTech,
            minor: Some(Minor::IEPD),
            electives: vec![Elective::Guitar],
            specialization: SpecializationStatus::Specialized {
                specialization: Specialization::DataScience,
                score: 9.0,
            },
        },
        portfolio: Portfolio {
            projects: vec![Project {
                title: "Project 1".to_string(),
                description: "Description 1".to_string(),
                technologies: vec!["Rust".to_string()],
                evidence: vec![Evidence::Link("https://github.com".to_string())],
            }],
            internships: vec![Internship {
                title: "Internship 1".to_string(),
                description: "Description 1".to_string(),
                company: "Company 1".to_string(),
                evidence: vec![Evidence::Link("https://github.com".to_string())],
            }],
            skills: vec![Skill {
                name: "Rust".to_string(),
                level: SkillLevel::Advanced,
            }],
            achievements: vec![Achievement {
                title: "Achievement 1".to_string(),
                description: "Description 1".to_string(),
                evidence: vec![Evidence::Link("https://github.com".to_string())],
            }],
        },
        email: "john.doe@gmail.com".to_string(),
        phone: "1234567890".to_string(),
        password: "password".to_string(),
    };

    println!("{:#?}", student);
}