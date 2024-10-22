// link verification
use sqlx::{Pool, Postgres, Row};
use chrono::{DateTime, FixedOffset};
use tokio;

pub enum EvidenceType {
    Repository(String),
    ProjectLink(String),
    Image(String),
    Video(String),
    Certificate(String),
    LetterOfRecommendation(String),
    Testimony(String),
}

pub struct Evidence {
    pub id: i64,
    pub evidence_type: EvidenceType,
    pub last_update: DateTime<FixedOffset>,
    pub verified: bool,
    pub mentor_id: i64,
}

impl Evidence {
    async fn from_id(id: u64, pool: &Pool<Postgres>) -> Result<Self, sqlx::Error> {
        let evidence = sqlx::query(
            "SELECT * FROM evidence WHERE id = $1")
            .bind(id)
            .map(|row: sqlx::postgres::PgRow| {
                Self {
                    id: row.get("id"),
                    evidence_type: match row.get("evidence_type") {
                        "repository" => EvidenceType::Repository(row.get("content")),
                        "project_link" => EvidenceType::ProjectLink(row.get("content")),
                        "image" => EvidenceType::Image(row.get("content")),
                        "video" => EvidenceType::Video(row.get("content")),
                        "certificate" => EvidenceType::Certificate(row.get("content")),
                        "letter_of_recommendation" => EvidenceType::LetterOfRecommendation(row.get("content")),
                        "testimony" => EvidenceType::Testimony(row.get("content")),
                        _ => panic!("Invalid evidence type"),
                    },
                    last_update: row.get("last_update"),
                    verified: row.get("verified"),
                    mentor_id: row.get("mentor_id"),
                }
            })
            .fetch_one(pool)
            .await?;
        Ok(evidence)
        }
    }
    