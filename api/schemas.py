from typing import Union
import datetime
from pydantic import BaseModel


class PotentialUserBase(BaseModel):
    email: str

class PotentialUserCreate(PotentialUserBase):
    pass

class PotentialUser(PotentialUserBase):
    id: int
    
    class Config:
        orm_mode = True

class DatasetBase(BaseModel):
    name: str
    source: str
    url: str
    capture_time: datetime.date
    epsg_code: int
    extent_xmin: str
    extent_xmax: str
    extent_ymin: str
    extent_ymax: str
    can_download: bool

class DatasetCreate(DatasetBase):
    pass

class Dataset(DatasetBase):
    id: int
    license_id = int
    layer_type_id = int
    
    class Config:
        orm_mode = True

class LayerTypeBase(BaseModel):
    name: str

class LayerTypeCreate(LayerTypeBase):
    pass

class LayerType(LayerTypeBase):
    id: int
    
    class Config:
        orm_mode = True

class LicenseBase(BaseModel):
    name: str
    url: str

class LicenseCreate(LicenseBase):
    pass

class License(LicenseBase):
    id: int

    class Config:
        orm_mode = True