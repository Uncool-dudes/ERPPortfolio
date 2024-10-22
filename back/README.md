# Student Role
## Objects
- Student
- Achievement
- Projects*
- Skill
- Evidence
- Event
  - Attend
  - Deadline
---
## Custom Types
- Specialization_status {
  selected { specializations : Vec\<specialization> },
  unselected { applied : bool }
 }

- Placed_status {
  Placed { companies : Vec\<company> },
  Unplaced { selected : bool }
}

- Verified_status {
  verified { }
}

- Mentor
  - mentor_name
  - mentor_email
---
### Student
#### usn 
  - university 
  - join_year
  - branch
  - usn_id

  - **Methods**
    - new_usn(String) -> usn
    - formated_string(self) -> String

#### Name
  - fname
  - mname?
  - lname

  - Methods
    - new_name(String) -> name

#### Email

#### Academic record
  - main_degree { honors : bool }
  - mut minor_degree(optional)
  - mut specialization+
  - mut CGPA

  - **Methods**
    - cgpa_query(usn.formated_string()) -> Float

- *personal_email*

- password
  - salted_password

  - Methods 
    - set(String) -> void

- Mentor


- Portfolio
  - Achievements
  - Projects
  - Skills

Achievements 
  - achievement_name
  - achievement_type 
  - achievement_evidence : Evidence

Evidence 
  - evidence_type
  - evidence_link
  - verified : Verified_status
