import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    nameAdm = Column(String(50), nullable=False)
    password = Column(Integer, nullable=False)
    passwordAdm = Column(Integer, nullable=False)
    email = Column(String(50), nullable=False)
    phone = Column(Integer, nullable=False)
    default_shipping_address = Column(Integer, nullable=False)


class Products(db.Model):
    __tablename__ = 'Products'
    id = Column(Integer, primary_key=True)
    sku = Column(Integer, nullable=False)
    name = Column(String(50), nullable=False)
    img = Column(String(250), nullable=False)
    description = Column(String(250), nullable=False)
    price = Column(Integer, nullable=False)
    thumbnail = Column(String(250), nullable=False)
    category_id = Column(Integer, ForeignKey("Categories.id"))
    categories = relationship("Categories")


class Categories(db.Model):
    __tablename__ = 'Categories'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False)
    description = Column(String(250), nullable=False)
    thumbnail = Column(String(250), nullable=False)


class Order(db.Model):
    __tablename__ = "Order"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    amount = Column(Integer, primary_key=True)
    shipping_address = Column(Integer, primary_key=True)
    order_addres = Column(Integer, primary_key=True)
    order_date = Column(Integer, primary_key=True)
    order_email = Column(String(250), nullable=False)
    order_status = Column(String(250), nullable=False)
    user = relationship("User")


class OrderDetails(db.Model):
    __tablename__ = "OrderDetails"
    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey("Order.id"))
    product_id = Column(Integer, ForeignKey("Products.id"))
    price = Column(Integer, primary_key=True)
    quatity = Column(Integer, primary_key=True)
    order = relationship("Order")
    products = relationship("Products")


class Messsages(db.Model):
    __tablename__ = "Messages"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("User.id"))
    message = Column(String(250), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
