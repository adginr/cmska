# Import all the models, so that Base has them before being
# imported by Alembic

from models.base import Base
from models.user import User
