from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Float
from sqlalchemy.orm import relationship

from .database import Base

# missing tags for search queries
# not sure about Field table, excluding it from Dataset for now

class PotentialUser(Base):
    __tablename__ = "potential_users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=False)

class License(Base):
    __tablename__ = "licenses"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    url = Column(String, index=False)

    dataset = relationship("Dataset", back_populates="license")

class LayerType(Base):
    __tablename__ = "layer_types"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

    dataset = relationship("Dataset", back_populates="layer_type")

# class FieldType(Base):
#     __tablename__ = "field_types"
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, index=True)
    
#     field = relationship("Field", back_populates="type")

# class AliasType(Base):
#     __tablename__ = "alias_types"
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, index=True)

#     field = relationship("Field", back_populates="alias")

# class Field(Base):
#     __tablename__ = "fields"
#     id = Column(Integer, primary_key=True, index=True)

#     type_id = Column(Integer, ForeignKey("field_types.id"))
#     alias_id = Column(Integer, ForeignKey("alias_types.id"))

#     type = relationship("FieldType", back_populates="fields")
#     alias = relationship("AliasType", back_populates="fields")

class Dataset(Base):
    __tablename__ = "datasets"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    source = Column(String, index=True)
    url = Column(String, index=True)
    capture_time = Column(Date, index=True)
    epsg_code = Column(Integer, index=True)
    xmin = Column(Float, index=False)
    xmax = Column(Float, index=False)
    ymin = Column(Float, index=False)
    ymax = Column(Float, index=False)
    can_download = Column(Boolean, index=False)

    license_id = Column(Integer, ForeignKey("licenses.id"))
    layer_type_id = Column(Integer, ForeignKey("layer_types.id"))

    license = relationship("License", back_populates="datasets")
    layer_type = relationship("LayerType", back_populates="datasets")


    
