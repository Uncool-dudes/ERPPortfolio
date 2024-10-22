use crate::evidence::Evidence;
use sqlx::{Pool, Postgres, Row};
use tokio;

pub struct Mentor {
    pub id: i64,
    pub name: String,
    pub email: String,
    pub password: String,
    pub evidence: Vec<i64>,
}

impl Mentor {
    pub fn get_all_evidence(&self) -> Vec<Evidence> {
        let mut evidence = Vec::new();
        for id in &self.evidence {
            evidence.push(Evidence::get_by_id(*id));
        }
    }

    pub async fn get_by_id(id: i64) -> Self {
        let mentor = sqlx::query(
            "SELECT * FROM mentor WHERE id = $1")
            .bind(id)
            .map(|row: sqlx::postgres::PgRow| {
                Self {
                    id: row.get("id"),
                    name: row.get("name"),
                    email: row.get("email"),
                    password: row.get("password"),
                    evidence: row.get("evidence"),
                }
            })
            .fetch_one(pool)
            .await?;
        Ok(mentor)
    }
}