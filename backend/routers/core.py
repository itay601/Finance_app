from typing import Optional
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,DeclarativeBase,Mapped,mapped_column


DATABASE_URL="sqlite:///my_db"


class Base(DeclarativeBase):
    pass


class DBUser(Base):
    __tablename__ = "users"

    id_: Mapped[int] = mapped_column(primary_key= True)
    mail: Mapped[str]
    username: Mapped[str] 
    password: Mapped[str]

engine = create_engine(DATABASE_URL)    
session_local = sessionmaker(autocommit=False,autoflush=False,bind=engine)
Base.metadata.create_all(bind=engine)


def get_db():
    database= session_local()
    try:
        yield database
    finally:
        database.close()    