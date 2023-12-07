from sqlalchemy.orm import Session

from . import models, schemas

def get_dataset(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Dataset.offset(skip).limit(limit).all())

def create_potential_user(db: Session, potential_user: schemas.PotentialUserCreate):
    db_potential_user = models.PotentialUser(email=potential_user.email)
    db.add(db_potential_user)
    db.commit()
    db.refresh(db_potential_user)
    return db_potential_user
