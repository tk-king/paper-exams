import json
from bson import ObjectId
import numpy as np
from pydantic import BaseModel

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, np.ndarray):
            return o.tolist()
        if isinstance(o, BaseModel):
            return o.model_dump(by_alias=True)
        return json.JSONEncoder.default(self, o)