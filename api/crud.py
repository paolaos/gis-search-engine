from sqlalchemy.orm import Session

from . import models, schemas

def get_datasets(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Dataset).offset(skip).limit(limit).all()

def create_potential_user(db: Session, potential_user: schemas.PotentialUserCreate):
    db_potential_user = models.PotentialUser(**potential_user.dict())
    db.add(db_potential_user)
    db.commit()
    db.refresh(db_potential_user)
    return db_potential_user

def create_license(db: Session, license: schemas.LicenseCreate):
    db_license = models.License(**license.dict())
    db.add(db_license)
    db.commit()
    db.refresh(db_license)
    return db_license

def get_potential_user_by_email(db: Session, email: str):
    return db.query(models.PotentialUser).filter(models.PotentialUser.email == email).first()

def create_layer_type(db: Session, layer_type: schemas.LayerTypeCreate):
    db_layer_type = models.LayerType(**layer_type.dict())
    db.add(db_layer_type)
    db.commit()
    db.refresh(db_layer_type)
    return db_layer_type

def create_dataset(db: Session, dataset: schemas.DatasetCreate):
    db_dataset = models.Dataset(**dataset.dict())
    db.add(db_dataset)
    db.commit()
    db.refresh(db_dataset)
    return db_dataset